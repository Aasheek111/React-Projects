// peerService.js
import socket from "../Socket/socket";

export default function peerService() {
  
 const pc = new RTCPeerConnection({
  iceServers: [
    { urls: "stun:stun1.l.google.com:19302" }, 
    {
      urls: "turn:relay1.expressturn.com:3480",
      username: "000000002074120375",        
      credential: "jYlmwjdghSd+97J4JRTbvCiRSq8="   
    }
  ],
});



  //  Send ICE candidates to remote peer
  pc.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit("candidate", event.candidate);
    }
  };

  //  Handle incoming offer
  async function handleOffer(offer) {
    await pc.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    socket.emit("answer", answer);
    return answer;
  }

  //  Handle incoming answer
  async function handleAnswer(answer) {
    await pc.setRemoteDescription(new RTCSessionDescription(answer));
  }

  //  Handle incoming ICE candidate
  async function handleCandidate(candidate) {
    try {
      await pc.addIceCandidate(new RTCIceCandidate(candidate));
    } catch (e) {
      console.error("Error adding received ice candidate", e);
    }
  }

  //  Create offer (Peer A)
  async function createOffer() {
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    socket.emit("offer", offer);
    console.log("OFFER Is",offer)
    return offer;
  }

  //  Attach local stream (camera/mic)
  function handleLocalStream(stream) {
    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
  }

  //  Listen for remote stream
  function onRemoteStream(callback) {
    pc.ontrack = (event) => {
      callback(event.streams[0]);
    };
  }

  return {
    pc,
    createOffer,
    handleOffer,
    handleAnswer,
    handleCandidate,
    handleLocalStream,
    onRemoteStream,
  };
}

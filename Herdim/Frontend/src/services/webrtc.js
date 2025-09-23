import socket from "../Socket/socket";

export async function createOffer(localStream, onRemoteStream) {
  //  Create a peer connection
  const peer = new RTCPeerConnection({
    iceServers: [
      { urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"] },
    ],
  });

  //  Add local tracks to peer
  localStream.getTracks().forEach(track => peer.addTrack(track, localStream));

  // Handle remote tracks
  peer.ontrack = (event) => {
    onRemoteStream(event.streams[0]); // callback to set remote video srcObject
  };

  // Handle ICE candidates
  peer.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit("ice-candidate", event.candidate);
    }
  };

  // Create an offer
  const offer = await peer.createOffer();
  await peer.setLocalDescription(offer);

  // Send offer to server for remote peer
  socket.emit("offer", offer);

  return peer; // return the peer to use later for answer
}

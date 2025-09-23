```javascript


RTCPeerConnection()--->this is the main obj and is represent a two peer connection and we can add audio video , and handel the 
icecandicate(we will discuss after this) 

const pc = new RTCPeerConnection({
  iceServers: [
    { urls: ["stun:stun.l.google.com:19302"] } // helps find public IP
  ]
});

*  We can atttach the local track like this:
localStream.getTracks().forEach(track => pc.addTrack(track, localStream));


*  We can listen for remote tracks like this :
pc.ontrack = (event) => {
  remoteVideo.srcObject = event.streams[0];
};




ICE Candidates
ICE = Interactive Connectivity Establishment.
Each peer finds possible network paths to the other peer (local IP, NAT, public IP).
Event onicecandidate fires when a candidate is found:

pc.onicecandidate = (event) => {
  if (event.candidate) socket.emit("ice-candidate", event.candidate);
};


The remote peer adds them via:
await pc.addIceCandidate(candidate);



createOffer()--->Used by the caller to generate an “offer” that describes what media it wants to send/receive. 
*  Returns a RTCSessionDescription object.

const offer = await pc.createOffer();
await pc.setLocalDescription(offer);
socket.emit("offer", offer); // send to remote peer this is while using the socketio

RTCSessionDescription contains two key things:
type: "offer" or "answer"
sdp: Session Description Protocol string (contains codecs, media info, etc.)

setLocalDescription()--> Tells the browser: This is my description of what I can send/receive.
Must be called after createOffer() or createAnswer().

Browser uses this info to prepare ICE candidates and other signaling info.


setRemoteDescription()--->Called by the receiver (or peer responding to an offer) to set what the remote peer wants.
Example:
await pc.setRemoteDescription(new RTCSessionDescription(offer));

This tells your browser: “This is what the other peer wants to send/receive.”
After setting remote description, the browser knows how to handle incoming tracks and codecs.



createAnswer()--->After receiving an offer, the remote peer generates an answer.
It describes what it can send/receive back.

Example:
const answer = await pc.createAnswer();
await pc.setLocalDescription(answer);
socket.emit("answer", answer);



Flow Summary

Caller (Peer Aashik):
createOffer() → setLocalDescription() → send offer via signaling. (we used websocket as a example here for signaling)

Callee (Peer Elon):
Receive offer → setRemoteDescription(offer) → createAnswer() → setLocalDescription(answer) → send answer

Caller (Peer Aashik):
Receive answer → setRemoteDescription(answer)

Both peers:
Exchange ICE candidates → addIceCandidate()

Connection established → video/audio flows.


//More simplified version:
Full WebRTC Handshake Flow (Two Peers A & B)
1. Peer A (caller)

Calls createOffer().
Calls setLocalDescription(offer) → tells its own browser “this is what I can do.”

Sends the offer to Peer B through a signaling channel (e.g., WebSocket, HTTP POST, MQTT, Firebase, etc.).

2. Peer B (callee)

Receives the offer (via signaling).

Calls setRemoteDescription(offer) → tells its browser “this is what A wants.”
Calls createAnswer().
Calls setLocalDescription(answer) → saves its own capabilities.

Sends the answer back to Peer A via signaling.

3. Peer A again

Receives the answer.
Calls setRemoteDescription(answer) → tells its browser “this is what B can do.”

Now both sides know each other’s capabilities (codecs, resolution, media types). 


ICE Candidates (Networking Step)

So far, A and B just know what they want to exchange (offer/answer) but don’t know how to connect across the internet.

Each peer runs ICE (Interactive Connectivity Establishment).
This discovers possible network routes (local LAN IP, public IP, TURN server, etc.).
For every route, a candidate is generated.
Each candidate is sent via signaling (again WebSocket, etc.).
The other peer receives it and calls addIceCandidate(candidate).
Eventually, one pair of candidates works → and the browsers connect peer-to-peer.



 // ITS ALL GUDDU 

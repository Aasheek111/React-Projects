import { useRef } from "react";
import socket from "../Socket/socket";
import React from "react";
import { useEffect } from "react";

function VideoChat() {
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);
  const pc = useRef(null); //webrtc pair connection ko lagi

  useEffect(() => {
    pc.current = new RTCPeerConnection();
    // Step 1: Setup PeerConnection
    pc.current = new RTCPeerConnection();

    // Step 2: Handle incoming remote stream
    pc.current.ontrack = (event) => {
      remoteVideo.current.srcObject = event.streams[0];
    };

    // Step 3: Socket listeners
    socket.on("offer", async ({ sdp, from }) => {
      await pc.current.setRemoteDescription(new RTCSessionDescription(sdp));
      const answer = await pc.current.createAnswer();
      await pc.current.setLocalDescription(answer);
      socket.emit("answer", { sdp: answer, to: from });
    });

    socket.on("answer", async ({ sdp }) => {
      await pc.current.setRemoteDescription(new RTCSessionDescription(sdp));
    });

    socket.on("ice-candidate", async ({ candidate }) => {
      try {
        await pc.current.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (e) {
        console.error(e);
      }
    });

    return () => {
      socket.off("offer");
      socket.off("answer");
      socket.off("ice-candidate");
    };
  }, []);

  const startCall = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    localVideo.current.srcObject = stream;
    stream.getTracks().forEach((track) => pc.current.addTrack(track, stream));

    const offer = await pc.current.createOffer();
    await pc.current.setLocalDescription(offer);

    socket.emit("offer", { sdp: offer, to: "other-socket-id" }); // TODO: handle room/user ids
  };

  const shareScreen = async () => {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    const screenTrack = screenStream.getTracks()[0];

    // Replace current video track with screen
    const sender = pc.current
      .getSenders()
      .find((s) => s.track.kind === "video");
    sender.replaceTrack(screenTrack);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="remote bg-red-400 w-full h-screen relative">
           {/* I am remote video */}
           <video ref={remoteVideo}></video>
          <div className="local  absolute bottom-0 right-0 h-40 w-40">
          {/* I am local video */}
          <video ref={localVideo} autoPlay muted />
        </div>
      </div>
        <div className="flex justify-around">
            <button onClick={startCall} className="border p-1 w-25 m-1 bg-green-800 text-white rounded-xl">Call</button>
            <button onClick={shareScreen} className="border p-1 w-30 m-1 bg-orange-700 rounded-xl text-whi">Share Screen</button>

        </div>
    </div>
  );
}

export default VideoChat;

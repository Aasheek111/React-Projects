import { useRef } from "react";
import socket from "../Socket/socket";
import React from "react";
import { useEffect, useState } from "react";
import { useUser } from "./UserContext";

function VideoChat() {
  const { room } = useUser();
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);
  const pc = useRef(null); //webrtc pair connection ko lagi

  const [users, setUsers] = useState([]); //aafno id
  const [myId, setMyId] = useState(null);
  const [targetId, setTargetId] = useState(null); // opposite ko id

  useEffect(() => {
    pc.current = new RTCPeerConnection();

    pc.current.ontrack = (event) => {
      //yo chai fire hunxa when remote peer adds some media
      remoteVideo.current.srcObject = event.streams[0];
    };

    pc.current.onicecandidate = (event) => {
      //this fires when browser finds new possible route or new icecandidate
      if (event.candidate) {
        socket.emit("ice-candidate", event.candidate); //we send the object when ice-candidate through the sockey
      }
    };

    return () => {
      socket.off("startcall");
    };
  }, []);

  const startCall = async () => {
    try {
      const constraints = { video: true, audio: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      localVideo.current.srcObject = stream;
    } catch (error) {
      console.error("Error opening video camera.", error);
    }
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
        <button
          onClick={startCall}
          className=" p-1 w-25 m-1 bg-green-800 text-white rounded-xl"
        >
          Call
        </button>
        <button
          
          className=" p-1 w-30 m-1 bg-orange-700 text-white  rounded-xl text-whi"
        >
          Share Screen
        </button>
      </div>
    </div>
  );
}

export default VideoChat;

import { useRef } from "react";
import socket from "../Socket/socket";
import React from "react";
import { useEffect, useState } from "react";
import { useUser } from "./UserContext";
import peerService from "../services/peerService";

const {
  createOffer,
  handleOffer,
  handleAnswer,
  handleCandidate,
  handleLocalStream,

  onRemoteStream,
} = peerService();

function VideoChat() {
  const { room } = useUser();
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideo.current.srcObject = stream;
        handleLocalStream(stream);
      });

    socket.on("offer", async (offer) => {
      await handleOffer(offer);
    });

    socket.on("answer", (answer) => {
      handleAnswer(answer);
    });

    socket.on("candidate", (candidate) => {
      handleCandidate(candidate);
    });

    onRemoteStream((stream) => {
      remoteVideo.current.srcObject = stream;
    });

    return () => {
      socket.off("offer");
      socket.off("answer");
      socket.off("candidate");
    };
  }, []);

  const startCall = async () => {
    await createOffer();
    console.log("CLICKEDD");
  };

const shareScreen =async()=>{

  try{
 await navigator.mediaDevices.getDisplayMedia({video:true,audio:true},(stream)=>{
  localVideo.current.srcObject = stream;
  handleLocalStream(stream);
})

  }
  catch(err){
    console.log(err)
  }
}

  return (
    <div className="flex w-full flex-col">
      <div className="remote bg-red-400 w-full h-screen relative">
        {/* I am remote video */}
        <video ref={remoteVideo} autoPlay ></video>
        <div className="local  absolute bottom-0 right-0 h-40 w-40">
          {/* I am local video */}
          <video ref={localVideo} autoPlay muted />
        </div>
      </div>
      <div className="flex justify-around">
        <button
          className=" p-1 w-25 m-1 bg-green-800 text-white rounded-xl"
          onClick={startCall}
        >
          Call
        </button>
        <button className=" p-1 w-30 m-1 bg-orange-700 text-white  rounded-xl " onClick={shareScreen}>
          Share Screen
        </button>
      </div>
    </div>
  );
}

export default VideoChat;

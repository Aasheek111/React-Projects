import { useRef } from "react";
import socket from "../Socket/socket";
import React, { useEffect } from "react";
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

  const shareScreen = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });
      localVideo.current.srcObject = stream;
      handleLocalStream(stream);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gray-800 p-2 md:p-5">
      {/* Video Container */}
      <div className="relative flex-1 bg-black rounded-xl overflow-hidden flex items-center justify-center">
        <video
          ref={remoteVideo}
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 w-24 h-24 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-white shadow-lg">
          <video
            ref={localVideo}
            autoPlay
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3 mt-4 flex-wrap">
        <button
          className="px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-xl"
          onClick={startCall}
        >
          Call
        </button>
        <button
          className="px-4 py-2 bg-orange-700 hover:bg-orange-600 text-white font-semibold rounded-xl"
          onClick={shareScreen}
        >
          Share Screen
        </button>
      </div>
    </div>
  );
}

export default VideoChat;

import React from "react";
import { useUser } from "./UserContext";
import { useEffect } from "react";
import { useState } from "react";
import socket from "../Socket/socket";
import VideoChat from "./VideoChat";
function Dashboard() {
  const {user,room}=useUser();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat", ({ user,message}) => {
      setMessages((prev) => [...prev, {user,message}]);
    });
        return () => {
      socket.off("chat");
    };
  },[]);

  const handelSend = (e) => {
    e.preventDefault();
    if (message.trim() == "") return;
    console.log(user)
    socket.emit("chat", { user, message });

    setMessage("");
  };

  return (
    <div>
      <div className="flex h-screen w-full">
        <VideoChat/>
        <div className=" flex-3">
          <video />
        </div>

        <div className="flex flex-col felx-1">
          <div className="text-center text-orange-700">CHAT:</div>

          {/* this is chatbox */}
          <div className="chat flex-1 bg-blue-200 p-3 rounded-2xl flex flex-col gap-1">
          {messages.map((mes, ind) => (
            <div key={ind}> <b className="text-red-800">{mes.user.name}</b>:{mes.message}</div>
          ))}
          </div>
          <div >
            {/* this is chat Send */}
            <form action="" className="flex">

            <input type="text" className="border-1 p-1 m-2  w-full rounded" value={message} onChange={(e)=>setMessage(e.target.value)} />
            <button className="p-1 m-2 border-1 rounded " onClick={handelSend}>
              Send
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

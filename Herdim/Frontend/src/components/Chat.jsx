import React from "react";
import { useUser } from "./UserContext";
import { useEffect } from "react";
import { useState } from "react";
import socket from "../Socket/socket";
import { useRef } from "react";
function Chat() {
  const { user, room } = useUser();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const isJoined=useRef(false);
  useEffect(() => {

    if(!isJoined.current){
        socket.emit("joined", user.name);
        isJoined.current=true;
    }

    socket.on("chat", ({ user, message }) => {
      setMessages((prev) => [...prev, { type: "chat", user, message }]);
    });

    socket.on("joined", (person) => {
    //   users.push(person);
    //   setUsers((prev) => [...prev, person]);
      setMessages((prev) => [
        ...prev,
        { type: "joined", person, message: "Joined the room" },
      ]);
    });
    return () => {
      socket.off("chat");
      socket.off("joined");
    };
  }, []);

  const handelSend = (e) => {
    e.preventDefault();
    if (message.trim() == "") return;
    console.log(user);
    socket.emit("chat", { user, message });
    setMessage("");
  };

  return (
    <div>
      <div className="flex h-screen w-full">
        <div className=" flex-3">
          <video />
        </div>

        <div className="flex flex-col felx-1">
          <div className="text-center text-orange-700">CHAT:</div>

          {/* this is chatbox */}
          <div className="chat flex-1 bg-blue-200 p-3 rounded-2xl flex flex-col gap-1">
            {messages.map((mes, ind) => {
              // map must return jsx but i didnot so i got error here
              if (mes.type == "joined") {
                return (
                  <div key={ind}>
                    <b className="text-red-800">{mes.person}</b>:{mes.message}
                  </div>
                );
              } else if (mes.type == "chat") {
                return (
                  <div key={ind}>
                    {" "}
                    <b className="text-red-800">{user.name}</b>:{mes.message}
                  </div>
                );
              }
            })}
          </div>
          <div>
            {/* this is chat Send */}
            <form action="" className="flex">
              <input
                type="text"
                className="border-1 p-1 m-2  w-full rounded"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="p-1 m-2 border-1 rounded "
                onClick={handelSend}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

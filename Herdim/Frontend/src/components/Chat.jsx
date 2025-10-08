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
  const isJoined = useRef(false);
  const chatRef = useRef(null);

//for auto scroll
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!isJoined.current) { 
      socket.emit("joined", user.name);
      isJoined.current = true;
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
      <div className="flex flex-col  bg-gray-800 text-white h-[34vh] sm:h-[100vh]">
        {/* this is chatbox after this  */}
        <div
          className="chat flex-1  p-3 rounded-2xl flex flex-col gap-1 overflow-y-auto "
          ref={chatRef}
        >
          <div className="text-center text-orange-700 font-bold">CHAT:</div>
          {messages.map((mes, ind) => {
            // map must return jsx but i didnot so i got error here
            if (mes.type == "joined") {
              return (
                <div key={ind}>
                  <b className="text-green-400">{mes.person}</b>:{mes.message}
                </div>
              );
            } else if (mes.type == "chat") {
              return (
                <div key={ind}>
                  {" "}
                  <b className="text-blue-500">{user.name}</b>:{mes.message}
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
              className="border-1 p-2 m-2  w-full rounded-xl outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="p-2 m-2 border-1 rounded-xl "
              onClick={handelSend}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;

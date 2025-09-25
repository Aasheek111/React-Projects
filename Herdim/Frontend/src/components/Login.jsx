import React, { useState } from "react";
import { useUser } from "./UserContext";

function Login() {
  const { setUser, setIslogin } = useUser();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || room.trim() === "") {
      setError("Fields cannot be empty !!");
    } else {
      setUser({ name, room });
      setIslogin(true);
    }
  };

  return (
    <div className="bg-gray-800 h-screen w-full  flex justify-center font-mono text-white  ">
        <form
          action=""
          className="flex flex-col  bg-blue-300 items-center m-20 p-15 rounded-2xl bg-linear-to-r from-cyan-700 to-blue-500"
          id="form"
          onSubmit={handelSubmit}
        >
          <h1 className="mb-7 text-4xl">
            Form
          </h1>

          
          Name:
          <input
            type="text"
            name=""
            autoComplete="off"
            className="border rounded-2xl p-2 outline-none m-2"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          Room Name:
          <input
            type="text"
            name=""
            autoComplete="off"
            className="border rounded-2xl p-3 outline-none m-2"
            id="room"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <button className="p-2 m-4 border rounded-xl w-30 bg-blue-900 border-none hover:bg-blue-800">Login</button>
          <div id="error" className="text-red-500">
            {error}
          </div>
        </form>
      </div>

  );
}

export default Login;

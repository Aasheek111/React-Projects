import React, { useState } from "react";
import { useUser } from "./UserContext";

function Login() {
    const {setUser,setIslogin}=useUser();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [error,setError]=useState("")

  const handelSubmit = (e) => {
    e.preventDefault();

    if(name.trim()===""||room.trim()===""){
        setError("Fields cannot be empty !!")
    }
    else{

        setUser({name,room});
        setIslogin(true)
    }

  };

  return (
    <div className="">
      <div className="">
        <form action="" className="flex flex-col  bg-blue-300 items-center m-20 p-10 rounded-2xl  " id="form" onSubmit={handelSubmit}>
          Name:
          <input type="text" name="" autoComplete="off" className="border rounded-2xl p-2" id="name" onChange={(e)=>{setName(e.target.value)}}/>
          Room Name:
          <input type="text" name="" autoComplete="off" className="border rounded-2xl p-2" id="room"  onChange={(e)=>{setRoom(e.target.value)} }/>
          <button className="p-0.5 m-2 border rounded">Login</button>

          <div id="error" className="text-red-500"> 
{error}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
function App() {
const [country,setcountry]=useState("pokhara")
  let getWeather = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    let city = "pokhara";
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      let response = await fetch(URL);
      let data = await response.json();
    } catch (er) {
      console.log("error", er);
    }
  };
  getWeather();
  return (
    <div className="  bg-[url(/clean.jpg)] bg-no-repeat bg-cover flex flex-col gap-9 justify-center items-center  text-black w-full min-h-screen">
      <div className="text-4xl lg:text-6xl">WEATHER</div>
      <div className="bg-blue-500 backdrop-blur-xl p-10 rounded-2xl flex lg:p-15">
        <input
          type="text"
          name=""
          className="bg-gray-300 text-black outline-none  rounded-2xl p-2 lg:text-3xl lg:p-4 lg:w-3xl"
          placeholder="Enter the city"
          id=""
        />
        <button className="text-white rounded-2xl text-3xl p-3">
          <FaSearch />
        </button>


       
      </div>
      <div className="data">

City: <span>{country}</span>
</div>
    </div>
  );
}

export default App;

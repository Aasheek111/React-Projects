import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Flag from './components/Flag'
import './App.css'
function App() {
  const [country, setcountry] = useState("pokhara");
  const [weather, setweather] = useState(null);
  const [error, seterror] = useState(null);

  let getWeather = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;

    try {
      let response = await fetch(URL);
      let data = await response.json();
      setweather(data);

      if (data.cod !== 200) {
        setweather(null);
        seterror(data.message);
      } else {
        seterror(null);
      }
    } catch (er) {
      console.log("error", er);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  let changecountry = (e) => {
    setcountry(e.target.value);
    console.log(weather);
  };

  return (
    <div className="  bg-[url(/clean.jpg)] bg-no-repeat bg-cover flex flex-col gap-9 justify-center items-center  text-black w-full min-h-screen">
      <div className="text-4xl font-semibold lg:text-5xl p-5">WEATHER</div>
      <div className="bg-blue-500 backdrop-blur-xl p-7 rounded-2xl flex lg:p-8  ">
        <input
          type="text"
          name=""
          className="bg-gray-300 text-black outline-none  rounded-2xl p-2 lg:text-3xl lg:p-4 lg:w-3xl"
          placeholder="Enter the city"
          id=""
          onChange={changecountry}
        />
        <button
          className="text-white rounded-2xl text-3xl p-3 cursor-pointer"
          onClick={getWeather}
        >
          <FaSearch />
        </button>
      </div>

      {weather && (
        <div className="data bg-blue-400 p-5 flex gap-2 flex-col items-center shadow-xl/20 shadow-black rounded-2xl lg:text-2xl">
         <Flag country={weather.sys.country}/>
          <p>
           <span className="naming font-semibold">City: </span> <span>{weather.name}</span>
          </p>
          <p>
          <span className="naming font-semibold">Humidity: </span> <span>{weather.main.humidity}%</span>
          </p>
          {/* <p>
            Clouds: <span>{weather.weather[0].main}</span>
          </p> */}
          <p>
          <span className="naming font-semibold">Temperature: </span>
            <span>
              {Math.floor(weather.main.temp - 273)}°C
            </span>
          </p>
          <p>
          <span className="naming font-semibold">Feels like: </span>
          { Math.floor(weather.main.feels_like - 273)}°C
          </p>
        </div>
      )}

      <div className="error">
        {error && <span className="text-red-800"> !!! {error}</span>}
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
function App() {
  const [country, setcountry] = useState("pokhara");
  const [weather, setweather] = useState(null);
  const[error,seterror]=useState(null);

  let getWeather = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;

    try {
      let response = await fetch(URL);
      let data = await response.json();
      setweather(data);
    } catch (er) {
      console.log("error", er);
      seterror(er.message)
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
      <div className="text-4xl lg:text-6xl">WEATHER</div>
      <div className="bg-blue-500 backdrop-blur-xl p-10 rounded-2xl flex lg:p-15">
        <input
          type="text"
          name=""
          className="bg-gray-300 text-black outline-none  rounded-2xl p-2 lg:text-3xl lg:p-4 lg:w-3xl"
          placeholder="Enter the city"
          id=""
          onChange={changecountry}
        />
        <button
          className="text-white rounded-2xl text-3xl p-3"
          onClick={getWeather}
        >
          <FaSearch />
        </button>
      </div>

      {weather && (
        <div className="data">
          <p>
            City: <span>{weather.name}</span>
          </p>
          <p>
            Humidity: <span>{weather.main.humidity}%</span>
          </p>
          <p>
            Clouds: <span>{weather.weather[0].main}</span>
          </p>
          <p>
            Temperature: <span>{Math.floor(weather.main.temp - 273)}°C but feels like {Math.floor(weather.main.feels_like - 273)}°C</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

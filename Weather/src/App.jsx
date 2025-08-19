import React from 'react'

function App() {

  let getWeather= async()=>{


    const apiKey = import.meta.env.VITE_API_KEY;
    
    let city="pokhara"
    let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    
    try{
      let response =await fetch(URL);
      console.log(response.json());
    }
    catch(er){
      console.log("error",er)
    }
    
  }
  getWeather()
  return (
    <div className='bg-red-100'>


    </div>
  )
}

export default App
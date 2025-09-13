
import React, { useEffect, useState } from "react";
import "../App.css";

function board() {
  const total = [
    "images/burja.jpg",
    "images/chidi.jpg",
    "images/hukkum.jpg",
    "images/inta.jpg",
    "images/lovely.jpg",
    "images/nepal.jpg",
  ];

  const [dices, setDice] = useState(total);
  const [issound, setissound] = useState(true);

  const random = () => {
    const temp = [
      total[Math.floor(Math.random() * total.length)],
      total[Math.floor(Math.random() * total.length)],
      total[Math.floor(Math.random() * total.length)],
      total[Math.floor(Math.random() * total.length)],
      total[Math.floor(Math.random() * total.length)],
      total[Math.floor(Math.random() * total.length)],
    ];
    setDice(temp);
  };

  const rolling = () => {
    let count = 0;
    const audio = new Audio("music/final.mp3");

    if (audio.paused&&issound) {
      audio.play();
    } else {
      audio.pause();
    }

    const timer = setInterval(() => {
      random();
      count++;
      if (count == 20) {
        clearInterval(timer);
        audio.pause();
      }
    }, 200);
  };

  
  return (
    <>
      <div className=" bg-red-800 items-center h-20 text-white text-4xl text-center flex justify-between ">
        <p className="p-5">Jhanda Burja</p>

        {issound ? (
          <img
            src="images/volume.png"
            className="w-17 p-5 "
            onClick={() => setissound(!issound)}
            alt=""
          />
        ) : (
          <img
            src="images/mute.png"
            className="w-17 p-5 "
            onClick={() => setissound(!issound)}
            alt=""
          />
        )}
      </div>
      <div className="bg h-[calc(100vh-80px)]">
        <div className="dice">
          <div className="flex p-5">
            <div className="grid grid-cols-3 gap-4 items-center m-auto  justify-center  ">
              {dices.map((image, index) => (
                <img
                  key={index}
                  className="w-40 rounded-2xl hover:scale-105"
                  src={image}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>


        <div className="roll text-white flex justify-center ">
          <button
            className="border-1 p-2 w-35 h-15 rounded-xl outline-none border-none bg-red-800 hover:bg-red-700 hover:cursor-pointer hover:scale-105"
            onClick={rolling}
          >
            Roll
          </button>
        </div>
      </div>
    </>
  );
}

export default board;

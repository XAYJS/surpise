import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/1.PNG";
import img2 from "../assets/2.JPG";
import img3 from "../assets/3.JPG";
import img4 from "../assets/4.PNG";
import img5 from "../assets/5.JPG";
import img6 from "../assets/6.JPG";
import img7 from "../assets/7.JPG";
import img8 from "../assets/8.JPG";
import img9 from "../assets/9.JPG";
import img10 from "../assets/10.JPG";

export default function Game() {
  return (
    <>
      <GameRandomPosition />
    </>
  );
}

function GameRandomPosition() {
  const [position, setPosition] = useState({ x: 500, y: 250 });
  const [pic, setPic] = useState(img1);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const name = location.state?.name || "My Love";
  const moveImage = () => {
    const randomX = Math.floor(Math.random() * 1000);
    const randomY = Math.floor(Math.random() * 420);
    setPosition({ x: randomX, y: randomY });
    setAmount(amount + 1);
  };

  const changeImage = () => {
    const randomImage = Math.floor(Math.random() * images.length);
    setPic(images[randomImage]);
  };

  useEffect(() => {
    if (amount === 10) {
      alert("You truly love me, I love you too. I hope we will be together forever.");
      navigate("/end", { state: { name } });
    }
  }, [amount]);

  let message = "";
  if (amount >= 1 && amount <= 5) {
    message = "Try more baby ❤️";
  } else if (amount >= 6 && amount <= 9) {
    message = "Keep going, you're so close 😘";
  } else if (amount === 0) {
    message = "I know you can do it 💖";
  }

  return (
    <div className="w-[1180px] h-[820px] flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 p-8">

      {/* Title */}
      <div className="flex flex-col items-center justify-center animate-pulse">
        <h1 className="text-5xl font-extrabold text-rose-600 drop-shadow-lg">
          ❤️ If you love me, you must win ❤️
        </h1>
        <p className="text-xl text-gray-700 mt-1">
          Only 10 clicks to prove your love.
        </p>
      </div>

      {/* Game Box */}
      <div className="relative bg-white bg-opacity-40 backdrop-blur-lg shadow-xl border border-pink-300 w-full h-[700px] rounded-3xl overflow-hidden">
        
        {/* Floating hearts */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="animate-bounce text-pink-400 text-6xl absolute top-10 left-20">💗</div>
          <div className="animate-bounce text-rose-500 text-5xl absolute bottom-20 right-32 animation-delay-200">💖</div>
          <div className="animate-bounce text-red-400 text-4xl absolute top-40 right-16 animation-delay-500">❤️</div>
        </div>

        {/* Moving Image */}
        <div
          className="absolute transition-all duration-200 cursor-pointer hover:scale-125"
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
          onClick={() => {
            moveImage();
            changeImage();
          }}
        >
          <img
            src={pic}
            alt="Love"
            className="w-28 h-28 object-cover rounded-full shadow-2xl border-4 border-pink-300"
          />
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="flex flex-row items-center justify-between w-full px-14">
        
        {/* Amount Area */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-rose-600">Amount: {amount}</h1>
          <h1 className="text-2xl font-semibold text-gray-700">Goal: 10</h1>
        </div>

        {/* Message Area */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-pink-600 tracking-wide">
            Let’s gooooo! 💞
          </h1>
          <h1 className="text-2xl font-semibold text-rose-500">{message}</h1>
        </div>
      </div>

    </div>
  );
}

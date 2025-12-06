import { useLocation, useNavigate } from "react-router-dom";
import myImage from "../assets/6.JPG";
import { TbHandLoveYou } from "react-icons/tb";

export default function Thanks() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "My Love";

  return (
    <div className="flex justify-center items-center flex-col
      bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300
      w-[1180px] h-[820px] relative overflow-hidden">

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="animate-bounce text-pink-400 text-6xl absolute top-10 left-20">💗</div>
        <div className="animate-bounce text-rose-500 text-5xl absolute bottom-20 right-32 animation-delay-200">💖</div>
        <div className="animate-bounce text-red-400 text-4xl absolute top-40 right-16 animation-delay-500">❤️</div>
      </div>

      {/* Card */}
      <div className="flex flex-col items-center gap-6 bg-white 
        p-10 rounded-3xl shadow-2xl border border-rose-200
        backdrop-blur-lg bg-opacity-80 z-10">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-rose-600 to-pink-600 drop-shadow-md
          animate-pulse text-center">
          🌹 Happy Anniversary 3 Years! 🌹
        </h1>

        {/* Image */}
        <div className="relative">
          <img
            src={myImage}
            alt="Love"
            className="w-64 rounded-2xl shadow-2xl border-4 border-rose-300"
          />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 
            text-3xl animate-pulse">
            💕
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-transparent 
          bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
          Thank you, {name}! ❤️
        </h1>

        {/* Message */}
        <p className="text-gray-700 text-center text-lg italic">
          Every moment with you is the best moment of my life. 💗
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/game", { state: { name } })}
          className="bg-gradient-to-r from-rose-500 to-pink-500
            hover:from-rose-600 hover:to-pink-600 text-white font-bold 
            rounded-xl px-6 py-4 shadow-xl transition-all transform
            hover:scale-110 text-lg flex items-center justify-center gap-2 
            animate-bounce"
        >
          I love you too, Baby <TbHandLoveYou size={25} />
        </button>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-br from-rose-100 to-pink-100 w-[1180px] h-[820px]">
      <div className="text-center">
        <FaHeart className="text-rose-500 mx-auto mb-4 animate-pulse" size={80} />
        <h1 className="text-5xl font-bold text-rose-600 mb-2">Welcome!</h1>
        <p className="text-rose-400 text-2xl font-semibold mb-4">12.12.2022 - 12.12.2025</p>
        <p className="text-gray-600 text-xl mb-8">Celebrate 3 years together</p>
        <button 
          onClick={() => navigate('/login')}
          className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold rounded-xl px-8 py-4 shadow-xl transition-all transform hover:scale-105 text-xl"
        >
          Start Celebration 💝
        </button>
      </div>
    </div>
  );
}
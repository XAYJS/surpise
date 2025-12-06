import {  useLocation } from "react-router-dom";

export default function End() {
  const location = useLocation();
  

  return (
    <div className="w-[1180px] h-[820px] flex flex-col items-center justify-center 
      bg-gradient-to-br from-pink-100 via-rose-100 to-purple-200 p-8">

      <h1 className="text-4xl font-extrabold text-rose-600 mb-6 animate-pulse">
        💌 My Love Letter 💌
      </h1>

      {/* Header: Dear and Date */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mb-6 px-6">
        <h2 className="text-3xl font-semibold">Dear: {location.state?.name || "My Love"}</h2>
        <h2 className="text-3xl font-semibold">Date: 12.12.2026</h2>
      </div>

      {/* Letter Body */}
      <div className="w-full max-w-4xl px-6 bg-white rounded-3xl shadow-lg p-8">
        <p className="text-2xl text-pink-700 leading-relaxed whitespace-pre-wrap indent-8 mb-6">
          Hello {location.state?.name || "my love"}, I love you so much. Even though I look like I don’t attend to you, I really care about you — your health, mental health, your problems, and I always try to console you. You may not see my actions a lot, but you know I try to help you every time you have a problem; I just don’t say anything.
        </p>

        <p className="text-2xl text-pink-700 leading-relaxed whitespace-pre-wrap indent-8 mb-6">
          I felt sad when you were far away from me. Living without you made my feelings sad and empty, like something was missing in my life. I absolutely try to study and work hard for my future and for you. Finally, I want to tell you, I love you very, very, very much.
        </p>

        {/* New End Section */}
        <p className="text-2xl text-rose-500 font-bold leading-relaxed whitespace-pre-wrap indent-8 text-center">
          💖 Happy Anniversary 3 Years! 💖
        </p>
      </div>

      {/* From */}
      <div className="flex justify-start w-full max-w-4xl px-6 mt-6">
        <p className="text-3xl font-semibold text-rose-600">From: XAY</p>
      </div>
    </div>
  );
}

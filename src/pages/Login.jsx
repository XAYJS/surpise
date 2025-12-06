import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  return <FormLogin />;
}

function FormLogin() {
  const [selectedDate, setSelectedDate] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return alert("Please select your name! 💖");
    if (selectedDate === "4") {
      navigate("/thanks", { state: { name } });
    } else {
      alert("Oops! Wrong date! Try again 😘");
    }
  };

  return (
    <div className="flex justify-center items-center w-[1180px] h-[820px] 
      bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 relative">

      {/* Background hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="animate-bounce text-pink-400 text-6xl absolute top-10 left-20">💗</div>
        <div className="animate-bounce text-rose-500 text-5xl absolute bottom-20 right-32">💖</div>
        <div className="animate-bounce text-red-400 text-4xl absolute top-40 right-16">❤️</div>
      </div>

      {/* Compact Card */}
      <div className="flex flex-col w-full max-w-md p-8 bg-white bg-opacity-90 backdrop-blur-md 
        rounded-3xl shadow-2xl border border-rose-200 z-10">

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text 
          bg-gradient-to-r from-rose-500 to-pink-500 mb-6 animate-pulse">
          💞 Test Your Love 💞
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name + Date in row format */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-4">

            {/* Name */}
            <label className="flex flex-col flex-1">
              <span className="text-rose-600 font-semibold">Who are you?</span>
              <select
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-rose-300 rounded focus:ring-2 focus:ring-rose-300"
              >
                <option value="">Click me for your name</option>
                <option value="kuy-berry">kuy-berry</option>
                <option value="bad-small-person">bad small person</option>
                <option value="angry-girl">angry girl</option>
                <option value="piglet">piglet</option>
                <option value="my-girl">my girl</option>
              </select>
            </label>

            {/* Date */}
            <label className="flex flex-col flex-1">
              <span className="text-rose-600 font-semibold">Anniversary Date</span>
              <select
                value={selectedDate}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "4") {
                    alert("Why you so cute like this 😘");
                    setSelectedDate(value);
                  } else {
                    alert("Kuyyyyyyyyyyyyyyyyyyyyyyyy!");
                    setSelectedDate("");
                  }
                }}
                className="p-2 border border-rose-300 rounded focus:ring-2 focus:ring-rose-300"
              >
                <option value="">Let you make sure</option>
                <option value="1">02/01/2022</option>
                <option value="2">01/02/2022</option>
                <option value="3">21/05/2022</option>
                <option value="4">12/12/2022</option>
                <option value="5">12/12/2021</option>
              </select>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-rose-500 to-pink-500 
              hover:from-rose-600 hover:to-pink-600 text-white font-bold 
              rounded-xl p-3 shadow-lg transition-all transform hover:scale-105 animate-bounce"
          >
            Submit 💌
          </button>
        </form>
      </div>
    </div>
  );
}

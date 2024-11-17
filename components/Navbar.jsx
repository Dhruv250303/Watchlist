import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div
      className={`flex border-[3px] space-x-7 items-center pl-5 py-7 w-[100%] ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <img
        className="w-[60px]"
        src={"https://icon-library.com/images/movies-icon-png/movies-icon-png-8.jpg"}
        alt=""
      />
      <Link to="/home" className="text-blue-500 text-2xl font-bold">
        Home
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-2xl font-bold">
        WatchList
      </Link>
      <button
        onClick={toggleDarkMode}
        className={`ml-auto px-4 py-2 text-lg font-semibold rounded ${
          darkMode ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"
        }`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;

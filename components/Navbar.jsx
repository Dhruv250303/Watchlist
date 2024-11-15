import React from "react";
import Logo from "./mainlogo.png";


import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex border-[3px] space-x-7 items-center pl-5 py-7 w-[100%] ">
    
      <img  className="w-[60px]" src={'https://icon-library.com/images/movies-icon-png/movies-icon-png-8.jpg'} alt="" />
      <Link to="/home" className="text-blue-500 text-2xl font-bold">Home</Link>
      <Link to="/watchlist" className="text-blue-500 text-2xl font-bold">WatchList </Link>
      {/* <Link to="" className="text-blue-500 text-2xl font-bold">About</Link>
      <Link to="" className="text-blue-500 text-2xl font-bold">Copyright</Link> */}
      
    </div>
  );
};

export default Navbar;

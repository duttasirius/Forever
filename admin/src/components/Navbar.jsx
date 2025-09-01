import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="w-32 cursor-pointer" />

      {/* Logout Button */}
      <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-full shadow-md transition-all duration-300">
        Logout
      </button>
    </div>
  );
};

export default Navbar;

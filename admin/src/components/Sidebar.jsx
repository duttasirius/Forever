import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15%]">
        <NavLink
          className="flex items-center gap-2 px-4 py-2 rounded-full
             bg-white border border-gray-200 shadow-sm
             hover:bg-indigo-500 hover:text-white hover:shadow-md
             transition-all duration-300 ease-in-out"
          to="/add"
        >
          <div className=" flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 group-hover:bg-white">
            <img className="w-4 h-4" src={assets.add_icon} alt="Add" />
          </div>
          <p className="hidden md:block font-medium text-2xl">Add Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-2 px-4 py-2 rounded-full
             bg-white border border-gray-200 shadow-sm
             hover:bg-indigo-500 hover:text-white hover:shadow-md
             transition-all duration-300 ease-in-out"
          to="/list"
        >
          <div className=" flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 group-hover:bg-white">
            <img className="w-4 h-4" src={assets.order_icon} alt="Add" />
          </div>
          <p className="hidden md:block font-medium text-2xl">List Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-2 px-4 py-2 rounded-full
             bg-white border border-gray-200 shadow-sm
             hover:bg-indigo-500 hover:text-white hover:shadow-md
             transition-all duration-300 ease-in-out"
          to="/orders"
        >
          <div className=" flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 group-hover:bg-white">
            <img className="w-4 h-4" src={assets.order_icon} alt="Add" />
          </div>
          <p className="hidden md:block font-medium text-2xl">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

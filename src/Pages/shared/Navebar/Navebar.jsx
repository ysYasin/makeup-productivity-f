import React from "react";
import { IoMenu } from "react-icons/io5";
import NavSearch from "./NavSearch";

const Navebar = () => {
  return (
    <div className="w-[300px] px-3">
      {/* //menu section  */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl">MENU</h3>
        <IoMenu className="text-2xl cursor-pointer" />
      </div>
      {/* searchbar  */}
      <div className="mt-3">
        <NavSearch />
      </div>
      <div id="task"></div>
    </div>
  );
};

export default Navebar;

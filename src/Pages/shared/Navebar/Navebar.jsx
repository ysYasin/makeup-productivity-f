import React from "react";
import { IoMenu } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";

import NavSearch from "./NavSearch";
import DynamicList from "./itemList";
import NavebarTags from "./NavebarTags";

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
      <div id="task">
        <h3 className="text-xl font-bold uppercase mt-5">tasks</h3>
        <ul className="list-none mt-3 flex flex-col gap-2">
          <li className="flex items-center gap-3 text-slate-500 cursor-pointer">
            <MdKeyboardDoubleArrowRight /> Upcomming
          </li>
          <li className="flex items-center gap-3 text-slate-500 cursor-pointer">
            <FcTodoList /> Today
          </li>
          <li className="flex items-center gap-3 text-slate-500 cursor-pointer">
            <FaRegCalendarAlt />
            Calender
          </li>
          <li className="flex items-center gap-3 text-slate-500 cursor-pointer">
            <CiStickyNote />
            Sticky Wall
          </li>
        </ul>
      </div>
      {/* list  */}
      <div id="handleAddItem">
        <DynamicList></DynamicList>
      </div>

      <div id="tags">
        <NavebarTags></NavebarTags>
      </div>
    </div>
  );
};

export default Navebar;

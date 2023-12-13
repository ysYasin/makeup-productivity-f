import { RiListSettingsLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";

import NavSearch from "./NavSearch";
import DynamicList from "./itemList";
import NavebarTags from "./NavebarTags";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navebar = ({ showNavebar, setShowNavBar }) => {
  return (
    <div className="">
      <button
        className={`p-5 ${!showNavebar ? "inline-block" : "hidden"}`}
        onClick={() => setShowNavBar(true)}
      >
        <IoMenu className="text-2xl cursor-pointer" />
      </button>
      <div
        className={`w-[300px] p-6 ${showNavebar ? "inline-block" : "hidden"}`}
      >
        {/* //menu section  */}
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">MENU</h3>
          <button onClick={() => setShowNavBar(false)}>
            <IoMenu className="text-2xl cursor-pointer" />
          </button>
        </div>
        {/* searchbar  */}
        <div className="mt-3">
          <NavSearch />
        </div>
        <div id="task">
          <h3 className="text-xl font-bold uppercase mt-5">tasks</h3>
          <ul className="list-none mt-3 flex flex-col gap-2">
            <Link to="/upcomming">
              <li className="flex items-center gap-3 text-slate-500 cursor-pointer">
                <MdKeyboardDoubleArrowRight /> Upcomming
              </li>
            </Link>
            <Link to="/">
              <li className="flex items-center gap-3 text-slate-500 cursor-pointer">
                <FcTodoList /> Today
              </li>
            </Link>
            <Link to="/calender">
              <li className="flex items-center gap-3 text-slate-500 cursor-pointer">
                <FaRegCalendarAlt />
                Calender
              </li>
            </Link>
            <Link to="/stickywall">
              <li className="flex items-center gap-3 text-slate-500 cursor-pointer">
                <CiStickyNote />
                Sticky Wall
              </li>
            </Link>
          </ul>
        </div>
        {/* list  */}
        <div id="handleAddItem">
          <DynamicList></DynamicList>
        </div>

        <div id="tags">
          <NavebarTags></NavebarTags>
        </div>

        <div id="signoutandLogin" className="flex flex-col items-start mt-24">
          <button className="text-lg items-center font-medium flex gap-3">
            <RiListSettingsLine /> Setting
          </button>
          <button className="text-lg items-center font-medium flex gap-3">
            <VscSignOut /> Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navebar;

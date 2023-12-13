import React from "react";
import Today from "../Home/Today";
import TommorowTask from "./TommorowTask";
import ThisWeakTask from "./ThisWeekTask";

const Upcomming = () => {
  return (
    <div className="w-full">
      <header className="py-5 border-b w-full ">
        <h1 className="text-5xl suger font-medium">Upcomming !</h1>
      </header>
      <div className="flex flex-col w-full">
        <div className="min-h-[300px] border rounded-md m-2 p-2">
          <Today />
        </div>
        <div className="flex gap-6 items-center my-4 w-full">
          <div className="w-1/2 min-h-[300px] border rounded-md m-2 p-2">
            <TommorowTask></TommorowTask>
          </div>
          <div className="w-1/2 min-h-[300px] border rounded-md m-2 p-2">
            <ThisWeakTask></ThisWeakTask>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcomming;

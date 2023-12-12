import React from "react";
import Navebar from "../../Pages/shared/Navebar/Navebar";
import { Outlet } from "react-router-dom";

const MainLayOuts = () => {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0">
        <Navebar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayOuts;

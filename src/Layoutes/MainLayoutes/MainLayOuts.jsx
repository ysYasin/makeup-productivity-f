import { useState } from "react";
import Navebar from "../../Pages/shared/Navebar/Navebar";
import { Outlet } from "react-router-dom";

const MainLayOuts = () => {
  const [showNavebar, setShowNavBar] = useState(true);
  return (
    <div className=" grid grid-cols-12">
      <div
        className={`${
          showNavebar ? "col-span-3" : "col-span-1"
        } h-[100vh] sticky top-0`}
      >
        <Navebar showNavebar={showNavebar} setShowNavBar={setShowNavBar} />
      </div>
      <div className={`w-full ${showNavebar ? "col-span-9 " : "col-span-10"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayOuts;

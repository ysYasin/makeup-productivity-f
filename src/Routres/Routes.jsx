import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../Layoutes/MainLayoutes/MainLayOuts";
import Today from "../Pages/Home/Home/Today";
import Upcomming from "../Pages/Home/UpcommingTodos/Upcomming";
import StickyWall from "../Pages/stickyWall/StickyWall";
import Calender from "../Pages/Celender/Calender";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
    children: [
      {
        path: "/",
        element: <Today />,
      },
      {
        path: "/upcomming",
        element: <Upcomming />,
      },
      {
        path: "/stickywall",
        element: <StickyWall />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
    ],
  },
]);

export default Router;

import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../Layoutes/MainLayoutes/MainLayOuts";
import Today from "../Pages/Home/Home/Today";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
    children: [
      {
        path: "/",
        element: <Today />,
      },
    ],
  },
]);

export default Router;

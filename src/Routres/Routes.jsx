import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../Layoutes/MainLayoutes/MainLayOuts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
  },
]);

export default Router;

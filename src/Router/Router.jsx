import { createBrowserRouter } from "react-router";
import MainLayOuts from "../LayOuts/MainLayOuts";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Games from "../Pages/Games";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("GameData.json").then((res) => res.json()),
      },
      {
        path: "/games",
        element: <Games></Games>,
        loader: () => fetch("GameData.json").then((res) => res.json()),
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
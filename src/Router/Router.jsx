import { createBrowserRouter } from "react-router";
import MainLayOuts from "../LayOuts/MainLayOuts";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Games from "../Pages/Games";
import GameDetails from "../Pages/GameDetails";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ErrorLayOuts from "../LayOuts/ErrorLayOuts";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    errorElement: <ErrorLayOuts></ErrorLayOuts>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/GameData.json").then((res) => res.json()),
      },
      {
        path: "/games",
        element: <PrivateRoute><Games></Games></PrivateRoute>,
        loader: () => fetch("GameData.json").then((res) => res.json()),
      },
      {
        path: "/games/:id",
        element: <GameDetails></GameDetails>,
        loader: ({ params }) =>
          fetch("/GameData.json")
            .then((res) => res.json())
            .then((data) => data.find((game) => game.id == params.id)),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);

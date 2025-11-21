import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Component/Home";
import ErrorPage from "../Component/ErrorPage";
import Covarage from "../Component/Covarage";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Component/Login";
import Register from "../Component/Register";
import AboutUs from "../Component/AboutUs";
import SendAparcel from "../Component/SendAparcel";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/covarage",
        element: <Covarage></Covarage>,
        loader: () =>
          fetch("/public/serviceCenter.json.json").then((res) => res.json()),
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/sendParcel",
        element: (
          <PrivateRouter>
            <SendAparcel></SendAparcel>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;

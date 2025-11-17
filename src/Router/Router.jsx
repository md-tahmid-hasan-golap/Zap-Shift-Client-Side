import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Component/Home";
import ErrorPage from "../Component/ErrorPage";
import Covarage from "../Component/Covarage";

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
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Component/Home";
import ErrorPage from "../Component/ErrorPage";

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
    ],
  },
]);

export default router;

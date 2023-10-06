import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export { router, RouterProvider };

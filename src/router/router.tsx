import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Login } from "../components/login/login";
import { LoginMobile } from "../pages/login-mobile/login-mobile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginMobile />,
  },
]);

export { router, RouterProvider };

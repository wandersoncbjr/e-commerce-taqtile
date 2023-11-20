import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home/home";
import { LoginMobile } from "../pages/login-mobile/login-mobile";
import { SignUp } from "../pages/sign-up/sign-up";
import { CartPage } from "../pages/cart/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginMobile />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

export { router, RouterProvider };

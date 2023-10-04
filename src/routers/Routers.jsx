import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../pages/home/MainPage";
import ProductDetailPage from "../pages/detail/ProductDetailPage";
import CartPage from "../pages/cart/CartPage";
import LoginPage from "../pages/login/LoginPage";
import SignUpPage from "../pages/signup/SignUpPage";
import SubPage from "../pages/home/SubPage";
import Category3 from "../pages/home/Category3";
import Category1 from "../pages/home/Category1";
import Category2 from "../pages/home/Category2";
import Category4 from "../pages/home/Category4";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "subpage",
        element: <SubPage />,
      },
      {
        path: "category/tops-t-shirts",
        element: <Category1 />,
      },
      {
        path: "category/hoodies-sweatshirts",
        element: <Category2 />,
      },
      {
        path: "category/pants",
        element: <Category3 />,
      },
      {
        path: "category/bundle",
        element: <Category4 />,
      },
    ],
  },
]);

export default Routers;

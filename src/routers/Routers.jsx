import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../pages/home/MainPage";
import ProductDetailPage from "../pages/detail/ProductDetailPage";
import CartPage from "../pages/cart/CartPage";
import LoginPage from "../pages/login/LoginPage";
import SignUpPage from "../pages/signup/SignUpPage";
import MyPage from "../pages/my";
import SettingPage from "../pages/my/sub/SettingPage";
import UserInfoPage from "../pages/my/sub/UserInfoPage";
import MySalesPage from "../pages/my/sub/MySalesPage";
import SubPage from "../pages/home/SubPage";


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
        path: "my",
        element: <MyPage />,
        children: [
          {
            index: true,
            element: <UserInfoPage/>
          },
          {
            path: 'settings',
            element: <SettingPage/>
          },
          {
            path: 'selas',
            element: <MySalesPage/>
          },
        ]
        
      },
      {
        path: "subpage",
        element: <SubPage />,
      },
      {
        path: "productdetailpage",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default Routers;

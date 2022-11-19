import Home from "../pages/home";
import Login from "../pages/login";
import NewUser from "../pages/newUser";

import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/notFound";
import LayoutPublic from "../Layout/LayoutPublic";
import Users from "../pages/users";
import UserDetails from "../pages/userDetails";
import Products from "../pages/products";
import ProductDetails from "../pages/productDetails";
import NewProduct from "../pages/newProduct";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/users/:id",
            element: <UserDetails />,
          },

          {
            path: "users/newuser",
            element: <NewUser />,
          },
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/products/:id",
            element: <ProductDetails />,
          },

          {
            path: "products/new",
            element: <NewProduct />,
          },
        ],
      },
    ],
  },
]);

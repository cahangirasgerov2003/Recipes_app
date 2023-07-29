import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Details, { loaderDetails } from "../pages/details/Details";
import Search from "../pages/search/Search";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/details",
          element: <Home />,
        },
        {
          path: "details/:id",
          element: <Details />,
          loader: loaderDetails,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

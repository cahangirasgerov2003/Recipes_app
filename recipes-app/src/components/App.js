import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Details from "../pages/details/Details";
import { NotFound } from "./NotFound";
// import { loaderDetails } from "../pages/details/Details";
import Search from "../pages/search/Search";
import { GlobalErrors } from "./GlobalErrors";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <GlobalErrors />,
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
          // loader: loaderDetails,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

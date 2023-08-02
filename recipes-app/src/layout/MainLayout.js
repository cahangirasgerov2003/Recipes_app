import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ColorSelector from "../components/ColorSelector";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ColorSelector />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;

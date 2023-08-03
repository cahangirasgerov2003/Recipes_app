import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ColorSelector from "../components/ColorSelector";
import { MainColorContext } from "../contexts/MainColorContext";
import "./MainLayout.css";

const MainLayout = () => {
  const { mode } = useContext(MainColorContext);
  const [vhGreat, setVhGreat] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log(location.key);
    console.log(window.innerHeight);
    console.log(document.body.clientHeight);
    const compareHeight = () => {
      if (window.innerHeight < document.body.clientHeight) {
        setVhGreat(false);
      } else {
        setVhGreat(true);
      }
    };

    compareHeight();
  }, [location.key]);

  return (
    <div className={`bg-${mode} pb-4`}>
      <Navbar />
      <ColorSelector />
      <div className={`container ${vhGreat ? "layoutContainer" : ""}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

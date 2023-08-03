import React, { useContext } from "react";
// import {  useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ColorSelector from "../components/ColorSelector";
import { MainColorContext } from "../contexts/MainColorContext";
import "./MainLayout.css";

const MainLayout = () => {
  const { mode } = useContext(MainColorContext);
  // const [vhGreat, setVhGreat] = useState(true);
  const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(window.innerHeight);
  //   console.log(document.body.clientHeight);
  //   console.log(location);
  //   const compareHeight = () => {
  //     if (window.innerHeight < document.body.clientHeight) {
  //       setVhGreat(false);
  //     } else {
  //       setVhGreat(true);
  //     }
  //   };

  //   compareHeight();
  // }, [location.pathname]);

  // useEffect(() => {
  //   function handlePageReload() {
  //     navigate("/");
  //   }

  //   window.onload = handlePageReload;

  //   return () => {
  //     window.onload = null; // Bileşen kaldırıldığında etkinlik dinleyicisini temizleme
  //   };
  // }, []);

  return (
    <div className={`bg-${mode} pb-4`}>
      <Navbar />
      <ColorSelector />
      <div
        className={`container ${
          location.pathname === "/" || location.pathname === "/create"
            ? " "
            : "layoutContainer"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

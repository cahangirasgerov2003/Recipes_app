import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchFood from "./SearchFood";
import { useContext } from "react";
import { MainColorContext } from "../contexts/MainColorContext";

const Navbar = () => {
  const { mainColor } = useContext(MainColorContext);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark`}
        style={{ backgroundColor: mainColor }}
      >
        <div className="container">
          <Link className="Navbar-brand brand me-3" to="/">
            Food Recipes
          </Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create
              </NavLink>
            </li>
          </ul>
          <SearchFood />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

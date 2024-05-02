import React, { useContext } from "react";
import { MainColorContext } from "../contexts/MainColorContext";
import "./NotFound.css";

export const NotFound = () => {
  const { mode } = useContext(MainColorContext);
  return (
    <div className="notFound mt-5 h2 d-flex justify-content-center notFoundContainer">
      <p className={`text-${mode === "dark" ? "light" : "dark"} text-center`}>
        Unfortunately, the page you were looking for could not be found
        &#128557;
      </p>
    </div>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./scss/custom.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <App />
  </>
);

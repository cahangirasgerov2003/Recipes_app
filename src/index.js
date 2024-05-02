import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./scss/custom.scss";
import { MainColorContextProvider } from "./contexts/MainColorContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <MainColorContextProvider>
      <App />
    </MainColorContextProvider>
  </>
);

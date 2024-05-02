import React, { useContext, useEffect, useRef, useState } from "react";
import { MainColorContext } from "../contexts/MainColorContext";
import "../components/ColorSelector.css";

import lightModeIcon from "../assets/light.svg";
import darkModeIcon from "../assets/dark.svg";

function ColorSelector() {
  const { changeMainColor, mode, changeModeColor } =
    useContext(MainColorContext);
  const [color, setColor] = useState(null);
  const colorRef = useRef(color);

  const handleColor = (selectedColor) => {
    setColor(selectedColor);
    // changeMainColor(color);
  };

  const changeMode = () => {
    changeModeColor(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (colorRef.current !== color) {
      changeMainColor(color);
      colorRef.current = color;
    }
  }, [color, changeMainColor]);

  return (
    <div className="container mt-3">
      <div className="colorSelector d-flex justify-content-end">
        <div className="toggleMode">
          <img
            src={mode === "dark" ? darkModeIcon : lightModeIcon}
            alt={`${mode} toogle`}
            onClick={changeMode}
          />
        </div>
        <h3
          className={`m-0 text-${mode === "dark" ? "white" : "dark"} ${
            mode === "dark" ? "borderBottomWhite" : "borderBottomBlack"
          }`}
        >
          Selected color : {color ? color : "#1d867f"}{" "}
        </h3>
        <input
          type="color"
          className="form-control form-control-color ms-2"
          id="exampleColorInput"
          defaultValue="#1d867f"
          onChange={(e) => {
            handleColor(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default ColorSelector;

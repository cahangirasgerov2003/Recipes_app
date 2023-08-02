import React, { useContext, useEffect, useState } from "react";
import { MainColorContext } from "../contexts/MainColorContext";

function ColorSelector() {
  const { changeMainColor } = useContext(MainColorContext);
  const [color, setColor] = useState(null);

  const handleColor = (selectedColor) => {
    setColor(selectedColor);
  };

  useEffect(() => {
    changeMainColor(color);
  }, [color, changeMainColor]);

  return (
    <div className="container mt-3 d-flex justify-content-end">
      <div className="colorSelector d-flex">
        <h3 className="m-0">Selected color : {color} </h3>
        <input
          type="color"
          className="form-control form-control-color ms-2"
          id="exampleColorInput"
          defaultValue="#2e1b18"
          onChange={(e) => {
            handleColor(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default ColorSelector;

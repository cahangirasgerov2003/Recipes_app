import React, { useContext, useEffect, useRef, useState } from "react";
import { MainColorContext } from "../contexts/MainColorContext";

function ColorSelector() {
  const { changeMainColor } = useContext(MainColorContext);
  const [color, setColor] = useState(null);
  const colorRef = useRef(color);

  const handleColor = (selectedColor) => {
    setColor(selectedColor);
    // changeMainColor(color);
  };

  useEffect(() => {
    if (colorRef.current !== color) {
      changeMainColor(color);
      colorRef.current = color;
    }
  }, [color, changeMainColor]);

  return (
    <div className="container mt-3 d-flex justify-content-end">
      <div className="colorSelector d-flex">
        <h3 className="m-0">Selected color : {color ? color : "#1d867f"} </h3>
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

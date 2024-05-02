import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainColorContext } from "../contexts/MainColorContext";

const ProductDetails = ({ food }) => {
  const { mainColor, mode } = useContext(MainColorContext);
  return (
    <div
      className={`card col-lg-4 col-md-6 mb-4 border-0 ${
        mode === "dark" ? "bg-dark" : ""
      }`}
    >
      <img
        src={food?.id <= 6 ? `./image/${food.resim}` : food.resim}
        alt={food.basliq}
      ></img>
      <div className={`card-body ${mode === "dark" ? "bg-white" : "foodInfo"}`}>
        <h5 className="card-title">{food.baslik}</h5>
        <p className="description">
          {food.aciklama.length > 40
            ? food.aciklama.slice(0, 40) + "..."
            : food.aciklama}
        </p>
        <Link
          to={`/details/${food.id}`}
          className="btn text-white"
          style={{ backgroundColor: mainColor }}
        >
          Food Details
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;

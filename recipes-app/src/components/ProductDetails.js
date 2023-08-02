import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainColorContext } from "../contexts/MainColorContext";

const ProductDetails = ({ food }) => {
  const { mainColor } = useContext(MainColorContext);
  return (
    <div className="card col-lg-4 col-md-6 mb-4 border-0">
      <img
        src={food?.id <= 6 ? `./image/${food.resim}` : food.resim}
        alt={food.basliq}
      ></img>
      <div className="card-body foodInfo">
        <h5 className="card-title">{food.baslik}</h5>
        <p className="description">{food.aciklama}</p>
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

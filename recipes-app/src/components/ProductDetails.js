import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = ({ food }) => {
  return (
    <div className="card col-lg-4 col-md-6 mb-4 border-0">
      <img src={`./image/${food.resim}`} alt={food.basliq}></img>
      <div className="card-body foodInfo">
        <h5 className="card-title">{food.baslik}</h5>
        <p className="description">{food.aciklama}</p>
        <Link to={`/details/${food.id}`} className="btn btn-outline-primary">
          Food Details
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;

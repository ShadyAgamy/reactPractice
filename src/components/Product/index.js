import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFav } from "../../redux/actions/products";
import "./styles.scss";
import prodImg from "./product.jpg";
export default function Product({PropertyName,image1,
  id,
  price,
  visits,
}){

  const getFavState =  useSelector((state) => {
    return state.allProperties[id]  !== undefined ? state.allProperties[id].favorite : false;
  })
  const dispatch = useDispatch();
  return (
    <div className="col product">
      <Link to={`/store/${id}`}>
        <img
          src={prodImg}
          alt="proporty"
        />
      </Link>
      <p className="addToFav" onClick={() => dispatch(addToFav(id))}>
        {getFavState ? (
          <i className="fa fa-heart" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        )}
      </p>
      <h3 className="title">{PropertyName}</h3>
      <h5 className="price">${price}</h5>
      <h3 className="title">Views: {visits}</h3>
    </div>
  );
}


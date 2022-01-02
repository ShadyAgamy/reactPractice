import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../../redux/actions/products";
import SimpleImageSlider from "react-simple-image-slider";
import Header from "../../components/Header/Header";
import "./styles.scss";

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
const images = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
];

function PropertyDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allProperties = useSelector((state) => {
    return state.allProperties;
  });

  const {
    PropertyName,
    description,
    address,
    price,
    locality,
    favorite,
    bedroom,
    CarpetArea,
  } = allProperties.find((property) => property.id === parseInt(id));

  return (
    <div>
      <Header />
      <div className="propertyDetails">
        <div className="row mt-4 px-4">
          <div className=" col-md-7">
            <div className="propertyPage mt-3 pr-4 ">
              <div className="d-flex justify-content-between align-items-center">
                <h1 class="display-4 text-capitalize">{PropertyName}</h1>
                <p className="">{locality.value}</p>
              </div>
              <p className="lead">{description}</p>
              <span className="strong">{price}$</span>
              <p className="my-3">{address}</p>
              <ul className="list-group">
                <li className="list-group-item">Bed rooms: {bedroom.value}</li>
                <li className="list-group-item">
                  Carpet Area: {CarpetArea.value}
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-md-5 position-relative">
            <p className="addToFav abs" onClick={() => dispatch(addToFav(id))}>
              {favorite ? (
                <i className="fa fa-heart" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              )}
            </p>
            <SimpleImageSlider
              width={"100%"}
              height={350}
              images={images}
              showNavs={true}
              autoPlay={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;

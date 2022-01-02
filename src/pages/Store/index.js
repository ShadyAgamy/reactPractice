import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import InputRange from "react-input-range";
import Header from "../../components/Header/Header";
import Product from "../../components/Product";
import "./styles.scss";

import { cities, selectOptions as bedrooms } from "../../database";

export default function Store() {
  const initialProducts = useSelector((state) => {
    return state.allProperties;
  });
  const [allProducts, setAllProducts] = useState(initialProducts);
  const [localityParams, setLocalityParams] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

  // convert cities array from database to select options
  const citiesOptions = cities.map((city) => {
    return {
      value: city,
      label: city,
    };
  });

  useEffect(() => {}, []);

  const displayProduct = () => {
    if (localityParams) {
      return allProducts
        .filter((product) => {
          return product.locality.label === localityParams;
        })
        .map((product) => {
          return <Product key={product.id} {...product} />;
        });
    }

    if (allProducts.length === 0)
      return <h6 className="text-center w-100">No Products Founded</h6>;
    else {
      return allProducts.map((product) => {
        return <Product key={product.id} {...product} />;
      });
    }
  };

  const handleChange = (selectedOption) => {
    console.log(selectedOption);
    let cities = selectedOption.value; // e.g ['Cairo', 'Red Sea']
    setLocalityParams(cities);
  };

  const handelPriceSelector = (value) => {
    setPriceRange({ ...value });
    filterProductsWithPrice();
  };
  const filterProductsWithPrice = () => {
    const filteredProductsWithPrice = initialProducts.filter((product) => {
      return (
        priceRange.max >= parseInt(product.price) &&
        parseInt(product.price) >= priceRange.min
      );
    });
    setAllProducts(filteredProductsWithPrice);
  };

  const handleBedRooms = (selectedOption) => {
    console.log(selectedOption.value);
    const filteredProductsWithBedRooms = initialProducts.filter((product) => {
      return parseInt(product.bedroom.value) === parseInt(selectedOption.value);
    });
    setAllProducts(filteredProductsWithBedRooms);
  };

  return (
    <div>
      <Header />
      <div className="row filterProperties">
        <div className="col col-md-6">
          <label className="form-label">By Locality</label>
          <Select
            onChange={handleChange}
            name="colors"
            options={citiesOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className="col col-md-6">
          <label className="form-label mb-4">Price Range</label>
          <InputRange
            maxValue={1000}
            minValue={0}
            value={priceRange}
            onChange={(value) => handelPriceSelector(value)}
          />
        </div>
        <div className="col col-md-6">
        <label className="form-label">Bedroom</label>
        <Select
          onChange={handleBedRooms}
          name="beedrooms"
          options={bedrooms}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      </div>

      <div className="products_list">
        <div className="row">{displayProduct()}</div>
      </div>
    </div>
  );
}

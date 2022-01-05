// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Select from "react-select";
// import InputRange from "react-input-range";
// import Header from "../../components/Header/Header";
// import Product from "../../components/Product";
// import "./styles.scss";
// import { filterWithLocality } from "../../redux/actions/products";

// import { cities, selectOptions as bedrooms } from "../../database";

// export default function Store() {
//   const dispatch = useDispatch();
//   const initialProducts = useSelector((state) => {
//     return state.allProperties;
//   });
//   const filteredProducts = useSelector((state) => {
//     return state.filteredProperties;
//   });
//   const [allProducts, setAllProducts] = useState(initialProducts);
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
//   const [filtered, setFiltered] = useState(null);

//   console.log(filtered)
//   let productsToRender;
//   if (filtered) {
//     productsToRender = filtered;
//   } else {
//     productsToRender = allProducts;
//   }

//   // convert cities array from database to select options
//   const citiesOptions = cities.map((city) => {
//     return {
//       value: city,
//       label: city,
//     };
//   });

//   useEffect(() => {
//     setAllProducts(initialProducts);
//   }, [initialProducts]);

//   useEffect(() => {
//     setFiltered(filteredProducts);
//   }, [filteredProducts]);

//   const displayProduct = () => {
//     return productsToRender.map((product) => {
//       return <Product key={product.id} {...product} />;
//     });
//   };

//   const handelLocalityChange = (selectedOption) => {
//     let cities = selectedOption.value; // e.g ['Cairo']
//     dispatch(filterWithLocality(cities, productsToRender));
//   };

//   // price
//   const handelPriceSelector = (value) => {
//     setPriceRange({ ...value });
//     filterProductsWithPrice();
//   };
//   const filterProductsWithPrice = () => {
//     const filteredProductsWithPrice = initialProducts.filter((product) => {
//       return (
//         priceRange.max >= parseInt(product.price) &&
//         parseInt(product.price) >= priceRange.min
//       );
//     });
//     setAllProducts(filteredProductsWithPrice);
//   };

//   // bedrooms
//   const handleBedRooms = (selectedOption) => {
//     const filteredProductsWithBedRooms = initialProducts.filter((product) => {
//       return parseInt(product.bedroom.value) === parseInt(selectedOption.value);
//     });
//     setAllProducts(filteredProductsWithBedRooms);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="row filterProperties">
//         <div className="col col-md-4">
//           <label className="form-label">By Locality</label>
//           <Select
//             onChange={handelLocalityChange}
//             name="colors"
//             options={citiesOptions}
//             className="basic-multi-select"
//             classNamePrefix="select"
//           />
//         </div>
//         <div className="col col-md-4">
//           <label className="form-label mb-4">Price Range</label>
//           <InputRange
//             maxValue={1000}
//             minValue={0}
//             value={priceRange}
//             onChange={(value) => handelPriceSelector(value)}
//           />
//         </div>
//         <div className="col col-md-4">
//           <label className="form-label">Bedroom</label>
//           <Select
//             onChange={handleBedRooms}
//             name="beedrooms"
//             options={bedrooms}
//             className="basic-multi-select"
//             classNamePrefix="select"
//           />
//         </div>
//       </div>

//       <div className="products_list">
//         <div className="row">{displayProduct()}</div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import InputRange from "react-input-range";
import Header from "../../components/Header/Header";
import Product from "../../components/Product";
import "./styles.scss";
import { filterWithLocality } from "../../redux/actions/products";

import { cities, selectOptions as bedrooms } from "../../database";

export default function Store() {
  const dispatch = useDispatch();
  const initialProducts = useSelector((state) => {
    return state.allProperties;
  });
  const [allProducts, setAllProducts] = useState(initialProducts);
  const [localityParams, setLocalityParams] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [bedRooms, setbedRooms] = useState(0);

  useEffect(() => {
    setAllProducts(initialProducts);
  }, [initialProducts]);

  // convert cities array from database to select options
  const citiesOptions = cities.map((city) => {
    return {
      value: city,
      label: city,
    };
  });

  const displayProduct = () => {
    let productsToBeRender = allProducts;

    // locality filter
    if (localityParams) {
      productsToBeRender = productsToBeRender.filter((product) => {
        return product.locality.label === localityParams;
      });
    }

    // price filter
    if (priceRange.max !== 0) {
      productsToBeRender = productsToBeRender.filter((product) => {
        return (
          priceRange.max >= parseInt(product.price) &&
          parseInt(product.price) >= priceRange.min
        );
      });
    }

    if (bedRooms > 0) {
      productsToBeRender = productsToBeRender.filter((product) => {
        return parseInt(product.bedroom.value) === parseInt(bedRooms);
      });
    }

    return productsToBeRender.map((product) => {
      return <Product key={product.id} {...product} />;
    });
  };

  // LOCALITY
  const handelLocalityChange = (selectedOption) => {
    let cities = selectedOption.value; // e.g ['Cairo', 'Red Sea']
    setLocalityParams(cities);
  };

  // price
  const handelPriceSelector = (value) => {
    setPriceRange({ ...value });
  };

  // bedrooms
  const handleBedRooms = (selectedOption) => {
    setbedRooms(selectedOption.value);
  };

  return (
    <div>
      <Header />
      <div className="row filterProperties">
        <div className="col col-md-4">
          <label className="form-label">By Locality</label>
          <Select
            onChange={handelLocalityChange}
            name="colors"
            options={citiesOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className="col col-md-4">
          <label className="form-label mb-4">Price Range</label>
          <InputRange
            maxValue={1000}
            minValue={0}
            value={priceRange}
            onChange={(value) => handelPriceSelector(value)}
          />
        </div>
        <div className="col col-md-4">
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

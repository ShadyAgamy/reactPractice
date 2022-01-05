import React from "react";
import {  useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import ProductWizard from "../../components/ProductWizard";
import {useHistory} from 'react-router-dom'
import {addProperty} from "../../redux/actions/products";

const AddProduct = () => {
  let history = useHistory()
  const dispatch = useDispatch();
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(200);
    await dispatch(addProperty(values));
    history.push("/store")
  };

  const initialValues = {"favorite":false};

  return (
    <div>
      <Header />
      <ProductWizard onFormSubmit={onSubmit} initialValues={initialValues} />
    </div>
  );
};

export default AddProduct;

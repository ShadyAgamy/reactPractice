import React, { useEffect } from "react";
import { Field } from "react-final-form";
import Dropzone from "../DropZone";
import { useSelector, useDispatch } from "react-redux";
import Input from "../Input";
import Select from "react-select";
import { cities, carpetArea, selectOptions } from "../../database";
import TextArea from "../textarea";

export default function AddProperty({  submitting, values }) {
  const productToAddSelector = useSelector((state) => state.productToAdd);
  useEffect(() => {}, [productToAddSelector]);
  const dispatch = useDispatch();


  const localityOptions = cities.map((city) => {
    return {
      value: city,
      label: city,
    };
  });


  const SelectAdapter = ({ meta, input, labelName, options, ...rest }) => {
    return (
      <div className="mb-3">
        <label className={`form-label required`}>{labelName}</label>
        {meta.error && meta.touched && <span>{meta.error}</span>}
        <Select options={options} {...input} {...rest} />
      </div>
    );
  };

  const required = (value) => (value ? undefined : "Required");
  return (
    <React.Fragment>
      <h3 className="h3 text-center mb-5">Add New Property</h3>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="col-md-9 row justify-content-between">
          <div className="col-md-5">
            <Field name="PropertyName" validate={required}>
              {({ input, meta }) => (
                <Input
                  type="text"
                  required="required"
                  input={input}
                  meta={meta}
                  labelName="Property Name"
                  value=""
                />
              )}
            </Field>

            <Field name="description" validate={required}>
              {({ input, meta }) => (
                <TextArea
                  required="required"
                  input={input}
                  meta={meta}
                  labelName="Description"
                  value=""
                  row="5"
                />
              )}
            </Field>
            <Field name="price" validate={required}>
              {({ input, meta }) => (
                <Input
                  type="number"
                  required="required"
                  input={input}
                  meta={meta}
                  labelName="Product price"
                  value=""
                />
              )}
            </Field>

            <Field name="address" validate={required}>
              {({ input, meta }) => {
                return (
                  <Input
                    type="text"
                    required="required"
                    input={input}
                    meta={meta}
                    labelName="address"
                    value=""
                  />
                );
              }}
            </Field>

            <Field name="locality" validate={required}>
              {({ input, meta }) => (
                <SelectAdapter
                  required="required"
                  input={input}
                  meta={meta}
                  labelName="locality"
                  options={localityOptions}
                />
              )}
            </Field>

            <Field name="bedroom" validate={required}>
              {({ input, meta }) => (
                <SelectAdapter
                  required="required"
                  input={input}
                  meta={meta}
                  labelName="Bedroom"
                  options={selectOptions}
                />
              )}
            </Field>
            <Field name="CarpetArea" validate={required}>
              {({ input, meta }) => (
                <SelectAdapter
                  required="required"
                  input={input}
                  meta={meta}
                  labelName="Carpet Area"
                  options={carpetArea}
                />
              )}
            </Field>
          </div>

          <div className="col-md-5">
            <p>Recommended size is 460x460 or 800x600</p>
            <Field name="image1">
              {({ input, meta }) => (
                <div>
                  <Dropzone
                    input={input}
                    meta={meta}
                    labelName="Product Image 1"
                    required="required"
                    // initialFiles={[imageToEdit("image1")]}
                  />
                </div>
              )}
            </Field>
          </div>
        </div>
        <div
          className="buttons d-flex justify-content-end"
          style={{ marginTop: "5rem" }}
        >
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            Add
          </button>
        </div>

        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </div>
    </React.Fragment>
  );
}

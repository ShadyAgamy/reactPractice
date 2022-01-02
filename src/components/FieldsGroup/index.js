import React, { useState, useEffect } from "react";
import { Field } from "react-final-form";
import "./styles.scss";
import deleteIcon from "./delete.png";

export default function FieldsGroup({
  fields,
  labelName,
  required,
  placeHolder,
  type
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) {
      fields.map( index => {
        return fields.remove(index)
      })
    }
  }, [ show]);

  return (
    <div className="inputLabel_container mb-3">
      <label className={`form-label ${required}`}>{labelName}</label>
      <div className="buttons InlineBtns ">
        <button
          type="button"
          className="btn btn-dark"
          disabled={show ? "disabled": ""}
          onClick={() => setShow(true)}
        >
          Yes
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-gray"
          disabled={!show ? "disabled": ""}
          onClick={() => setShow(false)}
        >
          No
        </button>
      </div>
      {show ? (
        <div>
          <div>
            {fields.map((name, index) => {
              return (
                <div key={name} className="input-group mb-3 align-items-center">
                  <Field
                    name={`${name}`}
                    component="input"
                    placeholder={placeHolder}
                    type={type}
                    className="form-control"
                  />
                  <span
                    className="removeIcon"
                    onClick={() => fields.remove(index)}
                  >
                    <img src={deleteIcon} alt="remove" />
                  </span>
                </div>
              );
            })}
          </div>
          <div className="buttons">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block plusButton"
              onClick={() => fields.push("")}
            >
              +
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

import React from "react";

export default function Input({ type, meta, input, labelName, required }) {
  return (
    <div className="inputLabel_container">
      <label className={`form-label ${required}`}>{labelName}</label>
      {meta.error && meta.touched && <span>{meta.error}</span>}
      <div className="input-group mb-3">
        <input
          autoComplete="off"
          className="form-control"
          {...input}
          type={type}
        />
      </div>
    </div>
  );
}


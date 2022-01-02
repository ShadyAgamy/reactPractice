import React from 'react'



const TextArea = ({ meta, input, labelName, row }) => {
    return (
      <div className="mb-3">
        <label htmlFor={labelName} className={`form-label required`}>
          {labelName}
        </label>
        {meta.error && meta.touched && <span>{meta.error}</span>}
        <textarea
          {...input}
          id={labelName}
          className="form-control"
          cols="3"
          rows={row}
        ></textarea>
      </div>
    );
  };


export default TextArea;
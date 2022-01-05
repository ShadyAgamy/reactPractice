import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./styles.scss";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginLeft: "auto",
};

const thumb = {
  display: "inline-flex",
  width: 100,
  height: 100,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const upload = {
  fontSize: "10px",
  borderRadius: "4px",
  border: "1px solid #00000033",
  color: "black",
  opacity: ".8",
  padding: ".3rem .6rem",
  cursor: "pointer",
};

const DropzoneUploader = React.memo(({ input, meta, labelName, required, initialFiles }) => {

  const [files, setFiles] = useState([]);
 
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    noDrag: true,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles)
      const files = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      
      setFiles(files);
      console.log(files)
      if (input.onChange) {
        input.onChange(files);
      }
    },
  });



  const thumbs = files.map((file) => {
    return (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
    </div>
  )
  });

  
  useEffect(
    () => () => {
     
      setFiles(initialFiles);
      // Make sure to revoke the data uris to avoid memory leaks
      // files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [initialFiles]
  );

  return (
    <div className="d-flex mt-4 w-100 align-items-center">
      <div {...getRootProps({ className: "btn-dropzone" })}>
        <label
          style={{ marginRight: "2rem" }}
          className={`form-label ${required}`}
        >
          {labelName}
        </label>
        <input {...getInputProps()} />
        <span style={upload}>Upload</span>
      </div>
      {meta.error && meta.touched && (
        <span className="required" style={{ marginLeft: "auto" }}>
          {meta.error}
        </span>
      )}
      <aside
        style={thumbsContainer}
        className={thumbs.length !== 0 ? "" : "d-none"}
      >
        {thumbs}
      </aside>
    </div>
  );
})

export default DropzoneUploader;




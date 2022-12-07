import React from "react";

function ImageInput(props) {
  return (
    <input
      alt="user uploaded ingredient image"
      className="image-input"
      onChange={props.handleImage}
      type="file"
    />
  );
}

export default ImageInput;

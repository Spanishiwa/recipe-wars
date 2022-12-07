import React from "react";

function ImageInput(props) {
  return (
    <React.Fragment>
      <label htmlFor="image-input">Upload an image</label>
      <input
        className="image-input"
        id="image-input"
        name="image-input"
        onChange={props.handleImage}
        type="file"
      />
    </React.Fragment>
  );
}

export default ImageInput;

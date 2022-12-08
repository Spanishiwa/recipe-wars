import { InputLabel, Input, Box } from "@mui/material";
import React from "react";

const ImageInput = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
      {/* <InputLabel htmlFor="image-input" variant="outlined">
        Upload an image
      </InputLabel> */}
      <input
        accept="image/*"
        className="image-input"
        id="image-input"
        name="image-input"
        onChange={props.handleImage}
        title="Upload a recipe image here"
        type="file"
      />
    </Box>
  );
};

export default ImageInput;

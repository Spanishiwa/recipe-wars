import { AddTask, DownloadDone, PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  TextField,
  Typography
} from "@mui/material";
import React, { useRef } from "react";

const ImageInput = (props) => {
  const { imgName, handleImage } = props;
  const imgIcon = imgName ? <DownloadDone /> : <PhotoCamera />;
  const inputRef = useRef(null);
  const handleKeyEnter = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      inputRef.current.click();
    }
  };

  return (
    <Box>
      <Button
        aria-label="upload picture"
        component="label"
        color="primary"
        onKeyDown={handleKeyEnter}
        startIcon={imgIcon}
        sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
        title="Upload a recipe image here"
        variant="outlined"
      >
        Choose file
        <input
          accept="image/*"
          onChange={handleImage}
          hidden
          id="image-input"
          name="image-input"
          ref={inputRef}
          type="file"
        />
      </Button>
      <Typography
        component="span"
        sx={{ verticalAlign: "middle" }}
        title={`Successfully uploaded image name`}
        variant="subtitle1"
      >
        {imgName}
      </Typography>
    </Box>
  );
};

export default ImageInput;

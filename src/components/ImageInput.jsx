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
  const { imgName } = props;
  const imgIcon = imgName ? <DownloadDone /> : <PhotoCamera />;
  return (
    <Box>
      <Button
        aria-label="upload picture"
        component="label"
        color="primary"
        startIcon={imgIcon}
        sx={{ mr: 2, mb: { xs: 1, sm: 0 } }}
        title="Upload a recipe image here"
        variant="outlined"
      >
        Choose file
        <input
          accept="image/*"
          onChange={props.handleImage}
          hidden
          id="image-input"
          name="image-input"
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

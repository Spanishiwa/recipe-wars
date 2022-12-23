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
import { RecipeSelect } from "./RecipeSelect";

const ImageInput = (props) => {
  const { imgName, handleImage, handleSelect, text } = props;
  const imgIcon = imgName ? <DownloadDone /> : <PhotoCamera />;
  const inputRef = useRef(null);
  const handleKeyEnter = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      inputRef.current.click();
    }
  };

  return (
    <Box sx={{ flex: "1 1 auto" }}>
      <Typography component="p" variant="b1" sx={{ mb: 2 }}>
        Upload an image or choose a default
      </Typography>
      <Box sx={{ display: "flex", mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            gap: 2,
            justifyContent: "space-between"
          }}
        >
          <Button
            aria-label="upload picture"
            component="label"
            color="primary"
            onKeyDown={handleKeyEnter}
            startIcon={imgIcon}
            sx={{ maxHeight: "57px", padding: "15px" }}
            title="Upload a recipe image here"
            variant="outlined"
          >
            UPLOAD
            <Typography
              component="span"
              sx={{ display: { xs: "none", sm: "inline" }, ml: "4px" }}
              variant="b2"
            >
              IMAGE
            </Typography>
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
          <RecipeSelect handleSelect={handleSelect} text={text} />
        </Box>
      </Box>
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

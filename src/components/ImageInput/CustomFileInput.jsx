import React, { useRef } from 'react';
import { Button, Typography } from '@mui/material';
import { DownloadDone, PhotoCamera } from '@mui/icons-material';
import PropTypes from 'prop-types';

export const CustomFileInput = (props) => {
  const { handleImage, imgName } = props;

  const imgIcon = imgName ? <DownloadDone /> : <PhotoCamera />;

  const inputRef = useRef(null);
  const handleKeyEnter = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      inputRef.current.click();
    }
  };

  return (
    <Button
      aria-label="upload picture"
      component="label"
      color="primary"
      onKeyDown={handleKeyEnter}
      startIcon={imgIcon}
      sx={{ maxHeight: '57px', padding: '15px' }}
      title="Upload a recipe image here"
      variant="outlined"
    >
      UPLOAD
      <Typography
        component="span"
        sx={{ display: { xs: 'none', sm: 'inline' }, ml: '4px' }}
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
  );
};

CustomFileInput.propTypes = {
  imgName: PropTypes.string,
  handleImage: PropTypes.func.isRequired,
};

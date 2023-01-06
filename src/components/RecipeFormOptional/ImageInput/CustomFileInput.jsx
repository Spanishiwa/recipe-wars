import React, { useContext, useRef } from 'react';
import { Button, Typography } from '@mui/material';
import { DownloadDone, PhotoCamera } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { RecipesContext } from '../../Contexts/RecipesContext';
import { updateImage } from '../../../reducers/actions';

export const CustomFileInput = (props) => {
  const { state, dispatch } = useContext(RecipesContext);

  const { imgName } = props;

  const btnTextSx = { display: { xs: 'none', sm: 'inline' }, ml: '4px' };
  const imgIcon = imgName ? <DownloadDone /> : <PhotoCamera />;

  const handleImage = (e) => {
    const imgFile = e.target.files[0];
    if (!imgFile) return;
    // clean up previous Blob
    const imgInput = state.filter((input) => input.id === 'image-input')[0];

    if (imgInput?.imgSrc) URL.revokeObjectURL(imgInput.imgSrc);

    dispatch(updateImage(e));
  };

  const inputRef = useRef(null);
  const handleKeyEnter = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) inputRef.current.click();
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
      <Typography component="span" sx={btnTextSx} variant="b2">
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

CustomFileInput.propTypes = { imgName: PropTypes.string };

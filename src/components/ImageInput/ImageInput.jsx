import { Box, Typography } from '@mui/material';
import React from 'react';
import { RecipeSelect } from '../RecipeSelect/RecipeSelect';
import PropTypes from 'prop-types';
import { CustomFileInput } from './CustomFileInput';

const ImageInput = (props) => {
  const { imgName, handleImage, handleSelect, text } = props;

  return (
    <Box sx={{ flex: '1 1 auto' }}>
      <Typography component="p" variant="b1" sx={{ mb: 2 }}>
        Upload an image or choose a default
      </Typography>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            gap: 2,
            justifyContent: 'space-between',
          }}
        >
          <CustomFileInput handleImage={handleImage} imgName={imgName} />
          <RecipeSelect handleSelect={handleSelect} text={text} />
        </Box>
      </Box>
      <Typography
        component="span"
        sx={{ verticalAlign: 'middle' }}
        title={`Successfully uploaded image name`}
        variant="subtitle1"
      >
        {imgName}
      </Typography>
    </Box>
  );
};

export default ImageInput;

ImageInput.propTypes = {
  imgName: PropTypes.string,
  handleImage: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  text: PropTypes.string,
};

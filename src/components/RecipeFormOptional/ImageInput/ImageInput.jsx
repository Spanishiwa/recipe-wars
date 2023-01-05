import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { RecipeSelect } from '../../RecipeSelect/RecipeSelect';
import { CustomFileInput } from './CustomFileInput';
import { RecipesContext } from '../../Contexts/RecipesContext';
import { getInput } from '../../../Util';
import { imageInputsContainerSx } from '../FormOptionalStyles';

const ImageInput = () => {
  const { state } = useContext(RecipesContext);

  const imgName = getInput(state, 'image-input').imgName;

  return (
    <Box sx={{ flex: '1 1 auto' }}>
      <Typography component="p" variant="b1" sx={{ mb: 2 }}>
        Upload an image or choose a default
      </Typography>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Box sx={imageInputsContainerSx}>
          <CustomFileInput imgName={imgName} />
          <RecipeSelect />
        </Box>
      </Box>
      <Typography
        component="span"
        sx={{ verticalAlign: 'middle' }}
        title="Successfully uploaded image name"
        variant="subtitle1"
      >
        {imgName}
      </Typography>
    </Box>
  );
};

export default ImageInput;

import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { RecipeSelect } from '../RecipeSelect/RecipeSelect';
import { CustomFileInput } from './CustomFileInput';
import { RecipesContext } from '../../Contexts/RecipesContext';
import { getInput } from '../../../Util';
import {
  imageInputDeleteButtonSx,
  imageInputDeleteIconSx,
  imageInputsContainerSx,
  imageInputsFigtextSx,
  noImageUploadedIconSx,
  noImageUploadedSx,
} from '../FormOptionalStyles';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteImage } from '../../../reducers/actions';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';

const ImageInput = (props) => {
  const { recipeName } = props;
  const { state, dispatch } = useContext(RecipesContext);

  const imgName = getInput(state, `${recipeName}image-input`).imgName;

  const handleDeleteImage = () => {
    dispatch(deleteImage(recipeName));
  };

  return (
    <Box sx={{ flex: '1 1 auto' }}>
      <Typography component="p" variant="b1" sx={imageInputsFigtextSx}>
        Upload an image or choose a default
      </Typography>
      <Box sx={{ display: 'flex', mb: 1 }}>
        <Box sx={imageInputsContainerSx}>
          <CustomFileInput imgName={imgName} recipeName={recipeName} />
          <RecipeSelect recipeName={recipeName} />
        </Box>
      </Box>
      {imgName ? (
        <Button
          onClick={handleDeleteImage}
          startIcon={<DeleteIcon sx={imageInputDeleteIconSx} />}
          sx={imageInputDeleteButtonSx}
          title="Remove uploaded image file"
          type="button"
          variant="subtitle1"
        >
          {imgName}
        </Button>
      ) : (
        <Box sx={noImageUploadedSx}>
          <NoPhotographyIcon fontSize="small" sx={noImageUploadedIconSx} />
          No image uploaded
        </Box>
      )}
    </Box>
  );
};

export default ImageInput;

ImageInput.propTypes = { recipeName: PropTypes.string };

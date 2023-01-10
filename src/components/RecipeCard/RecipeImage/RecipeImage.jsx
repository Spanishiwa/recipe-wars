import { Box, CardMedia, useTheme } from '@mui/material';
import React, { useContext, useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import { ServingsSwitch } from '../ServingsSwitch/ServingsSwitch';
import PropTypes from 'prop-types';
import { getSelectedImage } from './RecipeImageUtil';
import { RecipeImageFigcaption } from './RecipeImageFigcaption';
import { RecipesContext } from '../../Contexts/RecipesContext';
import { getRecipeInputValues } from '../../../Util';
import ImageInput from '../../RecipeFormOptional/ImageInput/ImageInput';
import { getEditableInputsContainerSx } from './RecipeImageStyles';

export const RecipeImage = (props) => {
  const { state } = useContext(RecipesContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { isEditable, recipeName } = props;

  const { imgSrc, title, description, servings, isPerServing, selectText } =
    getRecipeInputValues(state, recipeName);

  const mode = useTheme().palette.mode;
  const image = imgSrc || getSelectedImage(selectText);
  const editableInputsContainerSx = getEditableInputsContainerSx(image, mode);

  return (
    <Box component="figure" m={0}>
      {isEditable ? (
        <Box sx={editableInputsContainerSx}>
          <ImageInput recipeName={recipeName} />
        </Box>
      ) : (
        <CardMedia
          alt={title}
          component="img"
          height="240"
          image={image}
          onClick={handleClickOpen}
          sx={{ cursor: 'pointer' }}
          title={title}
        />
      )}
      <RecipeImageFigcaption
        description={description}
        recipeName={recipeName}
        isEditable={isEditable}
        isPerServing={isPerServing}
        servings={servings}
      >
        <ServingsSwitch isPerServing={isPerServing} recipeName={recipeName} />
      </RecipeImageFigcaption>
      <ImageModal
        handleClose={handleClose}
        imgSrc={image}
        open={isOpen}
        title={title}
      />
    </Box>
  );
};

RecipeImage.propTypes = {
  isEditable: PropTypes.bool,
  recipeName: PropTypes.string,
};

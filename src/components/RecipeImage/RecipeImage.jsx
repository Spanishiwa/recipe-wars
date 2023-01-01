import { Box, CardMedia } from '@mui/material';
import React, { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import { ServingsSwitch } from '../ServingsSwitch/ServingsSwitch';
import PropTypes from 'prop-types';
import { getSelectedImage } from './RecipeImageUtil';
import { RecipeImageFigcaption } from './RecipeImageFigcaption';

export const RecipeImage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const {
    description,
    handleServingsToggle,
    imgSrc,
    ingredients,
    recipeName,
    selectText,
    servings,
    isPerServing,
    title,
  } = props;

  const recipe = recipeName || 'Untitled';

  const selectedImage = getSelectedImage(selectText);

  return (
    <Box component="figure" m={0}>
      <CardMedia
        alt={title}
        component="img"
        height="194"
        image={imgSrc || selectedImage}
        onClick={handleClickOpen}
        sx={{ cursor: 'pointer' }}
        title={title}
      />
      <RecipeImageFigcaption
        description={description}
        ingredients={ingredients}
        isPerServing={isPerServing}
        servings={servings}
      >
        <ServingsSwitch
          handleServingsToggle={handleServingsToggle}
          isPerServing={isPerServing}
          recipeName={recipe}
        />
      </RecipeImageFigcaption>
      <ImageModal
        handleClose={handleClose}
        imgSrc={imgSrc || selectedImage}
        open={isOpen}
        title={title}
      />
    </Box>
  );
};

RecipeImage.propTypes = {
  description: PropTypes.string,
  handleServingsToggle: PropTypes.func.isRequired,
  imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      parsed: PropTypes.string.isRequired,
      calories: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      carbohydrate: PropTypes.string.isRequired,
      protein: PropTypes.string.isRequired,
      fat: PropTypes.string.isRequired,
      status: PropTypes.string,
      isDisabled: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
      recipeName: PropTypes.string.isRequired,
    })
  ),
  recipeName: PropTypes.string,
  selectText: PropTypes.string,
  servings: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  isPerServing: PropTypes.bool,
  title: PropTypes.string,
};

import { Box, CardMedia } from '@mui/material';
import React, { useContext, useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import { ServingsSwitch } from '../ServingsSwitch/ServingsSwitch';
import PropTypes from 'prop-types';
import { getSelectedImage } from './RecipeImageUtil';
import { RecipeImageFigcaption } from './RecipeImageFigcaption';
import { RecipesContext } from '../App/RecipesContext';

export const RecipeImage = (props) => {
  const { state } = useContext(RecipesContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { recipeName, recipeState } = props;

  const { title, description, imgSrc, selectText, servings } = recipeState;

  const inputs = state.filter((input) => input.isInput);
  const isPerServing = inputs.filter(
    (input) => input.id === 'servings-toggle'
  )[0][`is${recipeName}PerServing`];

  const image = imgSrc || getSelectedImage(selectText);

  return (
    <Box component="figure" m={0}>
      <CardMedia
        alt={title}
        component="img"
        height="194"
        image={image}
        onClick={handleClickOpen}
        sx={{ cursor: 'pointer' }}
        title={title}
      />
      <RecipeImageFigcaption
        description={description}
        recipeName={recipeName}
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
  recipeName: PropTypes.string,
  recipeState: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    instructions: PropTypes.string,
    selectText: PropTypes.string,
    servings: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
  }),
};

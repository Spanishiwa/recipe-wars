import { Box, CardMedia } from '@mui/material';
import React, { useContext, useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import { ServingsSwitch } from '../ServingsSwitch/ServingsSwitch';
import PropTypes from 'prop-types';
import { getSelectedImage } from './RecipeImageUtil';
import { RecipeImageFigcaption } from './RecipeImageFigcaption';
import { RecipesContext } from '../../Contexts/RecipesContext';
import { getInput } from '../../../Util';

export const RecipeImage = (props) => {
  const { state } = useContext(RecipesContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { recipeName, recipeState } = props;

  const { title, description, imgSrc, selectText, servings } = recipeState;

  const servingsToggle = getInput(state, 'servings-toggle');
  const isPerServing = servingsToggle[`is${recipeName}PerServing`];

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

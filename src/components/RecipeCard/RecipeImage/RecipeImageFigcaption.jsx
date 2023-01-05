import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { CalorieSvg } from '../../CalorieSvg/CalorieSvg';
import { CarbohydrateSvg } from '../../CarbohydrateSvg/CarbohydrateSvg';
import { ProteinSvg } from '../../ProteinSvg/ProteinSvg';
import { FatSvg } from '../../FatSvg/FatSvg';
import { getNutrients } from './RecipeImageUtil';
import PropTypes from 'prop-types';
import {
  figcaptionSx,
  servingsSwitchContainerSx,
  servingsTextSx,
  svgContainerSx,
} from './RecipeImageStyles';
import { RecipesContext } from '../../Contexts/RecipesContext';
import { formatNutrients } from '../../../Util';

export const RecipeImageFigcaption = (props) => {
  const { state } = useContext(RecipesContext);
  const { children, description, isPerServing, recipeName, servings } = props;

  const recipeIngredients = state.filter(
    (ingredient) => ingredient.recipeName === recipeName && ingredient.parsed
  );

  const nutrients = getNutrients(recipeIngredients);
  const formattedNutrients = formatNutrients(nutrients, isPerServing, servings);

  const { calories, carbohydrate, protein, fat } = formattedNutrients;

  return (
    <Typography component="figcaption" sx={figcaptionSx} variant="b2">
      <Box sx={svgContainerSx}>
        <CalorieSvg calories={calories} />
        <CarbohydrateSvg carbohydrate={carbohydrate} />
        <ProteinSvg protein={protein} />
        <FatSvg fat={fat} />
      </Box>
      <Box sx={servingsSwitchContainerSx}>
        {children}
        <Typography component="span" sx={servingsTextSx} variant="b2">
          Serves {servings}
        </Typography>
      </Box>
      {description}
    </Typography>
  );
};

RecipeImageFigcaption.propTypes = {
  children: PropTypes.element,
  description: PropTypes.string,
  isPerServing: PropTypes.bool,
  recipeName: PropTypes.string,
  servings: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

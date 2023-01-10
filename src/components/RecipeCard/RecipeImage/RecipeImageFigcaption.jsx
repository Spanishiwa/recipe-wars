import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { CalorieSvg } from './../CalorieSvg/CalorieSvg';
import { CarbohydrateSvg } from './../CarbohydrateSvg/CarbohydrateSvg';
import { ProteinSvg } from './../ProteinSvg/ProteinSvg';
import { FatSvg } from './../FatSvg/FatSvg';
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
import { RecipeNumberfield } from '../../RecipeFormOptional/RecipeNumberfield/RecipeNumberfield';
import { RecipeTextarea } from '../../RecipeTextarea/RecipeTextarea';
import { descriptionPlaceholder } from '../../RecipeFormOptional/FormOptionalUtil';

export const RecipeImageFigcaption = (props) => {
  const { state } = useContext(RecipesContext);
  const {
    children,
    description,
    isEditable,
    isPerServing,
    recipeName,
    servings,
  } = props;

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
        {isEditable ? (
          <RecipeNumberfield
            label="Servings"
            name={`${recipeName}servings-input`}
            sx={{ maxWidth: { xs: '80px', sm: '100px' }, mt: 1 }}
            title="How many portion sizes the recipe serves"
          />
        ) : (
          <Typography component="span" sx={servingsTextSx} variant="b2">
            Serves {servings}
          </Typography>
        )}
      </Box>
      {isEditable ? (
        <RecipeTextarea
          label="Recipe description"
          name={`${recipeName}description-textarea`}
          placeholder={descriptionPlaceholder}
          rows={5}
          sx={{ mt: 5 }}
          title="Highlight interesting things about the recipe or elaborate on the recipe title"
        />
      ) : description ? (
        <Typography sx={{ mb: '-8px', pt: 3 }}>{description}</Typography>
      ) : (
        <></>
      )}
    </Typography>
  );
};

RecipeImageFigcaption.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  description: PropTypes.string,
  isEditable: PropTypes.bool,
  isPerServing: PropTypes.bool,
  recipeName: PropTypes.string,
  servings: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

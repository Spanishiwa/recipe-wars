import React, { useContext, useState } from 'react';
import { Box, CardContent, useTheme } from '@mui/material';
import { RecipeImage } from './RecipeImage/RecipeImage';
import { IngredientsList } from '../IngredientsList/IngredientsList';
import { RecipeMenu } from '../RecipeMenu/RecipeMenu';
import { cardContentSx, getIngredientsSx } from './RecipeCardStyles';
import PropTypes from 'prop-types';
import { CardCollapse } from './CardCollapse';
import { getRecipeInputValues } from '../../Util';
import { RecipesContext } from '../Contexts/RecipesContext';

export const RecipeCard = (props) => {
  const { state } = useContext(RecipesContext);

  const { recipeName } = props;

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  const mode = useTheme().palette.mode;
  const ingredientsSx = getIngredientsSx(expanded, mode);

  const recipeSubmitted = state.filter((recipe) => recipe.id === recipeName)[0];

  const inputs = state.filter((input) => input.isInput);
  const recipeFromInputs = getRecipeInputValues(inputs);

  const recipeState = recipeSubmitted ? recipeSubmitted : recipeFromInputs;

  const { instructions, title } = recipeState;

  return (
    <Box component="section" sx={{ borderRadius: { xs: 0, sm: 0, md: '4px' } }}>
      <CardContent sx={cardContentSx}>
        <Box sx={ingredientsSx}>
          <IngredientsList recipeName={recipeName} />
        </Box>
        <Box sx={{ flex: '65%' }}>
          <RecipeMenu recipeName={recipeName} title={title} />
          <RecipeImage recipeName={recipeName} recipeState={recipeState} />
          <CardCollapse
            expanded={expanded}
            handleExpandClick={handleExpandClick}
            instructions={instructions}
          />
        </Box>
      </CardContent>
    </Box>
  );
};

export default RecipeCard;

RecipeCard.propTypes = { recipeName: PropTypes.string };

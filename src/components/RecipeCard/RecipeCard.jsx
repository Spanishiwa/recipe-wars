import React, { useState } from 'react';
import { Box, CardContent, useTheme } from '@mui/material';
import { RecipeImage } from '../RecipeImage/RecipeImage';
import { IngredientsList } from '../IngredientsList/IngredientsList';
import { RecipeMenu } from '../RecipeMenu/RecipeMenu';
import { cardContentSx, getIngredientsSx } from './RecipeCardStyles';
import PropTypes from 'prop-types';
import { CardCollapse } from './CardCollapse';

export const RecipeCard = (props) => {
  const {
    handlers,
    ingredients,
    recipeState,
    isPerServing,
    selectText,
    showAlert,
  } = props;

  const { handleDeleteRecipe, handleServingsToggle } = handlers;

  const { title, description, imgSrc, recipeName, instructions, servings } =
    recipeState;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mode = useTheme().palette.mode;
  const ingredientsSx = getIngredientsSx(expanded, mode);

  return (
    <Box component="section" sx={{ borderRadius: { xs: 0, sm: 0, md: '4px' } }}>
      <CardContent sx={cardContentSx}>
        <Box sx={ingredientsSx}>
          <IngredientsList
            handlers={handlers}
            ingredients={ingredients}
            recipeName={recipeName}
          />
        </Box>
        <Box sx={{ flex: '65%' }}>
          <RecipeMenu
            handleDeleteRecipe={handleDeleteRecipe}
            recipeName={recipeName}
            showAlert={showAlert}
            title={title}
          />
          <RecipeImage
            description={description}
            handleServingsToggle={handleServingsToggle}
            imgSrc={imgSrc}
            ingredients={ingredients}
            isPerServing={isPerServing}
            recipeName={recipeName}
            servings={servings}
            selectText={selectText}
            title={title}
          />
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

RecipeCard.propTypes = {
  handlers: PropTypes.shape({
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleDeleteRecipe: PropTypes.func,
    handleEdit: PropTypes.func.isRequired,
    handleKeyDelete: PropTypes.func.isRequired,
    handleKeySubmit: PropTypes.func.isRequired,
    handleToggleDisable: PropTypes.func.isRequired,
    handleServingsToggle: PropTypes.func.isRequired,
  }).isRequired,
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
  recipeState: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    recipeName: PropTypes.string,
    instructions: PropTypes.string,
    servings: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
  }),
  isPerServing: PropTypes.bool,
  selectText: PropTypes.string,
  showAlert: PropTypes.func,
};

import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import RecipeForm from '../RecipeForm/RecipeForm';
import { RecipeFormOptional } from '../RecipeFormOptional/RecipeFormOptional';
import {
  getHandlersRecipeForm,
  getHandlersRecipeCard,
  getHandlersRecipeFormOptional,
  getRecipeInputValues,
} from './StepperUtil';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export const StepView = (props) => {
  const { activeStep, handlers, inputs, recipeStates, showAlert, titleRef } =
    props;
  const handlersRecipeCard = getHandlersRecipeCard(handlers);
  const handlersRecipeForm = getHandlersRecipeForm(handlers);
  const handlersRecipeFormOptional = getHandlersRecipeFormOptional(handlers);

  const recipeState = getRecipeInputValues(inputs);
  const noRecipeNameIngredients = recipeStates.filter(
    (recipe) => recipe.recipeName === 'Untitled'
  );

  const stepView = (step) => {
    switch (step) {
      case 0:
        return (
          <RecipeForm
            handlers={handlersRecipeForm}
            ingredients={noRecipeNameIngredients}
            inputs={inputs}
            showAlert={showAlert}
            titleRef={titleRef}
          />
        );
      case 1:
        return (
          <RecipeFormOptional
            handlers={handlersRecipeFormOptional}
            ingredients={noRecipeNameIngredients}
            inputs={inputs}
          />
        );
      case 2:
        return (
          <RecipeCard
            handlers={handlersRecipeCard}
            ingredients={noRecipeNameIngredients}
            isPerServing={recipeState.isPerServing}
            recipeState={recipeState}
            selectText={recipeState.selectText}
          />
        );
      default:
        return (
          <RecipeForm
            handlers={handlersRecipeForm}
            ingredients={noRecipeNameIngredients}
            inputs={inputs}
            titleRef={titleRef}
          />
        );
    }
  };
  return (
    <Box sx={{ maxWidth: { xs: 1200 }, width: '100%' }}>
      {stepView(activeStep)}
    </Box>
  );
};

StepView.propTypes = {
  activeStep: PropTypes.number,
  handlers: PropTypes.shape({
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
    handleImage: PropTypes.func,
    handleKeyDelete: PropTypes.func,
    handleKeySubmit: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleToggleDisable: PropTypes.func,
    handleSelect: PropTypes.func,
    handleServingsToggle: PropTypes.func,
  }).isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeStates: PropTypes.arrayOf(PropTypes.object).isRequired,
  showAlert: PropTypes.func,
  titleRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

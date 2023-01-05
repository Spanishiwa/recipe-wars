import React, { useContext, useRef, useState } from 'react';
import { Box, Card } from '@mui/material';
import RecipeCard from '../../../components/RecipeCard/RecipeCard';
import RecipeForm from '../../../components/RecipeForm/RecipeForm';
import { RecipeFormOptional } from '../../../components/RecipeFormOptional/RecipeFormOptional';
import { StepperButtons } from './StepperButtons';
import { SnackbarContext } from '../../../components/Contexts/SnackbarContext';
import { RecipesContext } from '../../../components/Contexts/RecipesContext';
import { updateInputError } from '../../../reducers/actions';
import { getInput } from '../../../Util';
import PropTypes from 'prop-types';

export default function MuiStepper(props) {
  const { dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);

  const { recipeStates } = props;

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  const noRecipeNameIngredients = recipeStates.filter(
    (recipe) => recipe.recipeName === 'Untitled'
  );
  const isValidIngredientsList = noRecipeNameIngredients.length > 0;

  const title = getInput(recipeStates, 'title-input');
  const isValidTitle = title !== '' && title !== 'Untitled';
  const titleRef = useRef(null);

  const handleNext = () => {
    if (isValidIngredientsList && isValidTitle) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      return;
    }

    const errMsg = getValidationErr();

    if (!isValidTitle) {
      dispatch(updateInputError(('title-input', errMsg)));
      titleRef.current.focus();
    }

    showAlert(errMsg, 'error');
  };

  const getValidationErr = () => {
    if (!isValidTitle) return `Title can't be "Untitled" or empty`;

    return `Ingredients list is empty`;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const stepView = (step) => {
    switch (step) {
      case 0:
        return <RecipeForm titleRef={titleRef} />;
      case 1:
        return <RecipeFormOptional />;
      case 2:
        return <RecipeCard />;
      default:
        return <RecipeForm titleRef={titleRef} />;
    }
  };

  return (
    <Card sx={{ flexGrow: 1, height: '100%', maxWidth: { xs: 1200 } }}>
      <Box sx={{ maxWidth: { xs: 1200 }, width: '100%' }}>
        {stepView(activeStep)}
      </Box>
      <StepperButtons
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        maxSteps={maxSteps}
      />
    </Card>
  );
}

MuiStepper.propTypes = { recipeStates: PropTypes.arrayOf(PropTypes.object) };

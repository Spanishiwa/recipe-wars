import React, { useRef, useState } from 'react';
import { Card } from '@mui/material';
import { MuiSnackbar } from '../MuiSnackbar/MuiSnackbar';
import PropTypes from 'prop-types';
import { getRecipeInputValues } from './StepperUtil';
import { StepperButtons } from './StepperButtons';
import { StepView } from './StepView';

export default function MuiStepper(props) {
  const { handlers, inputs, recipeStates, setInputError } = props;

  const { handleSubmitRecipe, handleReset } = handlers;

  const recipeState = getRecipeInputValues(inputs);
  const noRecipeNameIngredients = recipeStates.filter(
    (recipe) => recipe.recipeName === 'Untitled'
  );

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;

  const [snackbarState, setSnackbarState] = useState({
    message: `Title is "Untitled" or empty`,
    open: false,
    severity: 'error',
  });

  const showAlert = (message, severity) => {
    setSnackbarState((prevState) => ({
      ...prevState,
      message: message,
      open: true,
      severity: severity,
    }));
  };

  const isValidIngredientsList = noRecipeNameIngredients.length > 0;
  const isValidTitle =
    recipeState.title !== '' && recipeState.title !== 'Untitled';

  const handleResetClick = () => {
    showAlert('Resetting recipe', 'success');

    handleReset();
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;

    setSnackbarState((prevState) => ({ ...prevState, open: false }));
  };

  const titleRef = useRef(null);

  const handleNext = () => {
    if (isValidIngredientsList && isValidTitle) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      return;
    }

    let errMsg = '';

    if (!isValidIngredientsList) errMsg = `Ingredients list is empty`;

    if (!isValidTitle) {
      errMsg = `Title can't be "Untitled" or empty`;

      setInputError('title-input', errMsg);
      titleRef.current.focus();
    }

    showAlert(errMsg, 'error');
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Card sx={{ flexGrow: 1, height: '100%', maxWidth: { xs: 1200 } }}>
      <StepView
        activeStep={activeStep}
        handlers={handlers}
        inputs={inputs}
        recipeStates={recipeStates}
        showAlert={showAlert}
        titleRef={titleRef}
      />
      <StepperButtons
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        handleResetClick={handleResetClick}
        handleSubmitRecipe={handleSubmitRecipe}
        maxSteps={maxSteps}
      />
      <MuiSnackbar
        handleClose={handleSnackbarClose}
        message={snackbarState.message}
        open={snackbarState.open}
        severity={snackbarState.severity}
      />
    </Card>
  );
}

MuiStepper.propTypes = {
  handlers: PropTypes.shape({
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
    handleImage: PropTypes.func,
    handleKeyDelete: PropTypes.func,
    handleKeySubmit: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleSubmitRecipe: PropTypes.func,
    handleToggleDisable: PropTypes.func,
    handleReset: PropTypes.func,
    handleSelect: PropTypes.func,
    handleServingsToggle: PropTypes.func,
  }).isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeStates: PropTypes.arrayOf(PropTypes.object).isRequired,
  setInputError: PropTypes.func.isRequired,
};

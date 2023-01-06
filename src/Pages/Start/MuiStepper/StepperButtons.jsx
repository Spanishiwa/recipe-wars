import React, { useContext } from 'react';
import { Box, Button, MobileStepper, useTheme } from '@mui/material/';
import { AssignmentTurnedIn, Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { SUBMIT_RECIPE_SNACKBAR } from '../../../Util';
import { resetRecipe, submitRecipe } from '../../../reducers/actions';
import { RecipesContext } from '../../../components/Contexts/RecipesContext';
import { SnackbarContext } from '../../../components/Contexts/SnackbarContext';
import { getActionSx, getBackStartIcon, getNextEndIcon } from './StepperUtil';

export const StepperButtons = (props) => {
  const { dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);
  const navigate = useNavigate();

  const { activeStep, handleBack, handleNext, maxSteps } = props;

  const handleResetClick = () => {
    showAlert('Resetting recipe', 'success');

    dispatch(resetRecipe());
  };

  const handleSubmitRecipeRedirect = () => {
    dispatch(submitRecipe());

    navigate('/recipe-wars', { state: SUBMIT_RECIPE_SNACKBAR });
  };

  const theme = useTheme();
  const actionSx = getActionSx(theme.palette.mode);

  const nextEndIcon = getNextEndIcon(theme.direction);
  const backStartIcon = getBackStartIcon(theme.direction);

  return (
    <Box mt={2}>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        sx={actionSx}
        position="static"
        activeStep={activeStep}
        nextButton={
          activeStep === maxSteps - 1 ? (
            <Button
              disableElevation
              startIcon={<AssignmentTurnedIn />}
              size="large"
              onClick={handleSubmitRecipeRedirect}
              variant="contained"
            >
              SUBMIT
            </Button>
          ) : (
            <Button
              disableElevation
              disabled={activeStep === maxSteps - 1}
              onClick={handleNext}
              size="large"
              variant="contained"
            >
              Next
              {nextEndIcon}
            </Button>
          )
        }
        backButton={
          activeStep === 0 ? (
            <Button
              startIcon={<Delete />}
              name="reset-recipe"
              onClick={handleResetClick}
              size="large"
              type="button"
              variant="outlined"
            >
              RESET
            </Button>
          ) : (
            <Button
              size="large"
              onClick={handleBack}
              disabled={activeStep === 0}
              variant="outlined"
            >
              {backStartIcon}
              Back
            </Button>
          )
        }
      />
    </Box>
  );
};

StepperButtons.propTypes = {
  activeStep: PropTypes.number,
  handleBack: PropTypes.func,
  handleNext: PropTypes.func,
  maxSteps: PropTypes.number,
};

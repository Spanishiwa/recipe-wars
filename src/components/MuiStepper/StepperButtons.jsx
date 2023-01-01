import React from 'react';
import { Box, Button, MobileStepper, useTheme } from '@mui/material/';
import {
  AssignmentTurnedIn,
  Delete,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';
import Bg_Pattern_Light from '../../assets/Back_Pattern.png';
import Bg_Pattern_Dark from '../../assets/Debut_Dark.png';
import PropTypes from 'prop-types';

export const StepperButtons = (props) => {
  const {
    activeStep,
    handleBack,
    handleNext,
    handleResetClick,
    handleSubmitRecipe,
    maxSteps,
  } = props;

  const theme = useTheme();
  const actionSx =
    theme.palette.mode === 'light'
      ? {
          backgroundColor: 'primary.light',
          backgroundImage: `url(${Bg_Pattern_Light})`,
        }
      : {
          backgroundColor: 'background.default',
          backgroundImage: `url(${Bg_Pattern_Dark})`,
        };

  return (
    <Box mt={2}>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        sx={{ p: 2, ...actionSx }}
        position="static"
        activeStep={activeStep}
        nextButton={
          activeStep === maxSteps - 1 ? (
            <Button
              disableElevation
              startIcon={<AssignmentTurnedIn />}
              size="large"
              onClick={handleSubmitRecipe}
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
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          )
        }
        backButton={
          activeStep == 0 ? (
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
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
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
  handleResetClick: PropTypes.func,
  handleSubmitRecipe: PropTypes.func,
  maxSteps: PropTypes.number,
};

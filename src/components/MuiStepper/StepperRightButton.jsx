import React from 'react';
import Button from '@mui/material/Button';
import { AssignmentTurnedIn } from '@mui/icons-material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PropTypes from 'prop-types';

export const StepperRightButton = (props) => {
  const { lastStep, direction, handleNext, handleSubmitRecipe } = props;
  return lastStep ? (
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
      disabled={lastStep}
      onClick={handleNext}
      size="large"
      variant="contained"
    >
      Next
      {direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </Button>
  );
};

StepperRightButton.propTypes = {
  lastStep: PropTypes.bool,
  direction: PropTypes.string,
  handleNext: PropTypes.func,
  handleSubmitRecipe: PropTypes.func,
};

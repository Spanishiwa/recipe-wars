import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export const StepperLeftButton = (props) => {
  const { activeStep, handleBack, handleResetClick, direction } = props;

  return activeStep == 0 ? (
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
      {direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      Back
    </Button>
  );
};

StepperLeftButton.propTypes = {
  activeStep: PropTypes.number,
  handleBack: PropTypes.func,
  handleResetClick: PropTypes.func,
  direction: PropTypes.string,
};

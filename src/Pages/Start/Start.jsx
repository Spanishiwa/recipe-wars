import React, { Fragment } from 'react';
import MuiStepper from './MuiStepper/MuiStepper';
import PropTypes from 'prop-types';

export const Start = (props) => {
  const { children, recipeStates } = props;

  return (
    <Fragment>
      {children}
      <MuiStepper recipeStates={recipeStates}></MuiStepper>
    </Fragment>
  );
};

Start.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  recipeStates: PropTypes.arrayOf(PropTypes.object),
};

import React, { Fragment, useContext } from 'react';
import MuiStepper from './MuiStepper/MuiStepper';
import PropTypes from 'prop-types';
import { RecipesContext } from '../../components/Contexts/RecipesContext';

export const Start = (props) => {
  const { children } = props;
  const { state } = useContext(RecipesContext);

  return (
    <Fragment>
      {children}
      <MuiStepper recipeStates={state} />
    </Fragment>
  );
};

Start.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

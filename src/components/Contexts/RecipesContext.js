import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

export const RecipesContextProvider = (props) => {
  const { children, value } = props;

  const recipesContextValue = useMemo(() => {
    return value;
  }, [value]);

  return (
    <RecipesContext.Provider value={recipesContextValue}>
      {children}
    </RecipesContext.Provider>
  );
};

RecipesContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  value: PropTypes.shape({
    state: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func,
  }),
};

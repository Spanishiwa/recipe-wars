import React from 'react';
import { PostAdd } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import { ingredientInputAdornmentSx } from './IngredientInputStyles';

export const IngredientInputAdornment = (props) => {
  const {
    handleSubmit,
    handleKeySubmitThenFocus,
    inputRef,
    recipeName,
    showAlert,
  } = props;

  const handleSubmitThenFocus = (e) => {
    handleSubmit(e);
    showAlert('Fetching ingredient', 'info');
    inputRef.current.focus();
  };

  return (
    <InputAdornment position="end" name={`${recipeName}ingredient-input`}>
      <IconButton
        aria-label="Save ingredient"
        edge="end"
        name={`${recipeName}ingredient-input`}
        onClick={handleSubmitThenFocus}
        onKeyDown={handleKeySubmitThenFocus}
        sx={ingredientInputAdornmentSx}
        title="Save ingredient to ingredients list"
      >
        <PostAdd name={`${recipeName}ingredient-input`} variant="outlined" />
      </IconButton>
    </InputAdornment>
  );
};

IngredientInputAdornment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleKeySubmitThenFocus: PropTypes.func.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  recipeName: PropTypes.string,
  showAlert: PropTypes.func.isRequired,
};

import React from 'react';
import { PostAdd } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';

export const IngredientInputAdornment = (props) => {
  const { handleSubmit, handleKeySubmitThenFocus, inputRef, showAlert } = props;

  const handleSubmitThenFocus = (e) => {
    handleSubmit(e);
    showAlert('Fetching ingredient', 'info');
    inputRef.current.focus();
  };

  const ingredientInputAdornmentSx = {
    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      color: 'primary.main',
    },
  };

  return (
    <InputAdornment position="end" name="ingredient-input">
      <IconButton
        aria-label="Save ingredient"
        className="submit"
        edge="end"
        name="ingredient-input"
        onClick={handleSubmitThenFocus}
        onKeyDown={handleKeySubmitThenFocus}
        sx={ingredientInputAdornmentSx}
        title="Save ingredient to ingredients list"
      >
        <PostAdd name="ingredient-input" variant="outlined" />
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
  showAlert: PropTypes.func.isRequired,
};

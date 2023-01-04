import React from 'react';
import { PostAdd } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import { endAdornmentIconButtonSx } from './IngredientInputStyles';

export const EndAdornment = (props) => {
  const { handleKeySubmitThenFocus, handleSubmitThenFocus } = props;

  return (
    <InputAdornment position="end" name="ingredient-input">
      <IconButton
        aria-label="Save ingredient"
        className="submit"
        edge="end"
        name="ingredient-input"
        onClick={handleSubmitThenFocus}
        onKeyDown={handleKeySubmitThenFocus}
        sx={endAdornmentIconButtonSx}
        title="Save ingredient to ingredients list"
      >
        <PostAdd name="ingredient-input" variant="outlined" />
      </IconButton>
    </InputAdornment>
  );
};

EndAdornment.propTypes = {
  handleKeySubmitThenFocus: PropTypes.func.isRequired,
  handleSubmitThenFocus: PropTypes.func.isRequired,
};

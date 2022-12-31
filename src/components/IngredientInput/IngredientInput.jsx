import React, { useRef } from 'react';
import { Box, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { ingredientInputSx } from './IngredientInputStyles';
import { IngredientInputAdornment } from './IngredientInputAdornment';

const IngredientInput = (props) => {
  const { handlers, input, showAlert } = props;
  const { error, status, text } = input;
  const { handleBlur, handleChange, handleKeySubmit, handleSubmit } = handlers;

  const inputRef = useRef(null);

  const handleKeySubmitThenFocus = (e) => {
    const key = e.which || e.keyCode || 0;
    const isSubmit =
      e.target.classList.contains('submit') ||
      e.currentTarget.classList.contains('submit');

    if (key === 13 && isSubmit) {
      e.stopPropagation();
      e.preventDefault();

      handleKeySubmit(e);
      showAlert('Fetching ingredient', 'info');
      inputRef.current.focus();
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <TextField
        className="ingredient-input submit"
        label="Ingredient & quantity"
        error={error}
        helperText={status}
        id="ingredient-input"
        InputLabelProps={{ shrink: true }}
        inputProps={{ ref: inputRef }}
        InputProps={{
          endAdornment: (
            <IngredientInputAdornment
              handleSubmit={handleSubmit}
              handleKeySubmitThenFocus={handleKeySubmitThenFocus}
              inputRef={inputRef}
              showAlert={showAlert}
            />
          ),
        }}
        name="ingredient-input"
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeySubmitThenFocus}
        placeholder="e.g. 1/2 cup broccoli"
        sx={ingredientInputSx(error, status)}
        title="Enter an ingredient & quantity here"
        type="text"
        value={text}
        variant="outlined"
      />
    </Box>
  );
};

export default IngredientInput;

IngredientInput.propTypes = {
  handlers: PropTypes.shape({
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleKeySubmit: PropTypes.func,
    handleSubmit: PropTypes.func,
  }).isRequired,
  input: PropTypes.shape({
    error: PropTypes.bool,
    status: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  showAlert: PropTypes.func.isRequired,
};

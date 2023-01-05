import React, { useContext, useRef } from 'react';
import { Box, TextField } from '@mui/material';
import { getIngredientInputSx } from './IngredientInputStyles';
import { IngredientInputAdornment } from './IngredientInputAdornment';
import { getInput } from '../../Util';
import { SnackbarContext } from '../Contexts/SnackbarContext';
import { RecipesContext } from '../Contexts/RecipesContext';
import { resetInputError, updateInput } from '../../reducers/actions';

const IngredientInput = () => {
  const { state, dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);

  const handleBlur = (e) => {
    dispatch(resetInputError(e));
  };

  const handleChange = (e) => {
    dispatch(updateInput(e));
  };

  const inputRef = useRef(null);

  const handleKeySubmitThenFocus = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      e.stopPropagation();
      e.preventDefault();

      handleSubmit(e);
      showAlert('Fetching ingredient', 'info');
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name =
      e.target.getAttribute('name') || e.currentTarget.getAttribute('name');
    // code works - ration API calls for testing
    const ingredient = state.filter((ingredient) => ingredient.id === name);

    // if (ingredient) useFetchAPI(ingredient[0].text, null, name);
    if (ingredient) return;
  };

  const input = getInput(state, 'ingredient-input');
  const { error, status, text } = input;
  const ingredientInputSx = getIngredientInputSx(error, status);

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
        sx={ingredientInputSx}
        title="Enter an ingredient & quantity here"
        type="text"
        value={text}
        variant="outlined"
      />
    </Box>
  );
};

export default IngredientInput;

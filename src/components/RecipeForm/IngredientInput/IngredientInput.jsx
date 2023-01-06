import React, { useContext } from 'react';
import { Box, TextField } from '@mui/material';
import { getIngredientInputSx } from './IngredientInputStyles';
import { IngredientInputAdornment } from './IngredientInputAdornment';
import {
  currentlyRequesting,
  getAttributeName,
  getInput,
  getPOSTBody,
} from '../../../Util';
import { SnackbarContext } from '../../Contexts/SnackbarContext';
import { RecipesContext } from '../../Contexts/RecipesContext';
import {
  createIngredients,
  resetInputError,
  setFetchFail,
  setFetching,
  updateInput,
} from '../../../reducers/actions';
import PropTypes from 'prop-types';
import { CONFIG } from '../../../config';

const IngredientInput = (props) => {
  const { inputRef } = props;

  const { state, dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);

  const handleBlur = (e) => dispatch(resetInputError(e));
  const handleChange = (e) => dispatch(updateInput(e));

  const handleKeySubmitThenFocus = (e) => {
    e.stopPropagation();
    const key = e.which || e.keyCode || 0;

    if (key === 13) handleSubmit(e);
  };

  const handleSubmit = (e) => {
    if (currentlyRequesting(state)) return;

    dispatch(setFetching());
    showAlert('Fetching ingredient', 'info');
    inputRef.current.focus();

    const name = getAttributeName(e);
    const ingredient = state.filter((ingredient) => ingredient.id === name)[0];

    fetch(CONFIG.recipeURL, getPOSTBody(ingredient))
      .then((res) => {
        if (!res.ok) throw Error(`Poor input failed to update`);

        return res.json();
      })
      .then((data) => dispatch(createIngredients(data, name)))
      .catch((err) => dispatch(setFetchFail(name, err.message)));
  };

  const { error, status, text } = getInput(state, 'ingredient-input');
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

IngredientInput.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

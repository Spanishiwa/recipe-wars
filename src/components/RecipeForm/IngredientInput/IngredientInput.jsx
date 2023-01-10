import React, { useContext } from 'react';
import { Box, TextField } from '@mui/material';
import { getIngredientInputSx } from './IngredientInputStyles';
import { IngredientInputAdornment } from './IngredientInputAdornment';
import { currentlyRequesting, getInput, getPOSTBody } from '../../../Util';
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
  const { inputRef, recipeName } = props;

  const { state, dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);

  const handleBlur = (e) => dispatch(resetInputError(e));
  const handleChange = (e) => dispatch(updateInput(e));

  const handleKeySubmitThenFocus = (e) => {
    e.stopPropagation();
    const key = e.which || e.keyCode || 0;

    if (key === 13) handleSubmit(e);
  };

  const name = `${recipeName}ingredient-input`;
  const ingredient = getInput(state, name);

  const handleSubmit = () => {
    if (currentlyRequesting(state)) return;

    dispatch(setFetching());
    showAlert('Fetching ingredient', 'info');
    inputRef.current.focus();

    fetch(CONFIG.recipeURL, getPOSTBody(ingredient))
      .then((res) => {
        if (!res.ok) throw Error(`Poor input failed to update`);

        return res.json();
      })
      .then((data) => dispatch(createIngredients(data, name)))
      .catch((err) => dispatch(setFetchFail(name, err.message)));
  };

  const { error, status, text } = ingredient;
  const ingredientInputSx = getIngredientInputSx(error, status);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <TextField
        label="Ingredient & quantity"
        error={error}
        helperText={status}
        id={`${recipeName}ingredient-input`}
        InputLabelProps={{ shrink: true }}
        inputProps={{ ref: inputRef }}
        InputProps={{
          endAdornment: (
            <IngredientInputAdornment
              handleSubmit={handleSubmit}
              handleKeySubmitThenFocus={handleKeySubmitThenFocus}
              inputRef={inputRef}
              recipeName={recipeName}
              showAlert={showAlert}
            />
          ),
        }}
        name={`${recipeName}ingredient-input`}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeySubmitThenFocus}
        placeholder="e.g. 1/2 cup broccoli"
        required={true}
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
  recipeName: PropTypes.string,
};

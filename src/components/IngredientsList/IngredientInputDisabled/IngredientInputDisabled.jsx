import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  containerSx,
  ingredientInputDisabledSx,
  standardVariantSx,
} from './IngredientDisabledStyles';
import { EndAdornmentDisabled } from './EndAdornmentDisabled';
import { StartAdornmentDisabled } from './StartAdornmentDisabled';
import { Box, TextField, useTheme } from '@mui/material';
import { RecipesContext } from '../../Contexts/RecipesContext';
import {
  resetInputError,
  setFetchFail,
  setFetching,
  updateIngredient,
  updateInput,
} from '../../../reducers/actions';
import { currentlyRequesting, getPOSTBody } from '../../../Util';
import { SnackbarContext } from '../../Contexts/SnackbarContext';
import { CONFIG } from '../../../config';

const IngredientInputDisabled = (props) => {
  const { ingredient, isEditable } = props;
  const { state, dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);
  const mode = useTheme().palette.mode;

  const handleBlur = (e) => dispatch(resetInputError(e));
  const handleChange = (e) => dispatch(updateInput(e));

  const { error, id, isDisabled, status, text } = ingredient;

  const handleKeySubmit = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      if (currentlyRequesting(state)) return;

      dispatch(setFetching());
      showAlert('Fetching edited ingredient', 'info');

      fetch(CONFIG.recipeURL, getPOSTBody(ingredient))
        .then((res) => {
          if (!res.ok) throw Error(`Poor input failed to update`);

          return res.json();
        })
        .then((data) => dispatch(updateIngredient(data, id)))
        .catch((err) => dispatch(setFetchFail(id, err.message)));
    }
  };

  return (
    <Box name={id} sx={containerSx}>
      <TextField
        disabled={isDisabled}
        error={error}
        helperText={status}
        label={isDisabled ? '' : 'Ingredient & quantity'}
        id={id}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          ...standardVariantSx(mode, isDisabled),
          startAdornment: (
            <StartAdornmentDisabled
              handleKeySubmit={handleKeySubmit}
              ingredient={ingredient}
            />
          ),
          endAdornment: <EndAdornmentDisabled id={id} />,
        }}
        name={id}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={isDisabled ? undefined : handleKeySubmit}
        placeholder={text}
        sx={ingredientInputDisabledSx(isEditable)}
        title="Ingredient parsed through Edamam API"
        type="text"
        value={text}
        variant={isDisabled ? 'standard' : 'outlined'}
      />
    </Box>
  );
};

export default IngredientInputDisabled;

IngredientInputDisabled.propTypes = {
  ingredient: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    parsed: PropTypes.string.isRequired,
    calories: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    carbohydrate: PropTypes.string.isRequired,
    protein: PropTypes.string.isRequired,
    fat: PropTypes.string.isRequired,
    status: PropTypes.string,
    isDisabled: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    recipeName: PropTypes.string.isRequired,
  }).isRequired,
  isEditable: PropTypes.bool,
};

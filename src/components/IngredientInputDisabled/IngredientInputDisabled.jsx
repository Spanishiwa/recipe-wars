import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  containerSx,
  ingredientInputDisabledSx,
  standardVariantSx,
} from './IngredientDisabledStyles';
import { EndAdornmentDisabled } from './EndAdornmentDisabled';
import { StartAdornmentDisabled } from './StartAdornmentDisabled';
import { Box, TextField } from '@mui/material';
import { RecipesContext } from '../App/App';
import { resetInputError, updateInput } from '../../reducers/actions';

const IngredientInputDisabled = (props) => {
  const { ingredient } = props;
  const { state, dispatch } = useContext(RecipesContext);

  const handleBlur = (e) => dispatch(resetInputError(e));

  const handleChange = (e) => dispatch(updateInput(e));

  const handleKeySubmit = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      e.stopPropagation();
      e.preventDefault();

      const name =
        e.target.getAttribute('name') || e.currentTarget.getAttribute('name');
      // code works - ration API calls for testing
      const ingredient = state.filter((ingredient) => ingredient.id === name);

      // if (ingredient) useFetchAPI(ingredient[0].text, null, name);
      if (ingredient) return;
    }
  };

  const { error, id, isDisabled, status, text } = ingredient;

  return (
    <Box name={id} sx={containerSx}>
      <TextField
        className={`parsed ${isDisabled ? '' : 'submit'}`}
        disabled={isDisabled}
        error={error}
        helperText={status}
        label={isDisabled ? '' : 'Ingredient & quantity'}
        id={id}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          ...standardVariantSx(isDisabled),
          startAdornment: (
            <StartAdornmentDisabled handleKeySubmit={handleKeySubmit} id={id} />
          ),
          endAdornment: <EndAdornmentDisabled id={id} />,
        }}
        name={id}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={isDisabled ? undefined : handleKeySubmit}
        placeholder={text}
        sx={ingredientInputDisabledSx}
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
};

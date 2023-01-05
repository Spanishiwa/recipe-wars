import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { recipeTextfieldSx } from './RecipeTextfieldStyles';
import { RecipesContext } from '../Contexts/RecipesContext';
import { resetInputError, updateInput } from '../../reducers/actions';
import { getInput } from '../../Util';
import PropTypes from 'prop-types';

export const RecipeTextfield = (props) => {
  const { state, dispatch } = useContext(RecipesContext);

  const { inputRef, label, name, placeholder, required, title } = props;

  const handleBlur = (e) => dispatch(resetInputError(e));

  const handleChange = (e) => dispatch(updateInput(e));

  const input = getInput(state, name);
  const { error, status, text } = input;

  return (
    <TextField
      error={error}
      helperText={status}
      label={label}
      id={name}
      inputProps={{ ref: inputRef }}
      name={name}
      InputLabelProps={{ required: true, shrink: true }}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      sx={recipeTextfieldSx}
      title={title}
      type="text"
      variant="outlined"
      value={text}
    />
  );
};

RecipeTextfield.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  required: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

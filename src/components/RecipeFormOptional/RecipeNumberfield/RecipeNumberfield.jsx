import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../../Contexts/RecipesContext';
import { updateInput } from '../../../reducers/actions';
import { getInput } from '../../../Util';

export const RecipeNumberfield = (props) => {
  const { state, dispatch } = useContext(RecipesContext);
  const { label, name, title, sx } = props;

  const handleChange = (e) => dispatch(updateInput(e));

  const numberInputText = getInput(state, name).text;

  return (
    <TextField
      id={name}
      label={label}
      inputProps={{ min: 1, sx: { textAlign: 'center' } }}
      name={name}
      onChange={handleChange}
      title={title}
      type="number"
      sx={{ ...sx }}
      InputLabelProps={{ shrink: true }}
      value={numberInputText}
    />
  );
};

RecipeNumberfield.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

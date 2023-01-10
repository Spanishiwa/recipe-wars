import { Box, TextField } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getInput } from '../../Util';
import { RecipesContext } from '../Contexts/RecipesContext';
import { resetInputError, updateInput } from '../../reducers/actions';

export const RecipeTextarea = (props) => {
  const { state, dispatch } = useContext(RecipesContext);
  const { disabled, label, inputRef, name, placeholder, rows, sx, title } =
    props;

  const handleBlur = (e) => dispatch(resetInputError(e));
  const handleChange = (e) => dispatch(updateInput(e));

  const { text } = getInput(state, name);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <TextField
        cols="50"
        disabled={disabled}
        InputLabelProps={{ shrink: true }}
        label={label}
        id={name}
        inputProps={{ ref: inputRef }}
        multiline
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        sx={{ flex: '1 1 auto', ...sx }}
        title={title}
        variant="outlined"
        value={text}
      />
    </Box>
  );
};

RecipeTextarea.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  title: PropTypes.string,
};

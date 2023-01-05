import { Box, TextField } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getErrorSx, getStatusSx } from './RecipeTextareaSx';
import { getInput } from '../../Util';
import { RecipesContext } from '../Contexts/RecipesContext';
import { resetInputError, updateInput } from '../../reducers/actions';

export const RecipeTextarea = (props) => {
  const { state, dispatch } = useContext(RecipesContext);
  const { label, inputRef, name, placeholder, rows, title } = props;

  const handleBlur = (e) => dispatch(resetInputError(e));

  const handleChange = (e) => dispatch(updateInput(e));

  const input = getInput(state, name);
  const { error, status, text } = input;

  const errorSx = getErrorSx(error);
  const statusSx = getStatusSx(status);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <TextField
        className={`${name} ${status.length > 1 ? 'status' : ''}`}
        cols="50"
        error={error}
        helperText={status}
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
        sx={{ flex: '1 1 auto', ...errorSx, ...statusSx }}
        title={title}
        variant="outlined"
        value={text}
      />
    </Box>
  );
};

RecipeTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number,
  title: PropTypes.string.isRequired,
};

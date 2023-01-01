import { Box, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { getErrorSx, getStatusSx } from './RecipeTextareaSx';

export const RecipeTextarea = (props) => {
  const {
    error,
    handleBlur,
    handleChange,
    label,
    name,
    placeholder,
    inputRef,
    rows,
    status,
    title,
    value,
  } = props;

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
        value={value}
      />
    </Box>
  );
};

RecipeTextarea.propTypes = {
  error: PropTypes.bool,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  rows: PropTypes.number,
  status: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
};

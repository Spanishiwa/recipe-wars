import { Box, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

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
  const errorSx = error
    ? {
        '& .MuiInputBase-root.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'error.main',
        },
        '& .MuiInputLabel-root.Mui-error': {
          color: 'error.main',
        },
        '& .MuiFormHelperText-root.Mui-error': {
          color: 'error.main',
        },
      }
    : {};

  const statusSx =
    status.length > 1
      ? {
          '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'primary.main',
          },
          '& .MuiInputLabel-root': {
            color: 'primary.main',
          },
          '& .MuiFormHelperText-root': {
            color: 'primary.main',
          },
        }
      : {};
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
        inputProps={{
          ref: inputRef,
        }}
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

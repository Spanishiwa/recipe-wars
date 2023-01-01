import { TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export const RecipeTextfield = (props) => {
  const {
    error,
    handleBlur,
    handleChange,
    inputRef,
    label,
    name,
    placeholder,
    status,
    title,
    value,
  } = props;

  const recipeTextfieldSx = {
    flex: 1,
    '& .MuiInputLabel-root.Mui-required': {
      display: 'flex',
      flexDirection: 'row-reverse',
      marginLeft: '-5px',
    },
  };

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
      sx={recipeTextfieldSx}
      title={title}
      type="text"
      variant="outlined"
      value={value}
    />
  );
};

RecipeTextfield.propTypes = {
  error: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

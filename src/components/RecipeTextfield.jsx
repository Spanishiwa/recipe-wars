import { TextField } from '@mui/material';
import React from 'react';

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

  return (
    <TextField
      error={error}
      helperText={status}
      label={label}
      id={name}
      inputProps={{
        ref: inputRef,
      }}
      name={name}
      InputLabelProps={{
        required: true,
        shrink: true,
      }}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={placeholder}
      sx={{
        flex: 1,
        '& .MuiInputLabel-root.Mui-required': {
          display: 'flex',
          flexDirection: 'row-reverse',
          marginLeft: '-5px',
        },
      }}
      title={title}
      type="text"
      variant="outlined"
      value={value}
    />
  );
};

import { TextField } from "@mui/material";
import React from "react";

export const RecipeTextfield = (props) => {
  const {
    error,
    handleBlur,
    handleChange,
    label,
    name,
    placeholder,
    inputRef,
    status,
    title,
    value
  } = props;
  return (
    <TextField
      error={error}
      helperText={status}
      label={label}
      id={name}
      inputProps={{
        ref: inputRef
      }}
      name={name}
      InputLabelProps={{
        shrink: true
      }}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={placeholder}
      sx={{ flex: 1 }}
      title={title}
      type="text"
      variant="outlined"
      value={value}
    />
  );
};

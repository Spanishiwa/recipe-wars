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
    status,
    title,
    value
  } = props;
  return (
    <TextField
      error={error}
      label={label}
      id={name}
      name={name}
      InputLabelProps={{
        shrink: true
      }}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={placeholder}
      status={status}
      sx={{ flex: 1 }}
      title={title}
      type="text"
      variant="outlined"
      value={value}
    />
  );
};

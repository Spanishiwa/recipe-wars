import { TextField } from "@mui/material";
import React from "react";

export const RecipeTextfield = (props) => {
  const { handleChange, label, name, placeholder, title, value } = props;
  return (
    <TextField
      label={label}
      id={name}
      name={name}
      InputLabelProps={{
        shrink: true
      }}
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

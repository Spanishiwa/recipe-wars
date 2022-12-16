import { TextField } from "@mui/material";
import React from "react";

export const RecipeNumberfield = (props) => {
  const { handleChange, label, name, title, value } = props;
  return (
    <TextField
      id={name}
      label={label}
      inputProps={{ min: 1, sx: { textAlign: "center" } }}
      name={name}
      onChange={handleChange}
      title={title}
      type="number"
      sx={{ maxWidth: "145px" }}
      InputLabelProps={{
        shrink: true
      }}
      value={value}
    />
  );
};

import { PostAdd } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

export const RecipeTextarea = (props) => {
  const {
    error,
    handleBlur,
    handleChange,
    label,
    name,
    placeholder,
    rows,
    status,
    title,
    value
  } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextField
        className={name}
        cols="50"
        error={error}
        helperText={status}
        InputLabelProps={{ shrink: true }}
        label={label}
        id={name}
        multiline
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        sx={{ flex: "1 1 auto" }}
        title={title}
        variant="outlined"
        value={value}
      />
    </Box>
  );
};

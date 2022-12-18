import { Box, TextField } from "@mui/material";
import React from "react";

export const RecipeTextarea = (props) => {
  const {
    handleChange,
    handleKeySubmit,
    label,
    name,
    placeholder,
    rows,
    title,
    value
  } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextField
        className={name}
        cols="50"
        InputLabelProps={{ shrink: true }}
        label={label}
        id={name}
        multiline
        name={name}
        onChange={handleChange}
        onKeyDown={handleKeySubmit}
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

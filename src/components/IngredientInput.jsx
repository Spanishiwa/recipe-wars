import React from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { PostAdd } from "@mui/icons-material";

const IngredientInput = (props) => {
  const { handleChange, handleKeySubmit, handleSubmit, value } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextField
        className="ingredient-input"
        label="Ingredient & quantity"
        id="ingredient-input"
        name="ingredient-input"
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" name="ingredient-input">
              <IconButton
                aria-label="Save ingredient"
                edge="end"
                name="ingredient-input"
                onClick={handleSubmit}
                onKeyDown={handleKeySubmit}
                sx={{
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    color: "primary.main"
                  }
                }}
                title="Save ingredient to ingredients list"
              >
                <PostAdd name="ingredient-input" variant="outlined" />
              </IconButton>
            </InputAdornment>
          )
        }}
        name="ingredient-input"
        onChange={handleChange}
        onKeyDown={handleKeySubmit}
        placeholder="e.g. 1/2 cup broccoli"
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-root.Mui-focused .MuiIconButton-root": {
            color: "primary.main"
          }
        }}
        title="Enter an ingredient & quantity here"
        type="text"
        value={value}
        variant="outlined"
      />
    </Box>
  );
};

export default IngredientInput;

import React from "react";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  FormControl
} from "@mui/material";
import { PostAdd } from "@mui/icons-material";

const IngredientInput = (props) => {
  const { handleChange, handleKeyDown, handleSubmit, text } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextField
        className="ingredient-input"
        label="Ingredient and quantity"
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
                onKeyDown={handleKeyDown}
                sx={{ "&:hover": { color: "primary.main" } }}
                title="Save ingredient to ingredients list"
              >
                <PostAdd name="ingredient-input" variant="outlined" />
              </IconButton>
            </InputAdornment>
          )
        }}
        name="ingredient-input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="e.g. 1/2 cup of broccoli"
        sx={{ flex: 1 }}
        title="Enter an ingredient and quantity here"
        type="text"
        value={text}
        variant="outlined"
      />
    </Box>
  );
};

export default IngredientInput;

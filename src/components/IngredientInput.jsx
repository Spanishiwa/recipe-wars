import React from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { PostAdd } from "@mui/icons-material";

const IngredientInput = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextField
        className="ingredient-input"
        label="Ingredient and quantity"
        id="ingredient-input"
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Save ingredient"
                edge="end"
                // onClick={props.handleClick}
                title="Save ingredient to ingredients list"
              >
                <PostAdd variant="outlined" />
              </IconButton>
            </InputAdornment>
          )
        }}
        name="ingredient-input"
        onChange={props.handleChange}
        placeholder="e.g. 1/2 cup of broccoli"
        sx={{ flex: 1 }}
        title="Enter an ingredient and quantity here"
        type="text"
        variant="outlined"
      />
    </Box>
  );
};

export default IngredientInput;

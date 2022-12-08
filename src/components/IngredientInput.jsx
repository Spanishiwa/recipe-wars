import React from "react";
import {
  Button,
  Box,
  TextField,
  IconButton,
  InputAdornment
} from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

function IngredientInput(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextField
        className="ingredient-input"
        label="Ingredient and quantity"
        id="ingredient-input"
        InputLabelProps={{
          shrink: true
        }}
        // endAdornment={
        //   <InputAdornment position="end">
        //     <IconButton aria-label="toggle password visibility" edge="end">
        //       <LibraryAddIcon />
        //     </IconButton>
        //   </InputAdornment>
        // }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="Add ingredient" edge="end">
                <LibraryAddIcon />
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
      {/* <Button
        color="primary"
        className="ingredient-save"
        // onClick={props.handleClick}
        title="Save ingredient to ingredients list"
        type="button"
        variant="outlined"
        startIcon={<LibraryAddIcon />}
      >
        Save Ingredient
      </Button> */}
    </Box>
  );
}

export default IngredientInput;

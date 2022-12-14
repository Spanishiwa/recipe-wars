import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const IngredientInputDisabled = (props) => {
  // props.ingredient[0]
  // {id: '68265', text: 'one tablespoon lime zest', parsed: '1 tablespoon lime zest', calories: 2, protein: '0.09g protein', …}
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextField
        className="ingredient-input"
        // label="Ingredient and quantity"
        id={props.ingredient.id}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="Edit parsed ingredient"
                edge="end"
                // onClick={props.handleClick}
                sx={{ "&:hover": { color: "primary.main" } }}
                title="Save ingredient to ingredients list"
              >
                <EditIcon variant="standard" />
              </IconButton>
              <IconButton
                aria-label="Submit parsed ingredient"
                edge="end"
                // onClick={props.handleClick}
                sx={{ "&:hover": { color: "primary.main" } }}
                title="Save ingredient to ingredients list"
              >
                <AddTaskIcon variant="standard" />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Save ingredient"
                edge="end"
                // onClick={props.handleClick}
                sx={{ "&:hover": { color: "primary.main" } }}
                title="Save ingredient to ingredients list"
              >
                <DeleteIcon variant="outlined" />
              </IconButton>
            </InputAdornment>
          )
        }}
        name="ingredient-input"
        p={0}
        placeholder={props.ingredient.parsed}
        sx={{ flex: 1 }}
        title="ingredient parsed through Edamam API"
        type="text"
        disabled
        color="success"
        variant="standard"
        value={props.ingredient.parsed}
      />
      {props.ingredients}
    </Box>
  );
};

export default IngredientInputDisabled;

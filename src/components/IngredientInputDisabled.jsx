import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const IngredientInputDisabled = (props) => {
  const { handleDelete, id, ingredient, parsed } = props;
  // props.ingredient[0]
  // {id: '68265', text: 'one tablespoon lime zest', parsed: '1 tablespoon lime zest', calories: 2, protein: '0.09g protein', …}
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextField
        className="ingredient-input"
        // label="Ingredient and quantity"
        id={ingredient.id}
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
                name={ingredient.id}
                sx={{ "&:hover": { color: "primary.main" } }}
                title="Save ingredient to ingredients list"
              >
                <EditIcon name={ingredient.id} variant="standard" />
              </IconButton>
              <IconButton
                aria-label="Submit parsed ingredient"
                edge="end"
                // onClick={props.handleClick}
                name={ingredient.id}
                sx={{ "&:hover": { color: "primary.main" } }}
                title="Save ingredient to ingredients list"
              >
                <AddTaskIcon name={ingredient.id} variant="standard" />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Delete ingredient"
                onClick={handleDelete}
                edge="end"
                name={ingredient.id}
                sx={{ "&:hover": { color: "primary.main" } }}
                title="Delete ingredient from ingredients list"
              >
                <DeleteIcon name={ingredient.id} variant="outlined" />
              </IconButton>
            </InputAdornment>
          )
        }}
        name={ingredient.id}
        p={0}
        placeholder={ingredient.parsed}
        sx={{ flex: 1 }}
        title="ingredient parsed through Edamam API"
        type="text"
        disabled
        color="success"
        variant="standard"
        value={ingredient.parsed}
      />
    </Box>
  );
};

export default IngredientInputDisabled;

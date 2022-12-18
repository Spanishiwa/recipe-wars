import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const IngredientInputDisabled = (props) => {
  const {
    handleChange,
    handleDelete,
    handleEdit,
    handleKeyDown,
    handleToggleDisable,
    id,
    ingredient,
    parsed
  } = props;
  // props.ingredient[0]
  // {id: '68265', text: 'one tablespoon lime zest', parsed: '1 tablespoon lime zest', calories: 2, protein: '0.09g protein', …}
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flex: "1 1 auto"
      }}
    >
      <TextField
        disabled={ingredient.isDisabled}
        label="Ingredient & quantity"
        id={ingredient.id}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="Edit parsed ingredient"
                className="edit"
                edge="end"
                // onClick={props.handleClick}
                name={ingredient.id}
                sx={{
                  color: "text.primary",
                  "&:hover": { color: "primary.main" },
                  pl: 0
                }}
                onClick={handleToggleDisable}
                title="Edit ingredient"
              >
                <EditIcon name={ingredient.id} variant="standard" />
              </IconButton>
              <IconButton
                aria-label="Submit parsed ingredient"
                className="submit"
                edge="end"
                name={ingredient.id}
                onClick={handleEdit}
                sx={{
                  color: "text.primary",
                  "&:hover": { color: "primary.main" },
                  pl: 0
                }}
                title="Save your edits to the ingredients list"
              >
                <AddTaskIcon name={ingredient.id} variant="standard" />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Delete ingredient"
                className="delete"
                edge="end"
                name={ingredient.id}
                onClick={handleDelete}
                sx={{
                  color: "text.primary",
                  "&:hover": { color: "error.main" },
                  pr: 0
                }}
                title="Delete ingredient from ingredients list"
              >
                <DeleteIcon name={ingredient.id} variant="outlined" />
              </IconButton>
            </InputAdornment>
          )
        }}
        name={ingredient.id}
        onChange={handleChange}
        onKeyDown={ingredient.isDisabled ? undefined : handleKeyDown}
        p={0}
        placeholder={ingredient.text}
        sx={{
          flex: "1 1 auto",
          "& .MuiInputBase-root.Mui-disabled .submit": { display: "none" },
          "& .MuiInputBase-root.Mui-disabled .delete": { display: "none" },
          "& .MuiInputBase-root.Mui-disabled .edit": { display: "inline-flex" },
          "& .MuiInputBase-root .edit": { display: "none" }
        }}
        title="Ingredient parsed through Edamam API"
        type="text"
        value={ingredient.text}
        variant="standard"
      />
    </Box>
  );
};

export default IngredientInputDisabled;

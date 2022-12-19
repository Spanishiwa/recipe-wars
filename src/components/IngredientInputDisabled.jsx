import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Done } from "@mui/icons-material";

const IngredientInputDisabled = (props) => {
  const {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeyDelete,
    handleKeySubmit,
    handleToggleDisable,
    id,
    ingredient,
    parsed
  } = props;

  const standardVariantSx = ingredient.isDisabled
    ? { disableUnderline: true }
    : {};
  // props.ingredient[0]
  // {id: '68265', text: 'one tablespoon lime zest', parsed: '1 tablespoon lime zest', calories: 2, protein: '0.09g protein', …}
  return (
    <Box
      name={ingredient.id}
      sx={{
        display: "flex",
        flexDirection: "row",
        flex: "1 1 auto"
      }}
    >
      <TextField
        className={`parsed ${ingredient.isDisabled ? "" : "submit"}`}
        disabled={ingredient.isDisabled}
        error={ingredient.error}
        helperText={ingredient.status}
        label={ingredient.isDisabled ? "" : "Ingredient & quantity"}
        id={ingredient.id}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          ...standardVariantSx,
          startAdornment: (
            <InputAdornment name={ingredient.id} position="start">
              <IconButton
                aria-label="Edit parsed ingredient"
                className="edit"
                edge="end"
                name={ingredient.id}
                sx={{
                  color: "text.primary",
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    color: "primary.main"
                  }
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
                onKeyDown={handleKeySubmit}
                sx={{
                  color: "primary.main",
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    color: "primary.main"
                  }
                }}
                title="Save your edits to the ingredients list"
              >
                <Done name={ingredient.id} variant="standard" />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              name={ingredient.id}
              onKeyDown={handleKeyDelete}
              position="end"
            >
              <IconButton
                aria-label="Delete ingredient"
                className="delete"
                edge="end"
                name={ingredient.id}
                onClick={handleDelete}
                onKeyDown={handleKeyDelete}
                sx={{
                  color: "error.main",
                  "&:hover": { color: "error.main" }
                }}
                title="Delete ingredient from ingredients list"
              >
                <DeleteIcon
                  name={ingredient.id}
                  onKeyDown={handleKeyDelete}
                  variant="outlined"
                />
              </IconButton>
            </InputAdornment>
          )
        }}
        name={ingredient.id}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={ingredient.isDisabled ? undefined : handleKeySubmit}
        p={0}
        placeholder={ingredient.text}
        sx={{
          flex: "1 1 auto",
          "& .MuiInputBase-root.Mui-disabled .submit": { display: "none" },
          "& .MuiInputBase-root.Mui-disabled .delete": { display: "none" },
          "& .MuiInputBase-root.Mui-disabled .edit": { display: "inline-flex" },
          "& .MuiInputBase-root .edit": { display: "none" },
          "& .MuiInputBase-adornedEnd.MuiInputBase-adornedStart": {
            paddingLeft: "0px "
          }
        }}
        title="Ingredient parsed through Edamam API"
        type="text"
        value={ingredient.text}
        variant={ingredient.isDisabled ? "standard" : "outlined"}
      />
    </Box>
  );
};

export default IngredientInputDisabled;

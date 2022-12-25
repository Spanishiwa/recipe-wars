import React from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { PostAdd } from "@mui/icons-material";

const IngredientInput = (props) => {
  const { handlers, input } = props;
  const { error, status, value } = input;
  const { handleBlur, handleChange, handleKeySubmit, handleSubmit } = handlers;

  const errorSx = error
    ? {
        "& .MuiInputBase-root.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "error.main"
        },
        "& .MuiInputLabel-root.Mui-error": {
          color: "error.main"
        },
        "& .MuiFormHelperText-root.Mui-error": {
          color: "error.main"
        }
      }
    : {};
  const statusSx =
    status.length > 1
      ? {
          "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "primary.main"
          },
          "& .MuiInputLabel-root": {
            color: "primary.main"
          },
          "& .MuiFormHelperText-root": {
            color: "primary.main"
          }
        }
      : {};
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <TextField
        className="ingredient-input submit"
        label="Ingredient & quantity"
        error={error}
        helperText={status}
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
                className="submit"
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
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeySubmit}
        placeholder="e.g. 1/2 cup broccoli"
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-root.Mui-focused .MuiIconButton-root": {
            color: "primary.main"
          },
          ...errorSx,
          ...statusSx
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

import React, { useRef } from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { PostAdd } from "@mui/icons-material";

const IngredientInput = (props) => {
  const { handlers, input } = props;
  const { error, status, text } = input;
  const { handleBlur, handleChange, handleKeySubmit, handleSubmit } = handlers;

  const inputRef = useRef(null);

  const handleSubmitThenFocus = (e) => {
    handleSubmit(e);
    inputRef.current.focus();
  };

  const handleKeySubmitThenFocus = (e) => {
    const key = e.which || e.keyCode || 0;
    const isSubmit =
      e.target.classList.contains("submit") ||
      e.currentTarget.classList.contains("submit");

    if (key === 13 && isSubmit) {
      e.stopPropagation();
      e.preventDefault();

      handleKeySubmit(e);
      inputRef.current.focus();
    }
  };

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
        inputProps={{
          ref: inputRef
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" name="ingredient-input">
              <IconButton
                aria-label="Save ingredient"
                className="submit"
                edge="end"
                name="ingredient-input"
                onClick={handleSubmitThenFocus}
                onKeyDown={handleKeySubmitThenFocus}
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
        onKeyDown={handleKeySubmitThenFocus}
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
        value={text}
        variant="outlined"
      />
    </Box>
  );
};

export default IngredientInput;

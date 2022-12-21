import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
    handleToggleDisable
  } = props;

  const { error, id, isDisabled, status, text } = props.ingredient;

  const standardVariantSx = isDisabled ? { disableUnderline: true } : {};
  return (
    <Box
      name={id}
      sx={{
        display: "flex",
        flexDirection: "row",
        flex: "1 1 auto"
      }}
    >
      <TextField
        className={`parsed ${isDisabled ? "" : "submit"}`}
        disabled={isDisabled}
        error={error}
        helperText={status}
        label={isDisabled ? "" : "Ingredient & quantity"}
        id={id}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          ...standardVariantSx,
          startAdornment: (
            <InputAdornment name={id} position="start">
              <IconButton
                aria-label="Edit parsed ingredient"
                className="edit"
                edge="end"
                name={id}
                sx={{
                  color: "text.primary",
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    color: "primary.main"
                  }
                }}
                onClick={handleToggleDisable}
                title="Edit ingredient"
              >
                <EditIcon name={id} variant="standard" />
              </IconButton>
              <IconButton
                aria-label="Submit parsed ingredient"
                className="submit"
                edge="end"
                name={id}
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
                <Done name={id} variant="standard" />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              name={id}
              onKeyDown={handleKeyDelete}
              position="end"
            >
              <IconButton
                aria-label="Delete ingredient"
                className="delete"
                edge="end"
                name={id}
                onClick={handleDelete}
                onKeyDown={handleKeyDelete}
                sx={{
                  color: "error.main",
                  "&:hover": { color: "error.main" }
                }}
                title="Delete ingredient from ingredients list"
              >
                <DeleteIcon
                  name={id}
                  onKeyDown={handleKeyDelete}
                  variant="outlined"
                />
              </IconButton>
            </InputAdornment>
          )
        }}
        name={id}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={isDisabled ? undefined : handleKeySubmit}
        p={0}
        placeholder={text}
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
        value={text}
        variant={isDisabled ? "standard" : "outlined"}
      />
    </Box>
  );
};

export default IngredientInputDisabled;

import { Box, Card, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import ImageInput from "./components/ImageInput";
import IngredientInput from "./components/IngredientInput";
import { IngredientsList } from "./components/IngredientsList";

export const RecipeFormOptional = (props) => {
  const {
    handleChange,
    handleImage,
    handleKeyDown,
    handleSubmit,
    ingredientInputVal,
    values
  } = props;

  const inputValues = (state) => {
    return state.reduce(
      (accum, inputState) => {
        switch (inputState.id) {
          case "image-input":
            accum.imageImgSrc = inputState.imgSrc;
          case "title-input":
            accum.titleText = inputState.text;
          case "description-textarea":
            accum.descriptionText = inputState.text;
          case "recipe-textarea":
            accum.recipeText = inputState.text;
          case "servings-input":
            accum.servingsText = inputState.text;
          default:
            return accum;
        }
      },
      {
        imageImgSrc: "",
        titleText: "",
        descriptionText: "",
        recipeText: "",
        servingsText: 1
      }
    );
  };

  const { imageImgSrc, titleText, descriptionText, recipeText, servingsText } =
    inputValues(values);
  return (
    <Card component="section" sx={{ maxWidth: "500px", p: 2 }}>
      <Typography component="h1" variant="h4" mb={4}>
        Customize recipe{" "}
        <Typography component="span" variant="h6">
          (optional)
        </Typography>
      </Typography>
      <form id="recipe-form-optional">
        <FormControl sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Recipe title"
            id="title-input"
            name="title-input"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange}
            placeholder="e.g. Abuela's dirty beans syrniki"
            sx={{ flex: 1 }}
            title="enter a concise, cogent, and exciting title"
            type="text"
            variant="outlined"
            value={titleText}
          />
          <TextField
            className="description-textarea"
            InputLabelProps={{ shrink: true }}
            label="Recipe description"
            id="description-textarea"
            multiline
            name="description-textarea"
            onChange={handleChange}
            placeholder="Elaborate on the recipe title by covering key points to know about the recipe such as specific cuts of meat, speciality cooking devices like sous vide machines, or anything else special the dish or its history."
            rows="4"
            sx={{ flex: "1 1 auto" }}
            title="Highlight interesting things about the recipe or elaborate on the recipe title"
            variant="outlined"
            value={descriptionText}
          />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <TextField
              id="servings-input"
              label="Servings per recipe"
              inputProps={{ min: "1", sx: { textAlign: "center" } }}
              name="servings-input"
              onChange={handleChange}
              type="number"
              sx={{ maxWidth: "145px" }}
              InputLabelProps={{
                shrink: true
              }}
              value={servingsText}
            />
          </Box>
          <Box>
            <ImageInput handleImage={handleImage} imgName={imageImgSrc} />
          </Box>
          <TextField
            className="recipe-textarea"
            InputLabelProps={{ shrink: true }}
            label="Recipe instructions"
            id="recipe-textarea"
            multiline
            name="recipe-textarea"
            onChange={handleChange}
            placeholder=""
            rows="4"
            sx={{ flex: "1 1 auto" }}
            title=""
            variant="outlined"
            value={recipeText}
          />
        </FormControl>
      </form>
    </Card>
  );
};

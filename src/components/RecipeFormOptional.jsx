import { Box, Card, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import ImageInput from "./ImageInput";
import IngredientInput from "./IngredientInput";
import { IngredientsList } from "./IngredientsList";
import { RecipeNumberfield } from "./RecipeNumberfield";
import { RecipeTextarea } from "./RecipeTextarea";
import { RecipeTextfield } from "./RecipeTextfield";

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
            accum.imageImgName = inputState.imgName;
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
        imageImgName: "",
        titleText: "",
        descriptionText: "",
        recipeText: "",
        servingsText: 1
      }
    );
  };

  const { imageImgName, titleText, descriptionText, recipeText, servingsText } =
    inputValues(values);

  const ingredientsState = values.filter((ingredient) => ingredient.parsed);

  const titleProps = {
    handleChange: handleChange,
    label: "Recipe title",
    name: "title-input",
    placeholder: "e.g. Abuela's dirty beans syrniki",
    title: `Enter a concise, cogent, and exciting title`,
    value: titleText
  };

  const ingredientsTextareaProps = {
    label: "Ingredients & quantities list",
    name: "ingredients-textarea",
    placeholder: `Ingredients list with one ingredient and quantity per line e.g.
1/2 cup heavy cream
3 tablespoons butter
1 pound chicken breast`,
    title:
      "Enter an ingredients list with one ingredient and quantity per line",
    value: recipeText
  };

  const recipeDescriptionProps = {
    handleChange: handleChange,
    label: "Recipe description",
    name: "description-textarea",
    placeholder: `Elaborate on the recipe title by covering key points to know. Specific cuts of meat, cooking devices, or anything special about the dish.`,
    rows: 5,
    title: `Highlight interesting things about the recipe or elaborate on the recipe title`,
    value: descriptionText
  };

  const recipeTextareaProps = {
    handleChange: handleChange,
    label: "Recipe instructions",
    name: "recipe-textarea",
    placeholder: `1. Write well formatted instructions with detailed steps to prepare the
recipe.

2. Make good use of numbering and white space for maximum cogency.`,
    rows: 12,
    title: `Describe in full detail the cooking and preparation process to reproduce your recipe`,
    value: recipeText
  };

  const servingsProps = {
    handleChange: handleChange,
    label: "Servings per recipe",
    name: "servings-input",
    title: `How many portion sizes the recipe serves`,
    value: servingsText
  };

  return (
    <Box component="section" sx={{ display: "flex", gap: 4, p: 2 }}>
      <Box
        component="form"
        id="recipe-form-optional"
        sx={{
          display: "flex",
          flex: { xs: "1 1 auto", sm: "1 1 auto", md: "55%" },
          flexDirection: "column"
        }}
      >
        <Typography component="h1" variant="h5" mb={3}>
          Customize recipe
          <Typography
            component="span"
            variant="caption"
            sx={{
              display: { xs: "block", md: "inline" },
              ml: { xs: "0px", md: "8px" },
              verticalAlign: "middle"
            }}
          >
            (optional)
          </Typography>
        </Typography>
        <FormControl sx={{ display: "flex", gap: 4 }}>
          <RecipeTextfield {...titleProps} />
          <RecipeTextarea {...recipeDescriptionProps} />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <RecipeNumberfield {...servingsProps} />
          </Box>
          <Box>
            <ImageInput handleImage={handleImage} imgName={imageImgName} />
          </Box>
          <RecipeTextarea {...recipeTextareaProps} />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flex: { xs: "1 1 auto", md: "1 1 45%" },
          flexDirection: "column"
        }}
      >
        <IngredientsList ingredients={ingredientsState} />
      </Box>
    </Box>
  );
};

import { Tune } from "@mui/icons-material";
import { Box, FormControl, Typography } from "@mui/material";
import React from "react";
import ImageInput from "./ImageInput";
import { IngredientsList } from "./IngredientsList";
import { RecipeNumberfield } from "./RecipeNumberfield";
import { RecipeTextarea } from "./RecipeTextarea";
import { RecipeTextfield } from "./RecipeTextfield";

export const RecipeFormOptional = (props) => {
  const { handlers, ingredients, inputs } = props;

  const {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleImage,
    handleKeyDelete,
    handleKeySubmit,
    handleSelect,
    handleToggleDisable
  } = handlers;

  const handlersIngredientsList = {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeyDelete,
    handleKeySubmit,
    handleToggleDisable
  };

  const inputValues = (inputs) => {
    return inputs.reduce(
      (accum, input) => {
        switch (input.id) {
          case "image-input":
            accum.imgName = input.imgName;
          case "description-textarea":
            accum.description = input.text;
          case "recipe-textarea":
            accum.instructions = input.text;
          case "servings-input":
            accum.servings = input.text;
          case "photos-select-input":
            accum.selectText = input.text;
          default:
            return accum;
        }
      },
      {
        imgName: "",
        description: "",
        instructions: "",
        servings: 1,
        selectText: ""
      }
    );
  };

  const { imgName, description, instructions, servings, selectText } =
    inputValues(inputs);

  const recipeDescriptionProps = {
    error: false,
    handleChange: handleChange,
    label: "Recipe description",
    name: "description-textarea",
    placeholder: `Elaborate on the recipe title by covering key points to know. Specific cuts of meat, cooking devices, or anything special about the dish.`,
    rows: 5,
    status: "",
    title: `Highlight interesting things about the recipe or elaborate on the recipe title`,
    value: description
  };

  const recipeTextareaProps = {
    error: false,
    handleChange: handleChange,
    label: "Recipe instructions",
    name: "recipe-textarea",
    placeholder: `1. Write well formatted instructions with detailed steps to prepare the
recipe.

2. Make good use of numbering and white space for maximum cogency.`,
    rows: 19,
    status: "",
    title: `Describe in full detail the cooking and preparation process to reproduce your recipe`,
    value: instructions
  };

  const servingsProps = {
    handleChange: handleChange,
    label: "Servings per recipe",
    name: "servings-input",
    title: `How many portion sizes the recipe serves`,
    value: servings
  };

  return (
    <Box component="section" sx={{ display: "flex", gap: 2, p: 2 }}>
      <Box
        component="form"
        id="recipe-form-optional"
        sx={{
          display: "flex",
          flex: { xs: "1 1 auto", sm: "1 1 auto", md: "65%" },
          flexDirection: "column"
        }}
      >
        <Typography component="h1" variant="h5" mb={3}>
          <Tune sx={{ padding: "0px 8px 0px 0px", verticalAlign: "middle" }} />
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
          <Box sx={{ display: "flex" }}>
            <ImageInput
              handleImage={handleImage}
              handleSelect={handleSelect}
              imgName={imgName}
              text={selectText}
            />
          </Box>
          <RecipeTextarea {...recipeTextareaProps} />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flex: { xs: "1 1 auto", md: "1 1 35%" },
          flexDirection: "column"
        }}
      >
        <IngredientsList
          handlers={handlersIngredientsList}
          ingredients={ingredients}
        />
      </Box>
    </Box>
  );
};

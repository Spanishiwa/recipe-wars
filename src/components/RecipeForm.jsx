import React, { useState } from "react";
import { CONFIG, MOCK_RES } from "./../config";
import IngredientInput from "./IngredientInput";
import ImageInput from "./ImageInput";
import IngredientsTextarea from "./IngredientsTextarea";
import { Box, Card, FormControl, Typography } from "@mui/material";
import { IngredientsList } from "./IngredientsList";
import { ITALIAN_BEEF } from "../config";

const RecipeForm = (props) => {
  const {
    handleSubmit,
    handleChange,
    handleDelete,
    handleKeyDown,
    handleImage,
    values
  } = props;

  const ingredients = values.filter((ingredient) => ingredient.parsed);
  const ingredientInputVal = values.filter(
    (ingredient) => ingredient.id == "ingredient-input"
  )[0].text;

  return (
    <Card component="section" sx={{ maxWidth: "500px", p: 2 }}>
      <Typography component="h1" variant="h4" mb={4}>
        Recipe Wars Analyzer Form
      </Typography>
      <form id="recipe-form">
        <FormControl sx={{ display: "flex", gap: 2 }}>
          <IngredientInput
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            value={ingredientInputVal}
          />
          <IngredientsList
            handleDelete={handleDelete}
            ingredients={ingredients}
          />
          {/* <IngredientsTextarea /> */}
          {/* <ImageInput handleImage={handleImage} />
          {imgUpload}
          <Box component="span">Ingredient input is {values.ingredient}</Box>
          <Box component="span">Calorie response is {values.calories}</Box> */}
        </FormControl>
      </form>
    </Card>
  );
};

export default RecipeForm;

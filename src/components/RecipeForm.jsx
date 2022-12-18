import React, { useState } from "react";
import { CONFIG, MOCK_RES } from "./../config";
import IngredientInput from "./IngredientInput";
import ImageInput from "./ImageInput";
import IngredientsTextarea from "./IngredientsTextarea";
import {
  Box,
  Card,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  Typography
} from "@mui/material";
import { IngredientsList } from "./IngredientsList";
import { ITALIAN_BEEF } from "../config";
import { Close, Done } from "@mui/icons-material";
import { InputExamples } from "./InputExamples";
import { RecipeTextarea } from "./RecipeTextarea";

const RecipeForm = (props) => {
  const {
    handleChange,
    handleDelete,
    handleEdit,
    handleKeyDown,
    handleImage,
    handleSubmit,
    handleToggleDisable,
    values
  } = props;

  const ingredients = values.filter((ingredient) => ingredient.parsed);
  // const ingredientInputVal = values.filter(
  //   (ingredient) => ingredient.id == "ingredient-input"
  // )[0].text;

  // const ingredientsTextareaValue = values.filter(
  //   (ingredient) => ingredient.id == "ingredients-textarea"
  // )[0].value;

  const inputValues = (state) => {
    return state.reduce(
      (accum, inputState) => {
        switch (inputState.id) {
          case "ingredient-input":
            accum.ingredientInputText = inputState.text;
          case "ingredients-textarea":
            accum.ingredientsTextareaText = inputState.text;
          default:
            return accum;
        }
      },
      { ingredientInputText: "", ingredientsTextareaText: "" }
    );
  };

  const { ingredientInputText, ingredientsTextareaText } = inputValues(values);
  const inputExamples = {
    examples: [
      "12 ounces flour",
      "About 1 scoop of flour",
      "1 pound green beans",
      "3 cups steamed carrots",
      "8.5 oz red chili pepper",
      "8.5 oz Italian giardiniera"
    ],
    titles: [
      "Good input - used exact measurements",
      "Poor input - nonstandard unit of measurement",
      "Good input - ingredient was concise without unecessary descriptors",
      "Poor input - recipe ingredient preparation methods were included",
      "Good input - a niche ingredient was substituted for a common ingredient",
      "Poor input - too specific to be found in Edamam's database"
    ]
  };

  const ingredientsTextareaProps = {
    handleChange: handleChange,
    label: "Ingredients & quantities",
    name: "ingredients-textarea",
    placeholder: `Ingredients list with one ingredient & quantity per line e.g.
1/2 cup heavy cream
3 tablespoons butter
1 pound chicken breast`,
    rows: 10,
    title: `Enter an ingredients grocery list with one ingredient & quantity per line`,
    value: ingredientsTextareaText
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        gap: 2,
        p: 2
      }}
    >
      <Box
        component="form"
        id="recipe-form"
        sx={{
          display: "flex",
          flex: { xs: "1 1 auto", sm: "1 1 auto", md: "65%" },
          flexDirection: "column",
          rowGap: 2
        }}
      >
        <Typography component="h1" variant="h5" mb={1}>
          Recipe nutrition analyzer
        </Typography>
        <Typography component="p" variant="b1">
          Enter your recipe ingredients below "grocery list" style - an
          ingredient and unit of measurement. Don't enter guesstimations such as
          "roughly" one "heaping" cup or descriptions like "finely minced" and
          "steamed". Substitute rare ingredients for common names and double
          check after each submission.
        </Typography>
        <Box>
          <List
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexFlow: "wrap",
              pt: 0
            }}
          >
            {inputExamples.examples.map((inputExample, idx) => {
              return (
                <InputExamples
                  CustomIcon={idx % 2 == 0 ? Done : Close}
                  iconColor={idx % 2 == 0 ? "success" : "error"}
                  inputExample={inputExample}
                  key={inputExample}
                  inputExamplesSx={{
                    maxWidth: { xs: "100%", sm: "50%" }
                  }}
                  title={inputExamples.titles[idx]}
                />
              );
            })}
          </List>
        </Box>
        <FormControl sx={{ display: "flex", gap: 4, my: 2 }}>
          <IngredientInput
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            value={ingredientInputText}
          />
          <RecipeTextarea {...ingredientsTextareaProps} />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { xs: "1 1 auto", xs: "1 1 auto", md: "1 1 35%" },
          flexDirection: "column"
        }}
      >
        <IngredientsList
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleKeyDown={handleKeyDown}
          handleToggleDisable={handleToggleDisable}
          ingredients={ingredients}
        />
      </Box>
    </Box>
  );
};

export default RecipeForm;

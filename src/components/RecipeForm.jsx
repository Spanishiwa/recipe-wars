import React, { useState } from "react";
import { CONFIG, MOCK_RES } from "./../config";
import IngredientInput from "./IngredientInput";
import ImageInput from "./ImageInput";
import IngredientsTextarea from "./IngredientsTextarea";
import {
  Box,
  Button,
  Card,
  FormControl,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  Typography
} from "@mui/material";
import { IngredientsList } from "./IngredientsList";
import { ITALIAN_BEEF } from "../config";
import {
  Close,
  Delete,
  Done,
  DoneAll,
  DynamicFeed,
  ManageSearch,
  PostAdd
} from "@mui/icons-material";
import { InputExamples } from "./InputExamples";
import { RecipeTextarea } from "./RecipeTextarea";

const RecipeForm = (props) => {
  const {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeySubmit,
    handleImage,
    handleSubmit,
    handleToggleDisable,
    status,
    values
  } = props;

  const ingredients = values.filter((ingredient) => ingredient.parsed);
  const ingredientInputVal = values.filter(
    (ingredient) => ingredient.id == "ingredient-input"
  )[0];

  const ingredientsTextareaState = values.filter(
    (ingredient) => ingredient.id == "ingredients-textarea"
  )[0];

  const inputExamples = {
    examples: [
      "12 ounces flour",
      "About 1 scoop of flour",
      "3 cups carrots",
      "3 cups peeled and chopped carrots",
      "8.5 oz red chili pepper",
      "8.5 oz Italian giardiniera"
    ],
    titles: [
      "Good input - used exact measurements",
      "Poor input - nonstandard unit of measurement",
      "Good input - ingredient was concise without unnecessary descriptors",
      "Poor input - recipe ingredient preparation methods were included",
      "Good input - a niche ingredient was substituted for a common ingredient",
      "Poor input - too specific to be found in Edamam's database"
    ]
  };

  const ingredientsTextareaProps = {
    error: ingredientsTextareaState.error,
    handleChange: handleChange,
    handleBlur: handleBlur,
    label: "Ingredients & quantities",
    name: "ingredients-textarea",
    placeholder: `Ingredients list with one ingredient & quantity per line e.g.
1/2 cup heavy cream
3 tablespoons butter
1 pound chicken breast`,
    rows: 10,
    status: ingredientsTextareaState.status,
    title: `Enter an ingredients grocery list with one ingredient & quantity per line`,
    value: ingredientsTextareaState.text
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
        onSubmit={(e) => e.preventDefault()}
        sx={{
          display: "flex",
          flex: { xs: "1 1 auto", sm: "1 1 auto", md: "65%" },
          flexDirection: "column",
          rowGap: 2
        }}
      >
        <Typography component="h1" variant="h5" mb={1}>
          <ManageSearch
            fontSize="large"
            sx={{ padding: "0px 8px 8px 0px", verticalAlign: "middle" }}
          />
          Recipe Nutrition
          <Typography component="p" variant="body1">
            Look up the nutritional content of your favorite dishes. Compare
            recipes and substitute ingredients to fit your goals.
          </Typography>
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
        <FormControl
          sx={{
            display: "flex",
            gap: 4,
            margin: {
              xs: "32px 0px 16px 0px",
              sm: "32px 0px 16px 0px",
              md: "32px 0px 0px 0px"
            }
          }}
        >
          <IngredientInput
            error={ingredientInputVal.error}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleKeySubmit={handleKeySubmit}
            handleSubmit={handleSubmit}
            status={ingredientInputVal.status}
            value={ingredientInputVal.text}
          />
          <Typography sx={{ paddingLeft: "32px", textIndent: "-32px" }}>
            <DynamicFeed
              sx={{ verticalAlign: "middle", padding: "8px 8px 8px 0px" }}
            />
            Post multiple ingredients at a time below, but only enter one per
            line.
          </Typography>
          <RecipeTextarea {...ingredientsTextareaProps} />
          <Button
            className="submit"
            disableElevation
            name="ingredients-textarea"
            onKeyDown={handleKeySubmit}
            onClick={handleSubmit}
            size="large"
            startIcon={<PostAdd />}
            sx={{ mt: "-24px", maxWidth: "220px" }}
            type="submit"
            variant="contained"
          >
            POST INGREDIENTS
          </Button>
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
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleKeySubmit={handleKeySubmit}
          handleToggleDisable={handleToggleDisable}
          ingredients={ingredients}
        />
      </Box>
    </Box>
  );
};

export default RecipeForm;

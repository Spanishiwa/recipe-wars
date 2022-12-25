import React from "react";
import IngredientInput from "./IngredientInput";
import { Box, Button, FormControl, List, Typography } from "@mui/material";
import { IngredientsList } from "./IngredientsList";
import {
  Close,
  Done,
  DynamicFeed,
  ManageSearch,
  PostAdd
} from "@mui/icons-material";
import { InputExamples } from "./InputExamples";
import { RecipeTextarea } from "./RecipeTextarea";
import { RecipeTextfield } from "./RecipeTextfield";

const RecipeForm = (props) => {
  const { handlers, ingredients, inputs, titleRef } = props;
  const {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeySubmit,
    handleSubmit,
    handleToggleDisable
  } = handlers;

  const handlersIngredientInput = {
    handleBlur,
    handleChange,
    handleKeySubmit,
    handleSubmit
  };

  const handlersIngredientsList = {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeySubmit,
    handleToggleDisable
  };

  const getInput = (id) => inputs.filter((input) => input.id == id)[0];

  const ingredientInput = getInput("ingredient-input");
  const ingredientsTextarea = getInput("ingredients-textarea");
  const titleInput = getInput("title-input");

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

  const titleProps = {
    error: titleInput.error,
    handleChange: handleChange,
    handleBlur: handleBlur,
    label: "Recipe title",
    name: "title-input",
    placeholder: "e.g. Abuela's dirty beans syrniki",
    inputRef: titleRef,
    status: titleInput.status,
    title: `Enter a concise, cogent, and exciting title`,
    value: titleInput.text
  };

  const ingredientsTextareaProps = {
    error: ingredientsTextarea.error,
    handleChange: handleChange,
    handleBlur: handleBlur,
    label: "Ingredients & quantities",
    name: "ingredients-textarea",
    placeholder: `Ingredients list with one ingredient & quantity per line e.g.
1/2 cup heavy cream
3 tablespoons butter
1 pound chicken breast`,
    rows: 10,
    status: ingredientsTextarea.status,
    title: `Enter an ingredients grocery list with one ingredient & quantity per line`,
    value: ingredientsTextarea.text
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
          <Typography component="p" sx={{ mb: 2 }} variant="body1">
            Look up the nutritional content of your favorite dishes, compare
            recipes, and substitute ingredients to fit your goals. Enter a
            recipe title and at least one ingredient to get started!
          </Typography>
        </Typography>
        <RecipeTextfield {...titleProps} />
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
              xs: "8px 0px 0px 0px",
              sm: "8px 0px 0px 0px",
              md: "8px 0px 0px 0px"
            }
          }}
        >
          <IngredientInput
            handlers={handlersIngredientInput}
            input={ingredientInput}
          />
          <Typography
            sx={{ mt: "-16px", paddingLeft: "32px", textIndent: "-32px" }}
          >
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
          handlers={handlersIngredientsList}
          ingredients={ingredients}
        />
      </Box>
    </Box>
  );
};

export default RecipeForm;

import { Box, Card } from "@mui/material";
import React from "react";
import { RecipeCard } from "./RecipeCard";
import { VerticalStepper } from "./VerticalStepper";

export const Showcase = (props) => {
  const { handlers, recipeStates } = props;

  const {
    handleBlur,
    handleChange,
    handleDelete,
    handleDeleteRecipe,
    handleEdit,
    handleKeySubmit,
    handleToggleDisable,
    handleServingsToggle
  } = handlers;

  const lodashGroupBy = (xs, key) => {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const recipes = lodashGroupBy(recipeStates, "recipeName");
  const recipeNames = Object.keys(recipes).filter(
    (recipeName) => recipeName !== "undefined" && recipeName !== "Untitled"
  );
  const servingsToggle = recipeStates.filter(
    (state) => state.id === "servings-toggle"
  )[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {/* <VerticalStepper></VerticalStepper> */}
      {recipeNames.map((recipeName) => {
        const recipeState = recipes[recipeName].filter(
          (recipe) => recipe.title
        )[0];
        const ingredients = recipes[recipeName].filter(
          (recipe) => recipe.parsed
        );

        return (
          <Card key={recipeName}>
            <RecipeCard
              handlers={handlers}
              ingredients={ingredients}
              isPerServing={servingsToggle[`is${recipeName}PerServing`]}
              recipeState={recipeState}
              selectText={recipeState.selectText}
            />
          </Card>
        );
      })}
    </Box>
  );
};

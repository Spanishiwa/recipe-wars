import React, { useState } from "react";
import IngredientInput from "./IngredientInput";
import "./RecipeForm.css";

function RecipeForm() {
  const [ingredient, setIngredient] = useState("");
  return (
    <form className="recipe-form">
      <title></title>
      <IngredientInput />
    </form>
  );
}

export default RecipeForm;

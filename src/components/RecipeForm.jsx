import React, { useState } from "react";
import IngredientInput from "./IngredientInput";
import "./RecipeForm.css";

function RecipeForm() {
  const [values, setValues] = useState({
    ingredient: "",
    ingredients: "",
  });

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="recipe-form">
      <title>Recipe Analyzer</title>
      <IngredientInput handleChange={handleChange} />
      <span>Ingredient input is {values.ingredient}</span>
    </form>
  );
}

export default RecipeForm;

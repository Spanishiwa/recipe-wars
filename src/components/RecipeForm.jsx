import React, { useState } from "react";
import axios from "axios";
import IngredientInput from "./IngredientInput";
import { CONFIG, MOCK_RES } from "./../config";
import "./RecipeForm.css";

function RecipeForm() {
  const [values, setValues] = useState({
    ingredient: "",
    ingredients: "",
    calories: 0
  });

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }));
  };

  // const handleClick = (e) => {
  //   fetchAPI();
  // };

  // const fetchAPI = () => {
  //   const { accessIngredient, accessRecipe, appId, appKey, params } = CONFIG;
  //   const encodedIngredient = encodeURIComponent(values.ingredient);
  //   // let ingredientUrl = accessIngredient + appId + appKey + params + encodedIngredient;
  //   let recipeUrl = accessRecipe + appId + appKey;
  //   const testytesty = {
  //     title: "Key Lime Pie",
  //     ingr: [
  //       "1½ cups graham cracker crumbs",
  //       "⅓ cup packed light brown sugar",
  //       "Two 14-oz cans sweetened condensed milk",
  //       "1 cup plain Greek yogurt",
  //       "1 tablespoon grated lime zest",
  //       "¾ cup fresh lime juice",
  //       "1 cup cold heavy cream",
  //       "2 tablespoons confectioners' sugar",
  //       "1 teaspoon grated lime zest",
  //       "8 to 10 thin lime slices",
  //       "4 tablespoon butter unsalted"
  //     ]
  //   };
  //   fetch(recipeUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(testytesty)
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setValues((prevValues) => ({ ...prevValues, calories: data.calories }));
  //     })
  //     .catch((err) => {
  //       console.log(`The error code is ${err}`);
  //     });

  // .then((res) => {
  //   return res.json();
  // })
  // .then((data) =>
  //   setValues((prevValues) => ({ ...prevValues, calories: data.calories }))
  // )
  // .catch((err) => {
  //   console.log(`The error code is ${err}`);
  // });
  // };

  return (
    <form className="recipe-form">
      <title>Recipe Analyzer</title>
      <IngredientInput
        /*handleClick={handleClick}*/ handleChange={handleChange}
      />
      <span>Ingredient input is {values.ingredient}</span>
      <span>Calorie response is {values.calories}</span>
    </form>
  );
}

export default RecipeForm;

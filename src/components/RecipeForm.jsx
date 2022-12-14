import React, { useState } from "react";
import { CONFIG, MOCK_RES } from "./../config";
import IngredientInput from "./IngredientInput";
import ImageInput from "./ImageInput";
import IngredientsTextarea from "./IngredientsTextarea";
import { Box, Card, FormControl, Typography } from "@mui/material";
import { IngredientsList } from "./IngredientsList";
import { ITALIAN_BEEF } from "../config";

const RecipeForm = () => {
  const [values, setValues] = useState([{ id: "ingredient-input", text: "" }]);
  // let prevInputState = prevState.filter(prevIngredient => prevIngredient.id == e.target.id);
  // let newInputState = {...prevInputState, e.target.value};

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    const ingredient = values.filter(
      (ingredient) => ingredient.id == inputName
    )[0];

    setValues((prevValues) =>
      prevValues.map((prevIngredient) =>
        prevIngredient.id === ingredient.id
          ? { ...prevIngredient, text: inputValue }
          : prevIngredient
      )
    );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const name = e.target.name || e.currentTarget.name;

    setValues((prevValues) => [
      ...prevValues.filter((prevIngredient) => prevIngredient.id != name)
    ]);
  };

  const handleKeyDown = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name || e.currentTarget.name;
    // code works - ration API calls for testing
    const ingredient = values.filter(
      (ingredient) => ingredient.id == e.target.name
    );
    if (ingredient) fetchAPI(ingredient[0].text);

    // setValues((prevValues) => [
    //   ...prevValues.filter(
    //     (prevIngredient) => prevIngredient.id != e.target.name
    //   ),
    //   { id: e.target.name, text: "" }
    // ]);
    setValues((prevValues) =>
      prevValues.map((prevIngredient) =>
        prevIngredient.id == name ? { id: name, text: "" } : prevIngredient
      )
    );
  };

  const fetchAPI = (text) => {
    const { accessIngredient, accessRecipe, appId, appKey, params } = CONFIG;
    // const encodedIngredient = encodeURIComponent(ingredient);
    // let ingredientUrl =
    // accessIngredient + appId + appKey + params + encodedIngredient;
    const recipeUrl = accessRecipe + appId + appKey;
    const recipePayload = {
      title: "Untitled Recipe",
      ingr: [text]
    };

    fetch(recipeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipePayload)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(`data is ${data}`);
        const { calories, ingredients, totalNutrients, uri } = data;

        const protein = `${totalNutrients.PROCNT.quantity}${totalNutrients.PROCNT.unit} protein`;
        const carbohydrate = `${totalNutrients.CHOCDF.quantity}${totalNutrients.CHOCDF.unit} carbs`;
        const fat = `${totalNutrients.FAT.quantity}${totalNutrients.FAT.unit} fat`;
        const input = ingredients[0].text;
        const parsed = `${ingredients[0].parsed[0].quantity} ${ingredients[0].parsed[0].measure} ${ingredients[0].parsed[0].foodMatch}`;
        const err = ingredients[0].parsed[0].status;
        const flatIngredient = {
          id: uri.slice(-5),
          text: input,
          parsed: parsed,
          calories: calories,
          protein: protein,
          carbohydrate: carbohydrate,
          fat: fat,
          err: err
        };

        setValues((prevValues) => [...prevValues, flatIngredient]);
      })
      .catch((err) => {
        console.log(`The error code is ${err}`);
      });
  };

  const handleImage = (e) => {
    // clean up unused Blob
    if (values.imgSrc) URL.revokeObjectURL(values.imgSrc);
    const imgFile = e.target.files[0];
    setValues((prevValues) => ({
      ...prevValues,
      imgSrc: URL.createObjectURL(imgFile)
    }));
  };

  // const handleSubmit = (e) => {
  //   const inputIngredient = { [e.target.id]: e.target.value };

  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     ingredients: { ...prevValues.ingredients, inputIngredient }
  //   }));
  // };

  let imgUpload;
  if (values.imgSrc) {
    imgUpload = (
      <img
        alt="user uploaded ingredient"
        className="img-upload"
        src={values.imgSrc}
      />
    );
  }

  const setResetIngredientText = (name) => {
    setValues((prevValues) => [
      ...prevValues.filter((prevIngredient) => prevIngredient.id != name),
      { id: name, text: "" }
    ]);
  };

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

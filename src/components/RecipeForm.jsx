import React, { useState } from "react";
import { CONFIG, MOCK_RES } from "./../config";
import IngredientInput from "./IngredientInput";
import ImageInput from "./ImageInput";
import IngredientsTextarea from "./IngredientsTextarea";
import { Box, Card, FormControl, Typography } from "@mui/material";
import { IngredientsList } from "./IngredientsList";
import { ITALIAN_BEEF } from "../config";

const RecipeForm = () => {
  const [values, setValues] = useState([]);

  const handleKeyDown = (e) => {
    const key = e.which || e.keyCode || 0;
    const title = values.title;

    if (key === 13) {
      console.log("loggggy");
      fetchAPI(e.target.value, title);
    }
  };

  // const handleClick = (e) => {
  //   fetchAPI();
  // };

  const fetchAPI = (ingredient, title) => {
    const { accessIngredient, accessRecipe, appId, appKey, params } = CONFIG;
    // const encodedIngredient = encodeURIComponent(ingredient);
    // let ingredientUrl =
    // accessIngredient + appId + appKey + params + encodedIngredient;
    const recipeUrl = accessRecipe + appId + appKey;
    const recipePayload = {
      title: title,
      ingr: [ingredient]
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
        console.log(data);
        // debugger;
        let { calories, ingredients, totalNutrients, uri } = data;

        // calories
        let protein = `${totalNutrients.PROCNT.quantity}${totalNutrients.PROCNT.unit} protein`;
        let carbohydrate = `${totalNutrients.CHOCDF.quantity}${totalNutrients.CHOCDF.unit} carbs`;
        let fat = `${totalNutrients.FAT.quantity}${totalNutrients.FAT.unit} fat`;
        let input = ingredients[0].text;
        let parsed = `${ingredients[0].parsed[0].quantity} ${ingredients[0].parsed[0].measure} ${ingredients[0].parsed[0].foodMatch}`;
        let flatIngredient = {
          id: uri.slice(-5),
          text: input,
          parsed: parsed,
          calories: calories,
          protein: protein,
          carbohydrate: carbohydrate,
          fat: fat
        };
        debugger;
        setValues((prevValues) => [...prevValues, flatIngredient]);
        // setValues((prevValues) => ({
        //   ...prevValues,
        //   [e.target.name]: e.target.value
        // }));
      })
      .catch((err) => {
        console.log(`The error code is ${err}`);
      });

    // .then((res) => {
    //   return res.json();
    // })
    // .then((data) =>
    //   setValues((prevValues) => ({ ...prevValues, calories: data.calories }))
    // )
    // .catch((err) => {
    //   console.log(`The error code is ${err}`);
    // });
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

  // const { ingredients } = ITALIAN_BEEF;

  return (
    <Card component="section" sx={{ maxWidth: "500px", p: 2 }}>
      <Typography component="h1" variant="h4" mb={4}>
        Recipe Wars Analyzer Form
      </Typography>
      <form className="recipe-form">
        <FormControl sx={{ display: "flex", gap: 2 }}>
          <IngredientInput
            /*handleClick={handleClick}*/ handleKeyDown={handleKeyDown}
            handleSubmit={handleKeyDown}
          />
          <IngredientsList ingredients={values} />
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

import React, { useState } from "react";
import { CONFIG, MOCK_RES } from "./../config";
import IngredientInput from "./IngredientInput";
import ImageInput from "./ImageInput";
import IngredientsTextarea from "./IngredientsTextarea";
import { Box, Card, FormControl, Typography } from "@mui/material";

const RecipeForm = () => {
  const [values, setValues] = useState({
    ingredient: "",
    ingredients: "",
    calories: 0,
    imgSrc: ""
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

  const handleImage = (e) => {
    // clean up unused Blob
    if (values.imgSrc) URL.revokeObjectURL(values.imgSrc);
    const imgFile = e.target.files[0];
    setValues((prevValues) => ({
      ...prevValues,
      imgSrc: URL.createObjectURL(imgFile)
    }));
  };

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

  return (
    <Card component="section" sx={{ p: 2 }}>
      <Typography component="h1" variant="h4" mb={4}>
        Recipe Wars Analyzer Form
      </Typography>
      <form className="recipe-form">
        <FormControl sx={{ display: "flex", gap: 2 }}>
          <IngredientInput
            /*handleClick={handleClick}*/ handleChange={handleChange}
          />
          <IngredientsTextarea />
          <ImageInput handleImage={handleImage} />
          {imgUpload}
          <Box component="span">Ingredient input is {values.ingredient}</Box>
          <Box component="span">Calorie response is {values.calories}</Box>
        </FormControl>
      </form>
    </Card>
  );
};

export default RecipeForm;

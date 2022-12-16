import React, { Fragment, useState } from "react";
import Bg_Pattern_Dark from "./assets/Graphcoders_Lil_Fiber.png";
import Bg_Pattern_Light from "./assets/Beige_Paper.png";
import Footer from "./components/Footer";
import RecipeForm from "./components/RecipeForm";
import { Box, Container, useTheme } from "@mui/material";
import NavBar from "./components/NavBar";
import RecipeCard from "./components/RecipeCard";
import MuiStepper from "./components/MuiStepper";
import { areArraysEqual } from "@mui/base";
import { RecipeCardSkeleton } from "./components/RecipeCardSkeleton";
import { CONFIG, ITALIAN_BEEF, MOCK_RES } from "./config";

function App() {
  const [values, setValues] = useState([
    { id: "ingredient-input", text: "" },
    { id: "image-input", imgSrc: "" },
    { id: "title-input", text: "Untitled recipe" },
    { id: "description-textarea", text: "" },
    { id: "recipe-textarea", text: "" },
    { id: "servings-input", text: "1" },
    { id: "servings-toggle", isPerServing: false }
  ]);

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
    // const ingredient = values.filter(
    //   (ingredient) => ingredient.id == e.target.name
    // );
    // if (ingredient) fetchAPI(ingredient[0].text);

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
    const name = e.target.name || e.currentTarget.name;
    const imgFile = e.target.files[0];
    if (!imgFile) return;

    // clean up previous Blob
    const imgState = values.filter(
      (ingredient) => ingredient.id == "image-input"
    );
    if (imgState[0].imgSrc) URL.revokeObjectURL(imgState.imgSrc);

    setValues((prevValues) =>
      prevValues.map((prevIngredient) =>
        prevIngredient.id == name
          ? {
              ...prevIngredient,
              imgSrc: URL.createObjectURL(imgFile),
              imgName: imgFile.name
            }
          : prevIngredient
      )
    );
  };

  const handleToggle = () => {
    setValues((prevValues) =>
      prevValues.map((inputState) =>
        inputState.id == "servings-toggle"
          ? { ...inputState, isPerServing: !inputState.isPerServing }
          : inputState
      )
    );
  };

  // const handleSubmit = (e) => {
  //   const inputIngredient = { [e.target.id]: e.target.value };

  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     ingredients: { ...prevValues.ingredients, inputIngredient }
  //   }));
  // };

  const setResetIngredientText = (name) => {
    setValues((prevValues) => [
      ...prevValues.filter((prevIngredient) => prevIngredient.id != name),
      { id: name, text: "" }
    ]);
  };

  const mode = useTheme().palette.mode;
  const bgPattern = mode === "light" ? Bg_Pattern_Light : Bg_Pattern_Dark;

  const appSx = {
    backgroundColor: "background.default",
    backgroundImage: `url(${bgPattern})`,
    backgroundRepeat: "repeat"
  };

  return (
    <Fragment>
      <Box className="app" sx={appSx}>
        <NavBar />
        <Container
          component="main"
          maxWidth="lg"
          sx={{ display: "flex", py: 2 }}
        >
          {/* <RecipeForm /> */}
          {/* <RecipeCard /> */}
          <MuiStepper
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            handleKeyDown={handleKeyDown}
            handleImage={handleImage}
            handleToggle={handleToggle}
            values={values}
          />
          {/* <RecipeCardSkeleton /> */}
        </Container>
      </Box>
      <Footer />
    </Fragment>
  );
}
export default App;

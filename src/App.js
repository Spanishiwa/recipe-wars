import React, { Fragment, useEffect, useState } from "react";
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
import { MuiAccordion } from "./components/MuiAccordion";

function App() {
  const [values, setValues] = useState([
    {
      id: "ingredient-input",
      text: "",
      isDisabled: false,
      error: false,
      status: " "
    },
    { id: "ingredients-textarea", text: "", status: " " },
    { id: "image-input", imgSrc: "", imgName: "" },
    { id: "title-input", text: "Untitled recipe" },
    { id: "description-textarea", text: "" },
    { id: "recipe-textarea", text: "" },
    { id: "servings-input", text: "1" },
    { id: "servings-toggle", isPerServing: false }
  ]);

  const flattenPayload = (data, name) => {
    let flatIngredientsPayload = [];

    data.ingredients.map((ingredient) => {
      const validId = ingredient.text.replace(/[^a-zA-Z]+/g, "").slice(-15);
      const { nutrients } = ingredient.parsed[0];

      const flatIngredient = {
        id: name || validId,
        text: `${ingredient.parsed[0].quantity} ${ingredient.parsed[0].measure} ${ingredient.parsed[0].foodMatch}`,
        parsed: `${ingredient.parsed[0].quantity} ${ingredient.parsed[0].measure} ${ingredient.parsed[0].foodMatch}`,
        calories: nutrients.ENERC_KCAL.quantity,
        carbohydrate: `${nutrients.CHOCDF.quantity}${nutrients.CHOCDF.unit} carbs`,
        protein: `${nutrients.PROCNT.quantity}${nutrients.PROCNT.unit} protein`,
        fat: `${nutrients.FAT.quantity}${nutrients.FAT.unit} fat`,
        status: " ",
        isDisabled: true,
        error: false
      };

      flatIngredientsPayload.push(flatIngredient);
    });

    return flatIngredientsPayload;
  };

  const fetchAPI = (text, name, id) => {
    const { accessIngredient, accessRecipe, appId, appKey, params } = CONFIG;
    // const encodedIngredient = encodeURIComponent(ingredient);
    // let ingredientUrl =
    // accessIngredient + appId + appKey + params + encodedIngredient;
    const recipeUrl = accessRecipe + appId + appKey;
    const recipePayload = {
      title: "Untitled Recipe",
      ingr: text.split("\n")
    };

    fetch(recipeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipePayload)
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`${res.status} poor input failed to update`);
        }
        return res.json();
      })
      .then((data) => {
        const flatIngredientsPayload = flattenPayload(data, name);

        if (!id.includes("-")) {
          // updating input
          setValues((prevInputs) =>
            prevInputs.map((prevInput) =>
              prevInput.id == id ? flatIngredientsPayload[0] : prevInput
            )
          );
        } else {
          // clearing input generator / error / status
          setValues((prevValues) =>
            prevValues.map((prevIngredient) =>
              prevIngredient.id == id
                ? {
                    ...prevIngredient,
                    text: "",
                    error: false,
                    status: "200: Successfully posted"
                  }
                : prevIngredient
            )
          );
          // appending new input
          setValues((prevInputs) => [
            ...prevInputs.filter((prevInput) => prevInput.id != name),
            ...flatIngredientsPayload
          ]);
        }
      })
      .catch((err) => {
        console.log(
          `err.error ${err.error} and err.message ${err.message} and err ${err}`
        );
        debugger;
        setValues((prevInputs) =>
          prevInputs.map((prevInput) =>
            prevInput.id == id
              ? {
                  ...prevInput,
                  error: true,
                  status: err.message,
                  text: prevInput.parsed
                }
              : prevInput
          )
        );
      });
  };

  const handleBlur = (e) => {
    const name =
      e.target.getAttribute("name") || e.currentTarget.getAttribute("name");

    setValues((prevValues) =>
      prevValues.map((prevIngredient) =>
        prevIngredient.id == name
          ? {
              ...prevIngredient,
              error: false,
              status: " "
            }
          : prevIngredient
      )
    );
  };

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
    const name =
      e.target.getAttribute("name") || e.currentTarget.getAttribute("name");

    setValues((prevValues) => [
      ...prevValues.filter((prevIngredient) => prevIngredient.id != name)
    ]);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const name =
      e.target.getAttribute("name") || e.currentTarget.getAttribute("name");

    const ingredient = values.filter((ingredient) => ingredient.id == name);
    if (ingredient) fetchAPI(ingredient[0].text, name, name);
  };

  const handleKeyDelete = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      e.preventDefault();
      e.stopPropagation();
      handleDelete(e);
    }
  };

  const handleKeySubmit = (e) => {
    const key = e.which || e.keyCode || 0;
    const isDelete =
      e.target.classList.contains("delete") ||
      e.currentTarget.classList.contains("delete");
    const isSubmit =
      e.target.classList.contains("submit") ||
      e.currentTarget.classList.contains("submit");

    if (key === 13 && isDelete) {
      e.stopPropagation();
      e.preventDefault();
      handleDelete(e);
    } else if (key === 13 && isSubmit) {
      e.stopPropagation();
      e.preventDefault();
      handleSubmit(e);
    }
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

  const handleServingsToggle = () => {
    setValues((prevValues) =>
      prevValues.map((inputState) =>
        inputState.id == "servings-toggle"
          ? {
              ...inputState,
              isPerServing: !inputState.isPerServing
            }
          : inputState
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name =
      e.target.getAttribute("name") || e.currentTarget.getAttribute("name");
    // code works - ration API calls for testing
    const ingredient = values.filter((ingredient) => ingredient.id == name);

    if (ingredient) fetchAPI(ingredient[0].text, null, name);
  };

  const handleToggleDisable = (e) => {
    e.preventDefault();
    const name =
      e.target.getAttribute("name") || e.currentTarget.getAttribute("name");

    setValues((prevStates) =>
      prevStates.map((prevState) =>
        prevState.id == name ? { ...prevState, isDisabled: false } : prevState
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

  // const setResetIngredientText = (name) => {
  //   setValues((prevValues) => [
  //     ...prevValues.filter((prevIngredient) => prevIngredient.id != name),
  //     { id: name, text: "" }
  //   ]);
  // };

  const mode = useTheme().palette.mode;
  const bgPattern = mode === "light" ? Bg_Pattern_Light : Bg_Pattern_Dark;
  const bgColor = mode === "light" ? "#F5F7FA" : "#121212";
  const appSx = {
    backgroundColor: "background.default",
    backgroundImage: `url(${bgPattern})`,
    backgroundRepeat: "repeat"
  };

  useEffect(() => {
    // fix rubber banding scroll
    document.body.style.backgroundColor = bgColor;
    document.body.style.backgroundImage = `url(${bgPattern})`;
    document.body.style.backgroundRepeat = "repeat";

    return () => {
      document.body.style.backgroundColor = null;
      document.body.style.backgroundImage = null;
      document.body.style.backgroundRepeat = null;
    };
  }, [mode]);

  return (
    <Fragment>
      <Box className="app" sx={appSx}>
        <NavBar />
        <Container
          component="main"
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "center", py: 2 }}
        >
          {/* <MuiStepper
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleKeyDelete={handleKeyDelete}
            handleKeySubmit={handleKeySubmit}
            handleImage={handleImage}
            handleServingsToggle={handleServingsToggle}
            handleSubmit={handleSubmit}
            handleToggleDisable={handleToggleDisable}
            values={values}
          /> */}
          <MuiAccordion />
        </Container>
      </Box>
      <Footer />
    </Fragment>
  );
}
export default App;

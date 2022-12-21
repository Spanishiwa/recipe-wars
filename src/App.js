import React, { Fragment, useEffect, useState } from "react";
import Bg_Pattern_Dark from "./assets/Graphcoders_Lil_Fiber.png";
import Bg_Pattern_Light from "./assets/Beige_Paper.png";
import Footer from "./components/Footer";
import RecipeForm from "./components/RecipeForm";
import { Box, Container, useTheme } from "@mui/material";
import NavBar from "./components/NavBar";
import RecipeCard from "./components/RecipeCard";
import MuiStepper from "./components/MuiStepper";
import { RecipeCardSkeleton } from "./components/RecipeCardSkeleton";
import {
  CHEESY_CORN,
  CONFIG,
  ITALIAN_BEEF,
  KEY_LIME_PIE,
  MOCK_RES
} from "./config";
import { Faq } from "./components/Faq";
import { Route, Routes } from "react-router-dom";
import { Showcase } from "./components/Showcase";

function App() {
  const [values, setValues] = useState([
    {
      id: "ingredient-input",
      text: "",
      isDisabled: false,
      error: false,
      status: " "
    },
    { id: "ingredients-textarea", text: "", status: " ", error: false },
    { id: "image-input", imgSrc: "", imgName: "" },
    { id: "title-input", text: "Untitled recipe" },
    { id: "description-textarea", text: "", status: " ", error: false },
    { id: "recipe-textarea", text: "", status: " ", error: false },
    { id: "servings-input", text: "1" },
    { id: "servings-toggle", isPerServing: true },
    { id: "isRequesting", isRequesting: false },
    ...KEY_LIME_PIE.ingredients,
    ...CHEESY_CORN.ingredients,
    ...ITALIAN_BEEF.ingredients
  ]);

  const flattenPayload = (data, name) => {
    let flatIngredientsPayload = [];

    data.ingredients.map((ingredient) => {
      const recipeName = ingredient.recipeName || "custom";
      const validId = (recipeName + ingredient.text)
        .replace(/[^a-zA-Z]+/g, "")
        .slice(-50);
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
        error: false,
        recipeName: recipeName
      };

      flatIngredientsPayload.push(flatIngredient);
    });

    return flatIngredientsPayload;
  };

  const fetchAPI = (text, name, id) => {
    const { accessRecipe, appId, appKey, params } = CONFIG;
    const recipeUrl = accessRecipe + appId + appKey;
    const recipePayload = {
      title: "Untitled Recipe",
      ingr: text.split("\n").filter((s) => s.length)
    };

    if (values.filter((state) => state.id === "isRequesting")[0].isRequesting) {
      return;
    } else {
      setValues((prevStates) =>
        prevStates.map((prevState) =>
          prevState.id === "isRequesting"
            ? { ...prevState, isRequesting: true }
            : prevState
        )
      );
    }

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
          // editing/updating input
          setValues((prevInputs) =>
            prevInputs.map((prevInput) =>
              prevInput.id == id
                ? {
                    ...flatIngredientsPayload[0],
                    recipeName: prevInput.recipeName
                  }
                : prevInput.id == "isRequesting"
                ? { ...prevInput, isRequesting: false }
                : prevInput
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
                    status: "Successfully posted"
                  }
                : prevIngredient.id == "isRequesting"
                ? { ...prevIngredient, isRequesting: false }
                : prevIngredient
            )
          );
          // appending new input
          setValues((prevInputs) => [
            ...prevInputs.map((prevInput) =>
              prevInput.id == "isRequesting"
                ? { ...prevInput, isRequesting: false }
                : prevInput.id != name
                ? prevInput
                : null
            ),
            ...flatIngredientsPayload
          ]);
        }
      })
      .catch((err) => {
        setValues((prevInputs) =>
          prevInputs.map((prevInput) =>
            prevInput.id == id
              ? {
                  ...prevInput,
                  error: true,
                  status: err.message,
                  text: prevInput.parsed
                }
              : prevInput.id == "isRequesting"
              ? { ...prevInput, isRequesting: false }
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

  const mode = useTheme().palette.mode;
  const bgPattern = mode === "light" ? Bg_Pattern_Light : Bg_Pattern_Dark;
  const bgColor = mode === "light" ? "#F5F7FA" : "#121212";
  const appSx = {
    backgroundColor: "background.default",
    backgroundImage: `url(${bgPattern})`,
    backgroundRepeat: "repeat",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    width: "100%"
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
  }, [mode, bgColor, bgPattern]);

  const handlersAndState = {
    handleBlur: handleBlur,
    handleChange: handleChange,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleKeyDelete: handleKeyDelete,
    handleKeySubmit: handleKeySubmit,
    handleImage: handleImage,
    handleServingsToggle: handleServingsToggle,
    handleSubmit: handleSubmit,
    handleToggleDisable: handleToggleDisable,
    values: values
  };

  return (
    <Fragment>
      <NavBar />
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "32px 0px", sm: "32px 16px" }
        }}
      >
        <Box className="app" sx={appSx}>
          <Routes>
            <Route
              path="/recipe-wars"
              element={<Showcase {...handlersAndState} />}
            ></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route
              path="/start"
              element={<MuiStepper {...handlersAndState} />}
            ></Route>
          </Routes>
        </Box>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default App;

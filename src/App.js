import React, { Fragment, useEffect, useState } from "react";
import Bg_Pattern_Dark from "./assets/Graphcoders_Lil_Fiber.png";
import Bg_Pattern_Light from "./assets/Beige_Paper.png";
import Footer from "./components/Footer";
import { Box, Container, useTheme } from "@mui/material";
import NavBar from "./components/NavBar";
import MuiStepper from "./components/MuiStepper";
import { CONFIG } from "./config";
import { Faq } from "./components/Faq";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Showcase } from "./components/Showcase";
import {
  INIT_INGREDIENT_INPUT,
  INIT_INGREDIENTS_TEXTAREA,
  INIT_IMAGE_INPUT,
  INIT_TITLE_INPUT,
  INIT_DESCRIPTION_TEXTAREA,
  INIT_RECIPE_TEXTAREA,
  INIT_SERVINGS_INPUT,
  INIT_SERVINGS_TOGGLE,
  INIT_PHOTOS_SELECT_INPUT,
  INIT_KEY_LIME_PIE,
  INIT_CHEESY_CORN,
  INIT_ITALIAN_BEEF
} from "./Util";

function App() {
  const navigate = useNavigate();
  const [values, setValues] = useState([
    INIT_INGREDIENT_INPUT,
    INIT_INGREDIENTS_TEXTAREA,
    INIT_IMAGE_INPUT,
    INIT_TITLE_INPUT,
    INIT_DESCRIPTION_TEXTAREA,
    INIT_RECIPE_TEXTAREA,
    INIT_SERVINGS_INPUT,
    INIT_SERVINGS_TOGGLE,
    INIT_PHOTOS_SELECT_INPUT,
    { id: "isRequesting", isRequesting: false },
    ...INIT_KEY_LIME_PIE,
    ...INIT_CHEESY_CORN,
    ...INIT_ITALIAN_BEEF
  ]);

  const flattenPayload = (data, name) => {
    return data.ingredients.map((ingredient) => {
      const recipeName = ingredient.recipeName || "Untitled";
      const validId = (recipeName + ingredient.text)
        .replace(/[^a-zA-Z]+/g, "")
        .slice(-50);
      const { nutrients } = ingredient.parsed[0];

      return {
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
    });
  };

  const fetchAPI = (text, name, id) => {
    const { accessRecipe, appId, appKey } = CONFIG;
    const recipeUrl = accessRecipe + appId + appKey;
    const recipePayload = {
      title: "Untitled",
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
            prevInputs.map((prevInput) => {
              if (prevInput.id === id) {
                return {
                  ...flatIngredientsPayload[0],
                  recipeName: prevInput.recipeName
                };
              }

              if (prevInput.id === "isRequesting") {
                return { ...prevInput, isRequesting: false };
              }

              return prevInput;
            })
          );
        } else {
          // clearing input generator / error / status

          setValues((prevValues) =>
            prevValues.map((prevIngredient) => {
              if (prevIngredient.id === id) {
                return {
                  ...prevIngredient,
                  text: "",
                  error: false,
                  status: "Successfully posted"
                };
              }

              if (prevIngredient.id === "isRequesting") {
                return { ...prevIngredient, isRequesting: false };
              }

              return prevIngredient;
            })
          );
          // appending new input

          setValues((prevInputs) => [
            ...prevInputs.map((prevInput) => {
              if (prevInput.id === "isRequesting") {
                return { ...prevInput, isRequesting: false };
              }

              if (prevInput.id !== name) {
                return prevInput;
              }

              return prevInput;
            }),
            ...flatIngredientsPayload
          ]);
        }
      })
      .catch((err) => {
        setValues((prevInputs) =>
          prevInputs.map((prevInput) => {
            if (prevInput.id === id) {
              return {
                ...prevInput,
                error: true,
                status: err.message,
                text: prevInput.parsed
              };
            }

            if (prevInput.id === "isRequesting") {
              return { ...prevInput, isRequesting: false };
            }

            return prevInput;
          })
        );
      });
  };

  const handleBlur = (e) => {
    const name =
      e.target.getAttribute("name") || e.currentTarget.getAttribute("name");

    setValues((prevValues) =>
      prevValues.map((prevIngredient) =>
        prevIngredient.id === name
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
      (ingredient) => ingredient.id === inputName
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

    setValues((prevValues) =>
      prevValues.filter((prevValue) => prevValue.id !== name)
    );
  };

  const handleDeleteRecipe = (e) => {
    const recipeName =
      e.target.getAttribute("data-recipe-name") ||
      e.currentTarget.getAttribute("data-recipe-name");

    setValues((prevValues) =>
      prevValues.filter((prevValue) => prevValue.recipeName !== recipeName)
    );
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const name =
      e.target.getAttribute("name") || e.currentTarget.getAttribute("name");

    const ingredient = values.filter((ingredient) => ingredient.id === name);
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
    const imgInput = values.filter((input) => input.id === "image-input")[0];

    if (imgInput?.imgSrc) URL.revokeObjectURL(imgInput.imgSrc);

    setValues((prevValues) =>
      prevValues.map((prevIngredient) =>
        prevIngredient.id === name
          ? {
              ...prevIngredient,
              imgSrc: URL.createObjectURL(imgFile),
              imgName: imgFile.name
            }
          : prevIngredient
      )
    );
  };

  const handleReset = (e) => {
    setValues((prevStates) =>
      prevStates
        .filter((prevState) => prevState.recipeName !== "Untitled")
        .map((prevStateFiltered) => {
          switch (prevStateFiltered.id) {
            case "ingredient-input":
              return INIT_INGREDIENT_INPUT;
            case "ingredients-textarea":
              return INIT_INGREDIENTS_TEXTAREA;
            case "image-input":
              return INIT_IMAGE_INPUT;
            case "title-input":
              return INIT_TITLE_INPUT;
            case "description-textarea":
              return INIT_DESCRIPTION_TEXTAREA;
            case "recipe-textarea":
              return INIT_RECIPE_TEXTAREA;
            case "servings-input":
              return INIT_SERVINGS_INPUT;
            case "servings-toggle":
              return INIT_SERVINGS_TOGGLE;
            case "photos-select-input":
              return INIT_PHOTOS_SELECT_INPUT;
            default:
              return prevStateFiltered;
          }
        })
    );
  };

  const handleSelect = (e) => {
    const value = e.target.value || e.currentTarget.value || " ";
    setValues((prevStates) =>
      prevStates.map((prevState) =>
        prevState.id === "photos-select-input"
          ? { ...prevState, text: value }
          : prevState
      )
    );
  };

  const handleServingsToggle = (e) => {
    const recipeName =
      e.target.getAttribute("data-recipe-name") ||
      e.currentTarget.getAttribute("data-recipe-name");

    setValues((prevValues) =>
      prevValues.map((inputState) =>
        inputState.id === "servings-toggle"
          ? {
              ...inputState,
              [`is${recipeName}PerServing`]:
                !inputState[`is${recipeName}PerServing`]
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
    const ingredient = values.filter((ingredient) => ingredient.id === name);

    if (ingredient) fetchAPI(ingredient[0].text, null, name);
  };

  const handleSubmitRecipe = (e) => {
    // get input values
    setValues((prevStates) => {
      const recipeState = prevStates.reduce(
        (accum, input) => {
          switch (input.id) {
            case "image-input":
              accum.imgSrc = input.imgSrc;
            case "title-input":
              accum.title = input.text;
              accum.id = input.text;
            case "description-textarea":
              accum.description = input.text;
            case "recipe-textarea":
              accum.instructions = input.text;
            case "servings-input":
              accum.servings = input.text;
            case "photos-select-input":
              accum.selectText = input.text;
            default:
              return accum;
          }
        },
        {
          imgSrc: "",
          title: "",
          description: "",
          instructions: "",
          servings: 1,
          id: "",
          selectText: ""
        }
      );

      const recipeName = recipeState.title
        .replace(/[^a-zA-Z]+/g, "")
        .slice(-50);

      return [
        {
          // prepend recipe details
          ...recipeState,
          title: recipeState.title,
          id: recipeState.id.replace(/[^a-zA-Z]+/g, "").slice(-50),
          recipeName: recipeState.id.replace(/[^a-zA-Z]+/g, "").slice(-50)
        },
        ...prevStates.map((prevState) => {
          // update all noRecipeName ingredients
          if (prevState.recipeName === "Untitled") {
            return {
              ...prevState,
              recipeName: recipeName
            };
          }

          switch (prevState.id) {
            case "ingredient-input":
              return INIT_INGREDIENT_INPUT;
            case "ingredients-textarea":
              return INIT_INGREDIENTS_TEXTAREA;
            case "image-input":
              return INIT_IMAGE_INPUT;
            case "title-input":
              return INIT_TITLE_INPUT;
            case "description-textarea":
              return INIT_DESCRIPTION_TEXTAREA;
            case "recipe-textarea":
              return INIT_RECIPE_TEXTAREA;
            case "servings-input":
              return INIT_SERVINGS_INPUT;
            case "servings-toggle":
              return {
                ...prevState,
                isUntitledPerServing: true,
                [`is${recipeName}PerServing`]: prevState["isUntitledPerServing"]
              };
            case "photos-select-input":
              return INIT_PHOTOS_SELECT_INPUT;
            default:
              return prevState;
          }
        })
      ];
    });

    navigate("/recipe-wars");
  };

  const handleToggleDisable = (e) => {
    e.preventDefault();
    const name =
      e.target.getAttribute("name") || e.currentTarget.getAttribute("name");

    setValues((prevStates) =>
      prevStates.map((prevState) =>
        prevState.id === name ? { ...prevState, isDisabled: false } : prevState
      )
    );
  };

  const setInputError = (id, msg) => {
    setValues((prevValues) =>
      prevValues.map((prevValue) => {
        if (prevValue.id === id) {
          return { ...prevValue, error: true, status: msg };
        } else {
          return prevValue;
        }
      })
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

  const handlers = {
    handleBlur: handleBlur,
    handleChange: handleChange,
    handleDelete: handleDelete,
    handleDeleteRecipe: handleDeleteRecipe,
    handleEdit: handleEdit,
    handleKeyDelete: handleKeyDelete,
    handleKeySubmit: handleKeySubmit,
    handleImage: handleImage,
    handleReset: handleReset,
    handleServingsToggle: handleServingsToggle,
    handleSelect: handleSelect,
    handleSubmit: handleSubmit,
    handleSubmitRecipe: handleSubmitRecipe,
    handleToggleDisable: handleToggleDisable
  };

  const inputs = values.filter((value) => value.isInput);

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
              element={<Showcase handlers={handlers} recipeStates={values} />}
            ></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route
              path="/start"
              element={
                <MuiStepper
                  handlers={handlers}
                  inputs={inputs}
                  recipeStates={values}
                  setInputError={setInputError}
                />
              }
            ></Route>
          </Routes>
        </Box>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default App;

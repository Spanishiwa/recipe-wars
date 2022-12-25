import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import RecipeCard from "./RecipeCard";
import { Card } from "@mui/material";
import Bg_Pattern_Light from "../assets/Back_Pattern.png";
import Bg_Pattern_Dark from "../assets/Debut_Dark.png";
import RecipeForm from "./RecipeForm";
import { RecipeFormOptional } from "./RecipeFormOptional";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AssignmentTurnedIn, Delete } from "@mui/icons-material";

const steps = [
  {
    label: "List of recipe ingredients",
    description: `Enter all the ingredients and their quantities until your ingredients
    recipe list is complete. Specifically only enter the ingredient and quantity. Adding
    descriptions like finely chopped, steamed, blanched, etc will cause the parser to fail. `
  },
  {
    label: "Customize your recipe",
    description: `Add all of the details necessary to transform your ingredients list into the final
      cooked product. A good title, description, and image showing the final product will
      help. And of course, a detailed step by step recipe instructions section.`
  },
  {
    label: "Calculate the nutrients",
    description: `Check the nutrient profile of your recipe by total or per serving. Edit
    and substitute any ingredients and construct the perfect recipe.`
  }
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TextMobileStepper(props) {
  const { handlers, inputs, recipeStates } = props;

  const {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleImage,
    handleKeyDelete,
    handleKeySubmit,
    handleSubmit,
    handleSubmitRecipe,
    handleToggleDisable,
    handleReset,
    handleSelect,
    handleServingsToggle
  } = handlers;

  const handlersRecipeForm = {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeySubmit,
    handleSubmit,
    handleToggleDisable
  };

  const handlersRecipeFormOptional = {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleImage,
    handleKeyDelete,
    handleKeySubmit,
    handleSelect,
    handleToggleDisable
  };

  const handlersRecipeCard = {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeyDelete,
    handleKeySubmit,
    handleToggleDisable,
    handleServingsToggle
  };

  const noRecipeNameIngredients = recipeStates.filter(
    (recipe) => recipe.recipeName === "Untitled"
  );

  const inputValues = (inputs) => {
    return inputs.reduce(
      (accum, input) => {
        switch (input.id) {
          case "image-input":
            accum.imgSrc = input.imgSrc;
          case "title-input":
            accum.title = input.text;
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
        selectText: ""
      }
    );
  };

  const recipeState = inputValues(inputs);
  const isPerServing = inputs.filter(
    (input) => input.id === "servings-toggle"
  )[0]["isUntitledPerServing"];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const [open, setOpen] = React.useState(false);
  const isValidIngredientsList = recipeStates.filter(
    (inputState) => inputState.recipeName === "Untitled"
  )[0];

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleNext = () => {
    if (isValidIngredientsList) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      handleClick();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const actionSx =
    theme.palette.mode === "light"
      ? {
          backgroundColor: "primary.light",
          backgroundImage: `url(${Bg_Pattern_Light})`
        }
      : {
          backgroundColor: "background.default",
          backgroundImage: `url(${Bg_Pattern_Dark})`
        };

  const stepView = (step) => {
    switch (step) {
      case 0:
        return (
          <RecipeForm
            handlers={handlersRecipeForm}
            ingredients={noRecipeNameIngredients}
            inputs={inputs}
          />
        );
      case 1:
        return (
          <RecipeFormOptional
            handlers={handlersRecipeFormOptional}
            ingredients={noRecipeNameIngredients}
            inputs={inputs}
          />
        );
      case 2:
        return (
          <RecipeCard
            handlers={handlersRecipeCard}
            ingredients={noRecipeNameIngredients}
            isPerServing={isPerServing}
            recipeState={inputValues(inputs)}
            selectText={recipeState.selectText}
          />
        );
      default:
        return (
          <RecipeForm
            handlers={handlersRecipeForm}
            ingredients={noRecipeNameIngredients}
            inputs={inputs}
          />
        );
    }
  };

  return (
    <Card sx={{ flexGrow: 1, height: "100%", maxWidth: { xs: 1200 } }}>
      <Box sx={{ maxWidth: { xs: 1200 }, width: "100%" }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Your ingredients list is empty
          </Alert>
        </Snackbar>
        {stepView(activeStep)}
      </Box>
      <Box mt={2}>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          sx={{ p: 2, ...actionSx }}
          position="static"
          activeStep={activeStep}
          nextButton={
            activeStep == maxSteps - 1 ? (
              <Button
                disableElevation
                startIcon={<AssignmentTurnedIn />}
                size="large"
                onClick={handleSubmitRecipe}
                variant="contained"
              >
                SUBMIT
              </Button>
            ) : (
              <Button
                disableElevation
                disabled={activeStep === maxSteps - 1}
                onClick={handleNext}
                size="large"
                variant="contained"
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            )
          }
          backButton={
            activeStep == 0 ? (
              <Button
                startIcon={<Delete />}
                onClick={handleReset}
                size="large"
                type="button"
                variant="outlined"
              >
                RESET
              </Button>
            ) : (
              <Button
                size="large"
                onClick={handleBack}
                disabled={activeStep === 0}
                variant="outlined"
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            )
          }
        />
      </Box>
    </Card>
  );
}

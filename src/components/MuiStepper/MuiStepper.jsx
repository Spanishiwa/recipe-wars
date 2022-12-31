import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Card } from '@mui/material';
import Bg_Pattern_Light from '../../assets/Back_Pattern.png';
import Bg_Pattern_Dark from '../../assets/Debut_Dark.png';
import RecipeForm from '../RecipeForm/RecipeForm';
import { RecipeFormOptional } from '../RecipeFormOptional/RecipeFormOptional';
import { AssignmentTurnedIn, Delete } from '@mui/icons-material';
import { MuiSnackbar } from '../MuiSnackbar/MuiSnackbar';
import PropTypes from 'prop-types';

const steps = [
  {
    label: 'List of recipe ingredients',
    description: `Enter all the ingredients and their quantities until your ingredients
    recipe list is complete. Specifically only enter the ingredient and quantity. Adding
    descriptions like finely chopped, steamed, blanched, etc will cause the parser to fail. `,
  },
  {
    label: 'Customize your recipe',
    description: `Add all of the details necessary to transform your ingredients list into the final
      cooked product. A good title, description, and image showing the final product will
      help. And of course, a detailed step by step recipe instructions section.`,
  },
  {
    label: 'Calculate the nutrients',
    description: `Check the nutrient profile of your recipe by total or per serving. Edit
    and substitute any ingredients and construct the perfect recipe.`,
  },
];

export default function MuiStepper(props) {
  const { handlers, inputs, recipeStates, setInputError } = props;

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
    handleServingsToggle,
  } = handlers;

  const handlersRecipeForm = {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeySubmit,
    handleSubmit,
    handleToggleDisable,
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
    handleToggleDisable,
  };

  const handlersRecipeCard = {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeyDelete,
    handleKeySubmit,
    handleToggleDisable,
    handleServingsToggle,
  };

  const noRecipeNameIngredients = recipeStates.filter(
    (recipe) => recipe.recipeName === 'Untitled'
  );

  const inputValues = (inputs) => {
    return inputs.reduce(
      (accum, input) => {
        switch (input.id) {
          case 'image-input':
            accum.imgSrc = input.imgSrc;
          //falls through
          case 'title-input':
            accum.title = input.text;
          //falls through
          case 'description-textarea':
            accum.description = input.text;
          //falls through
          case 'recipe-textarea':
            accum.instructions = input.text;
          //falls through
          case 'servings-input':
            accum.servings = input.text;
          //falls through
          case 'photos-select-input':
            accum.selectText = input.text;
          //falls through
          default:
            return accum;
        }
      },
      {
        imgSrc: '',
        title: '',
        description: '',
        instructions: '',
        servings: 1,
        selectText: '',
      }
    );
  };

  const recipeState = inputValues(inputs);
  const isPerServing = inputs.filter(
    (input) => input.id === 'servings-toggle'
  )[0]['isUntitledPerServing'];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const [snackbarState, setSnackbarState] = React.useState({
    message: `Title is "Untitled" or empty`,
    open: false,
    severity: 'error',
  });

  const showAlert = (message, severity) => {
    setSnackbarState((prevState) => ({
      ...prevState,
      message: message,
      open: true,
      severity: severity,
    }));
  };

  const isValidIngredientsList = noRecipeNameIngredients.length > 0;
  const isValidTitle =
    recipeState.title !== '' && recipeState.title !== 'Untitled';

  const handleResetClick = () => {
    setSnackbarState((prevState) => ({
      ...prevState,
      message: 'Resetting recipe',
      open: true,
      severity: 'success',
    }));

    handleReset();
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  const titleRef = React.useRef(null);

  const handleNext = () => {
    let errorMessage = '';
    if (isValidIngredientsList && isValidTitle) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      return;
    }

    if (!isValidIngredientsList) {
      errorMessage = `Ingredients list is empty`;
    }

    if (!isValidTitle) {
      errorMessage = `Title can't be "Untitled" or empty`;

      setInputError('title-input', errorMessage);
      titleRef.current.focus();
    }

    setSnackbarState((prevState) => ({
      ...prevState,
      message: errorMessage,
      open: true,
      severity: 'error',
    }));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const actionSx =
    theme.palette.mode === 'light'
      ? {
          backgroundColor: 'primary.light',
          backgroundImage: `url(${Bg_Pattern_Light})`,
        }
      : {
          backgroundColor: 'background.default',
          backgroundImage: `url(${Bg_Pattern_Dark})`,
        };

  const stepView = (step) => {
    switch (step) {
      case 0:
        return (
          <RecipeForm
            handlers={handlersRecipeForm}
            ingredients={noRecipeNameIngredients}
            inputs={inputs}
            showAlert={showAlert}
            titleRef={titleRef}
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
            titleRef={titleRef}
          />
        );
    }
  };

  return (
    <Card sx={{ flexGrow: 1, height: '100%', maxWidth: { xs: 1200 } }}>
      <Box sx={{ maxWidth: { xs: 1200 }, width: '100%' }}>
        <MuiSnackbar
          handleClose={handleSnackbarClose}
          message={snackbarState.message}
          open={snackbarState.open}
          severity={snackbarState.severity}
        />
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
                {theme.direction === 'rtl' ? (
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
                name="reset-recipe"
                onClick={handleResetClick}
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
                {theme.direction === 'rtl' ? (
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

MuiStepper.propTypes = {
  handlers: PropTypes.shape({
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
    handleImage: PropTypes.func,
    handleKeyDelete: PropTypes.func,
    handleKeySubmit: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleSubmitRecipe: PropTypes.func,
    handleToggleDisable: PropTypes.func,
    handleReset: PropTypes.func,
    handleSelect: PropTypes.func,
    handleServingsToggle: PropTypes.func,
  }).isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeStates: PropTypes.arrayOf(PropTypes.object).isRequired,
  setInputError: PropTypes.func.isRequired,
};

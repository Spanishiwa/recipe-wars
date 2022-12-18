import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import RecipeCard from "./RecipeCard";
import { Card } from "@mui/material";
import Bg_Pattern_Light from "../assets/Back_Pattern.png";
import Bg_Pattern_Dark from "../assets/Debut_Dark.png";
import { bgcolor } from "@mui/system";
import RecipeForm from "./RecipeForm";
import { RecipeCardSkeleton } from "./RecipeCardSkeleton";
import { RecipeFormOptional } from "./RecipeFormOptional";

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

export default function TextMobileStepper(props) {
  const {
    handleChange,
    handleDelete,
    handleEdit,
    handleKeyDelete,
    handleKeySubmit,
    handleImage,
    handleServingsToggle,
    handleSubmit,
    handleToggleDisable,
    values
  } = props;

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
        return <RecipeForm {...props} />;
      case 1:
        return <RecipeFormOptional {...props} />;
      case 2:
        return <RecipeCard {...props} />;
      default:
        return <RecipeForm {...props} />;
    }
  };

  return (
    <Card sx={{ flexGrow: 1, maxWidth: { xs: 900 } }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default"
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper> */}
      <Box sx={{ maxWidth: { xs: 1200 }, width: "100%" }}>
        {stepView(activeStep)}
      </Box>
      <Box mt={2}>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          sx={{ ...actionSx }}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Card>
  );
}

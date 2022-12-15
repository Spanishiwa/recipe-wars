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
import { RecipeFormOptional } from "../RecipeFormOptional";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords."
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
  }
];

export default function TextMobileStepper(props) {
  const {
    handleSubmit,
    handleChange,
    handleDelete,
    handleKeyDown,
    handleImage,
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
    <Card sx={{ flexGrow: 1, maxWidth: { xs: 320, sm: 600, md: 800 } }}>
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
      <Box sx={{ maxWidth: { xs: 320, sm: 600, md: 800 }, width: "100%" }}>
        {stepView(activeStep)}
      </Box>
      <Box>
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

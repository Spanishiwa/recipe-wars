import StockBeefImage from "../assets/Italian_Beef.jpeg";
import {
  Box,
  Button,
  CardMedia,
  FormControlLabel,
  FormGroup,
  Icon,
  SvgIcon,
  Switch,
  Typography
} from "@mui/material";
import React, { Fragment } from "react";
import ImageModal from "./ImageModal";
import { CalorieSvg } from "./CalorieSvg";
import { CarbohydrateSvg } from "./CarbohydrateSvg";
import { ProteinSvg } from "./ProteinSvg";
import { FatSvg } from "./FatSvg";
import { FoodBank, Label } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { ServingsSwitch } from "./ServingsSwitch";
import DefaultImg from "../assets/Default_Img.jpeg";
import ForkKnife from "../assets/Fork_Knife.jpeg";
import Grains from "../assets/Grains.jpeg";
import Vegetables from "../assets/Colorful_Vegetables.jpeg";
import Charcuterie from "../assets/Charcuterie_Board.webp";
import Cookies from "../assets/Cocoa_Cookies.jpeg";

export const RecipeImage = (props) => {
  const [state, setState] = React.useState({
    isOpen: false
  });

  const handleClickOpen = () => {
    setState((prevState) => ({ ...prevState, isOpen: true }));
  };
  const handleClose = () => {
    setState((prevState) => ({ ...prevState, isOpen: false }));
  };

  const svgContainerSx = {
    display: "flex",
    flexWrap: "wrap",
    columnGap: { xs: "6px", md: "8px" },
    justifyContent: "space-between",
    pb: "16px",
    rowGap: "16px"
  };

  const {
    description,
    handleServingsToggle,
    imgSrc,
    recipeName,
    servings,
    title,
    values
  } = props;
  const recipe = recipeName || "Untitled";

  const sumNutrients = (values) => {
    const ingredients = values.filter((ingr) => ingr.recipeName === recipe);
    return ingredients.reduce(
      (accum, ingr) => {
        accum.calories = parseFloat(accum.calories) + parseFloat(ingr.calories);
        accum.carbohydrate =
          parseFloat(accum.carbohydrate) + parseFloat(ingr.carbohydrate);
        accum.protein = parseFloat(accum.protein) + parseFloat(ingr.protein);
        accum.fat = parseFloat(accum.fat) + parseFloat(ingr.fat);

        return accum;
      },
      { calories: 0, carbohydrate: 0, protein: 0, fat: 0 }
    );
  };

  const inputValues = (state) => {
    return state.reduce(
      (accum, inputState) => {
        switch (inputState.id) {
          case "image-input":
            accum.imageImgSrc = inputState.imgSrc;
          case "title-input":
            accum.titleText = inputState.text;
          case "description-textarea":
            accum.descriptionText = inputState.text;
          case "servings-input":
            accum.servingsText = inputState.text;
          case "servings-toggle":
            accum.servingsIsPerServing = inputState.isPerServing;
          case "photos-select-input":
            accum.photosText = inputState.text;
          default:
            return accum;
        }
      },
      {
        imageImgSrc: "",
        titleText: "",
        descriptionText: "",
        servingsText: 1,
        servingsIsPerServing: false,
        photosText: " "
      }
    );
  };

  const { calories, carbohydrate, protein, fat } = sumNutrients(values);

  const { isOpen } = state;
  const inputState = inputValues(values);
  const { imageImgSrc, servingsIsPerServing, photosText } = inputState;

  const descriptionText = description || inputState.descriptionText;
  const servingsText = servings || inputState.servingsText;
  const titleText = title || inputState.titleText;
  const isPerServing = values.filter(
    (inputState) => inputState.id === "servings-toggle"
  )[0][`is${recipeName}PerServing`];
  const selectedImage = (selectedText) => {
    switch (selectedText) {
      case "forkKnife":
        return ForkKnife;
      case "grains":
        return Grains;
      case "colorfulVegetables":
        return Vegetables;
      case "charcuterie":
        return Charcuterie;
      case "cookies":
        return Cookies;
      case " ":
        return ForkKnife;
      default:
        return DefaultImg;
    }
  };

  return (
    <Fragment>
      <Box component="figure" m={0}>
        <CardMedia
          alt={titleText}
          component="img"
          height="194"
          image={imgSrc || imageImgSrc || selectedImage(photosText)}
          onClick={handleClickOpen}
          sx={{ cursor: "pointer" }}
          title={titleText}
        />
        <Typography
          component="figcaption"
          sx={{ padding: "24px 16px", whiteSpace: "pre-wrap" }}
          variant="b2"
        >
          <Box sx={{ ...svgContainerSx }}>
            <CalorieSvg
              calories={(isPerServing
                ? calories / servingsText
                : calories
              ).toFixed(0)}
            />
            <CarbohydrateSvg
              carbohydrate={(isPerServing
                ? carbohydrate / servingsText
                : carbohydrate
              ).toFixed(0)}
            />
            <ProteinSvg
              protein={(isPerServing
                ? protein / servingsText
                : protein
              ).toFixed(0)}
            />
            <FatSvg
              fat={(isPerServing ? fat / servingsText : fat).toFixed(0)}
            />
          </Box>
          <Box
            display="flex"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              py: 2
            }}
          >
            <ServingsSwitch
              handleServingsToggle={handleServingsToggle}
              isPerServing={isPerServing}
              recipeName={recipe}
            />
            <Typography
              component="span"
              sx={{ verticalAlign: "middle" }}
              variant="b2"
            >
              Serves {servingsText}
            </Typography>
          </Box>
          {descriptionText}
        </Typography>
      </Box>
      <ImageModal
        handleClose={handleClose}
        imgSrc={imgSrc || imageImgSrc || selectedImage(photosText)}
        open={isOpen}
        title={titleText}
      />
    </Fragment>
  );
};

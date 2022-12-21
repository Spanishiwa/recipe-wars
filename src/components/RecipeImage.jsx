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

  const { ingredients, values, handleServingsToggle } = props;
  const sumNutrients = (values) => {
    const ingredients = values.filter((ingr) => ingr.parsed);
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
          default:
            return accum;
        }
      },
      {
        imageImgSrc: "",
        titleText: "",
        descriptionText: "",
        servingsText: 1,
        servingsIsPerServing: false
      }
    );
  };

  const { calories, carbohydrate, protein, fat } = sumNutrients(values);

  const { isOpen } = state;
  const {
    imageImgSrc,
    titleText,
    descriptionText,
    servingsText,
    servingsIsPerServing
  } = inputValues(values);

  return (
    <Fragment>
      <Box component="figure" m={0}>
        <CardMedia
          alt={titleText}
          component="img"
          height="194"
          image={imageImgSrc || DefaultImg}
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
              calories={(servingsIsPerServing
                ? calories / servingsText
                : calories
              ).toFixed(0)}
            />
            <CarbohydrateSvg
              carbohydrate={(servingsIsPerServing
                ? carbohydrate / servingsText
                : carbohydrate
              ).toFixed(0)}
            />
            <ProteinSvg
              protein={(servingsIsPerServing
                ? protein / servingsText
                : protein
              ).toFixed(0)}
            />
            <FatSvg
              fat={(servingsIsPerServing ? fat / servingsText : fat).toFixed(0)}
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
              isPerServing={servingsIsPerServing}
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
        imgSrc={imageImgSrc || DefaultImg}
        open={isOpen}
        title={titleText}
      />
    </Fragment>
  );
};

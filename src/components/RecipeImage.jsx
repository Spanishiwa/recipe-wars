import StockBeefImage from "../assets/Italian_Beef.jpeg";
import { Box, CardMedia, Icon, SvgIcon, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ImageModal from "./ImageModal";
import { CalorieSvg } from "./CalorieSvg";
import { CarbohydrateSvg } from "./CarbohydrateSvg";
import { ProteinSvg } from "./ProteinSvg";
import { FatSvg } from "./FatSvg";

export const RecipeImage = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const svgContainerSx = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    pb: "16px",
    rowGap: "16px"
  };
  const { title, description, imgSrc, ingredients, servings } = props;
  // const { title, description, ingredients, servings } = props;
  console.log(props);
  // const imgSrc = props.test.values.filter(
  //   (ingredient) => ingredient.id == "image-input"
  // )[0].imgSrc;
  const sumNutrients = (values) => {
    // const ingredients = values.filter((ingredient) => ingredient.parsed);
    const sum = values.reduce(
      (accum, ingredient, idx) => {
        if (idx == values.length - 1) {
          accum.calories = (
            parseFloat(accum.calories) + parseFloat(ingredient.calories)
          ).toFixed(0);
          accum.carbohydrate = (
            parseFloat(accum.carbohydrate) + parseFloat(ingredient.carbohydrate)
          ).toFixed(0);
          accum.protein = (
            parseFloat(accum.protein) + parseFloat(ingredient.protein)
          ).toFixed(0);
          accum.fat = (
            parseFloat(accum.fat) + parseFloat(ingredient.fat)
          ).toFixed(0);
        } else {
          accum.calories =
            parseFloat(accum.calories) + parseFloat(ingredient.calories);
          accum.carbohydrate =
            parseFloat(accum.carbohydrate) +
            parseFloat(ingredient.carbohydrate);
          accum.protein =
            parseFloat(accum.protein) + parseFloat(ingredient.protein);
          accum.fat = parseFloat(accum.fat) + parseFloat(ingredient.fat);
        }

        return accum;
      },
      { calories: 0, protein: 0, carbohydrate: 0, fat: 0 }
    );

    return sum;
  };

  const { calories, protein, carbohydrate, fat } = sumNutrients(ingredients);

  return (
    <Fragment>
      <Box component="figure" m={0}>
        <CardMedia
          alt={title}
          component="img"
          height="194"
          image={imgSrc}
          onClick={handleClickOpen}
          sx={{ cursor: "pointer" }}
          title={title}
        />
        <Typography component="figcaption" p={2} variant="b2">
          <Box sx={{ ...svgContainerSx }}>
            <CalorieSvg calories={calories} />
            <CarbohydrateSvg carbohydrate={carbohydrate} />
            <ProteinSvg protein={protein} />
            <FatSvg fat={fat} />
          </Box>
          <Typography component="p" pb={2} variant="b2">
            Serves {servings}
          </Typography>
          {description}
        </Typography>
      </Box>
      <Typography component="p" variant="h6"></Typography>
      <ImageModal
        handleClose={handleClose}
        imgSrc={imgSrc}
        open={open}
        title={title}
      />
    </Fragment>
  );
};

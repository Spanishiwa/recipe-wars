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

  const { title, description, imgSrc, ingredients, servings, calories } = props;
  const { PROCNT, CHOCDF, FAT } = props.totalNutrients;

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
            <CarbohydrateSvg quantity={CHOCDF.quantity} />
            <ProteinSvg quantity={PROCNT.quantity} />
            <FatSvg quantity={FAT.quantity} />
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

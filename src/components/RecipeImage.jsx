import StockBeefImage from "../assets/Italian_Beef.jpeg";
import { Box, CardMedia, Icon, SvgIcon, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ImageModal from "./ImageModal";
import { CalorieSvg } from "./CalorieSvg";
import { CarbohydrateSvg } from "./CarbohydrateSvg";
import { ProteinSvg } from "./ProteinSvg";
import { FatSvg } from "./FatSvg";

export const RecipeImage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Box component="figure" m={0}>
        <CardMedia
          alt="Portillo's Italian beef sandwich with hot giardiniera"
          component="img"
          height="194"
          image={StockBeefImage}
          onClick={handleClickOpen}
          sx={{ cursor: "pointer" }}
          title="Portillo's Italian beef sandwich with hot giardiniera"
        />
        <Typography component="figcaption" p={2} variant="b2">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              pb: "16px",
              rowGap: "16px"
            }}
          >
            <CalorieSvg calories="690" />
            <CarbohydrateSvg grams="63" />
            <ProteinSvg grams="34" />
            <FatSvg grams="33" />
          </Box>
          Italian beef is made using cuts of beef from the sirloin rear or the
          top/bottom round wet-roasted in broth with garlic, oregano and spices
          until cooked throughout.
        </Typography>
      </Box>
      <Typography component="p" variant="h6"></Typography>
      <ImageModal
        handleClose={handleClose}
        imgSrc={StockBeefImage}
        open={open}
        title="Portillo's Italian beef sandwich with hot giardiniera"
      />
    </Fragment>
  );
};

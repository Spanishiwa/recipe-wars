import StockBeefImage from "../assets/Italian_Beef.jpeg";
import { Box, CardMedia, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ImageModal from "./ImageModal";

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
          alt="Portillo's Italian beef with hot giardiniera"
          component="img"
          height="194"
          image={StockBeefImage}
          onClick={handleClickOpen}
          sx={{ cursor: "pointer" }}
          title="Portillo's Italian beef with hot giardiniera"
        />
        <Typography component="figcaption" p={"8px 16px 16px 0px"} variant="b1">
          Italian beef is made using cuts of beef from the sirloin rear or the
          top/bottom round wet-roasted in broth with garlic, oregano and spices
          until cooked throughout
        </Typography>
      </Box>
      <ImageModal
        handleClose={handleClose}
        imgSrc={StockBeefImage}
        open={open}
        title="Portillo's Italian beef with hot giardiniera"
      />
    </Fragment>
  );
};

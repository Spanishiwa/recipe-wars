import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from "@mui/material";
import StockBeefImage from "../assets/Italian_Beef.jpeg";
import ImageModal from "./ImageModal.jsx";

const RecipeCard = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card component="section" sx={{ maxWidth: "500px" }}>
      <CardHeader title="Italian beef with hot gardiniera sandwich" />
      <CardMedia
        alt="Portillo's Italian beef with hot giardiniera"
        component="img"
        height="194"
        image={StockBeefImage}
        onClick={handleClickOpen}
        sx={{ cursor: "pointer" }}
        title="Portillo's Italian beef with hot giardiniera"
      />
      <ImageModal
        handleClose={handleClose}
        imgSrc={StockBeefImage}
        open={open}
        title="Portillo's Italian beef with hot giardiniera"
      ></ImageModal>
      <CardContent sx={{ p: 2 }}>
        <Typography component="p" variant="b1">
          Italian beef is made using cuts of beef from the sirloin rear or the
          top/bottom round wet-roasted in broth with garlic, oregano and spices
          until cooked throughout
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;

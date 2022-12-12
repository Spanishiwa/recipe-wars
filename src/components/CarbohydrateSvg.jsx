import { SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Carbohydrate } from "../assets/Carbohydrate.svg";

export const CarbohydrateSvg = (props) => {
  const { sx, quantity } = props;
  return (
    <Typography
      component="span"
      sx={{ ...sx, flex: "50%", maxWidth: "125px" }}
      variant="b2"
    >
      <SvgIcon
        sx={{ mr: 1, verticalAlign: "middle" }}
        titleAccess={`${quantity} grams of carbohydrates`}
      >
        <Carbohydrate></Carbohydrate>
      </SvgIcon>{" "}
      {quantity}g carbs
    </Typography>
  );
};

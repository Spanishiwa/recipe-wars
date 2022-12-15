import { SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Carbohydrate } from "../assets/Carbohydrate.svg";

export const CarbohydrateSvg = (props) => {
  const { sx, carbohydrate } = props;
  return (
    <Typography
      component="span"
      sx={{
        ...sx,
        flex: { xs: "50%", sm: "auto" },
        maxWidth: { xs: "125px", sm: "inherit" }
      }}
      variant="b2"
    >
      <SvgIcon
        sx={{ verticalAlign: "middle" }}
        titleAccess={`${carbohydrate} grams of carbohydrates`}
      >
        <Carbohydrate></Carbohydrate>
      </SvgIcon>{" "}
      {carbohydrate}g carbs
    </Typography>
  );
};

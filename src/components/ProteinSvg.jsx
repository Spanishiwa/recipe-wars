import { SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Protein } from "../assets/Protein.svg";

export const ProteinSvg = (props) => {
  const { sx, quantity } = props;
  return (
    <Typography
      component="span"
      sx={{ ...sx, flex: "50%", maxWidth: "125px" }}
      variant="b2"
    >
      <SvgIcon
        sx={{ mr: 1, verticalAlign: "middle" }}
        titleAccess={`${quantity} grams of protein`}
      >
        <Protein></Protein>
      </SvgIcon>{" "}
      {quantity}g protein
    </Typography>
  );
};

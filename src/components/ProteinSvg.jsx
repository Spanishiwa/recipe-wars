import { SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Protein } from "../assets/Protein.svg";

export const ProteinSvg = (props) => {
  const { sx, grams } = props;
  return (
    <Typography
      component="span"
      sx={{ ...sx, flex: "50%", maxWidth: "125px" }}
      variant="b2"
    >
      <SvgIcon
        sx={{ mr: 1, verticalAlign: "middle" }}
        titleAccess={`${grams} grams of protein`}
      >
        <Protein></Protein>
      </SvgIcon>{" "}
      34g protein
    </Typography>
  );
};

import { SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Protein } from "../assets/Protein.svg";

export const ProteinSvg = (props) => {
  const { sx, protein } = props;
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
        titleAccess={`${protein} grams of protein`}
      >
        <Protein></Protein>
      </SvgIcon>
      <Typography
        component="span"
        sx={{ pl: 1, verticalAlign: "middle" }}
        variant="b1"
      >
        {protein}g protein
      </Typography>
    </Typography>
  );
};

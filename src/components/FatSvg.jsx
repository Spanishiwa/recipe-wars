import { SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Fat } from "../assets/Fat.svg";

export const FatSvg = (props) => {
  const { sx, grams } = props;
  return (
    <Typography
      component="span"
      sx={{ ...sx, flex: "50%", maxWidth: "125px" }}
      variant="b2"
    >
      <SvgIcon
        sx={{ mr: 1, verticalAlign: "middle" }}
        titleAccess={`${grams} grams of fat`}
      >
        <Fat height="1em" width="1em"></Fat>
      </SvgIcon>{" "}
      34g fat
    </Typography>
  );
};

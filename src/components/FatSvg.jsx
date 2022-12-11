import { SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Fat } from "../assets/Fat.svg";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
export const FatSvg = (props) => {
  const { sx, grams } = props;
  return (
    <Typography
      component="span"
      sx={{ ...sx, flex: "50%", maxWidth: "125px" }}
      variant="b2"
    >
      <EggOutlinedIcon
        sx={{ mr: 1, verticalAlign: "middle" }}
        titleAccess={`${grams} grams of fat`}
      ></EggOutlinedIcon>{" "}
      {grams}g fat
    </Typography>
  );
};

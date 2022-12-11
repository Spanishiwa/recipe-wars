import { SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Calorie } from "../assets/Calorie.svg";

export const CalorieSvg = (props) => {
  const { sx, calories } = props;
  return (
    <Typography
      component="span"
      sx={{ ...sx, flex: "50%", maxWidth: "125px" }}
      variant="b2"
    >
      <SvgIcon
        sx={{ mr: 1, verticalAlign: "middle" }}
        titleAccess={`${calories} total calories (kCal)`}
      >
        <Calorie></Calorie>
      </SvgIcon>{" "}
      {calories} kCal
    </Typography>
  );
};

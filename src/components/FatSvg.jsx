import { SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Fat } from "../assets/Fat.svg";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
export const FatSvg = (props) => {
  const { sx, fat } = props;
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
      <EggOutlinedIcon
        sx={{ verticalAlign: "middle" }}
        titleAccess={`${fat}`}
      ></EggOutlinedIcon>
      <Typography
        component="span"
        sx={{ pl: 1, verticalAlign: "middle" }}
        variant="b1"
      >
        {fat}g fat
      </Typography>
    </Typography>
  );
};

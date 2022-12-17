import {
  FlatwareRounded,
  FoodBank,
  FoodBankRounded,
  Restaurant
} from "@mui/icons-material";
import { InputLabel, Switch, Typography } from "@mui/material";
import React from "react";

export const ServingsSwitch = (props) => {
  const { handleToggle, isPerServing } = props;

  return (
    <InputLabel
      name="servings-toggle"
      sx={{ alignItems: "center", display: "flex" }}
      title="Display nutritional values per serving or by total amount"
    >
      <Typography
        component="span"
        name="servings-toggle"
        sx={{
          ...(!isPerServing && { color: "primary.main" }),
          cursor: "pointer",
          "&:hover": { color: "primary.main" }
        }}
        title="Display nutritional values by total amount"
        variant="caption"
      >
        <Typography
          component="span"
          name="servings-toggle"
          sx={{
            display: { xs: "none", sm: "inline" },
            verticalAlign: "middle"
          }}
          variant="caption"
        >
          Total
        </Typography>
        <FlatwareRounded sx={{ verticalAlign: "middle" }}></FlatwareRounded>
      </Typography>
      <Switch
        name="servings-toggle"
        onChange={handleToggle}
        sx={{
          ".MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary": {
            color: "primary.main"
          }
        }}
        checked={isPerServing}
      ></Switch>
      <Typography
        component="span"
        name="servings-toggle"
        sx={{
          ...(isPerServing && { color: "primary.main" }),
          cursor: "pointer",
          "&:hover": { color: "primary.main" }
        }}
        title="Display nutritional values per serving"
        variant="caption"
      >
        <Restaurant sx={{ verticalAlign: "middle" }}></Restaurant>
        <Typography component="span" name="servings-toggle" variant="caption">
          Per serving
        </Typography>
      </Typography>
    </InputLabel>
  );
};

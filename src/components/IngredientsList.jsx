import { ReceiptLong } from "@mui/icons-material";
import {
  imageListClasses,
  List,
  ListItem,
  ListSubheader,
  Typography,
  useTheme
} from "@mui/material";
import React, { Fragment } from "react";
import IngredientInputDisabled from "./IngredientInputDisabled";

export const IngredientsList = (props) => {
  const { handlers, ingredients } = props;

  const mode = useTheme().palette.mode;
  const ingredientsBorderStyle =
    mode === "light"
      ? "thin solid rgba(0, 0, 0, 0.12)"
      : "thin solid rgba(255, 255, 255, 0.12)";

  return (
    <Fragment>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0px",
          top: "-1px"
        }}
      >
        <ListSubheader
          sx={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
            padding: {
              xs: "16px 0px 0px 0px",
              sm: "16px 0px 0px 0px",
              md: "0px 16px"
            },
            top: "-1px"
          }}
        >
          <Typography
            component="p"
            pb={3}
            sx={{
              borderBottom: ingredientsBorderStyle,
              fontWeight: 400,
              marginBottom: "8px",
              paddingLeft: "16px",
              paddingTop: "0px"
            }}
            variant="h6"
          >
            <ReceiptLong sx={{ mr: 1, verticalAlign: "middle" }} />
            Ingredients ({ingredients.length})
          </Typography>
        </ListSubheader>
        {ingredients.map((ingredient) => (
          <ListItem
            disableGutters
            key={ingredient.id}
            sx={{ padding: "16px 8px 0px 8px" }}
          >
            <IngredientInputDisabled
              handlers={handlers}
              ingredient={ingredient}
            />
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};
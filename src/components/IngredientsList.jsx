import { ReceiptLong } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography
} from "@mui/material";
import React, { Fragment } from "react";
import IngredientInput from "./IngredientInput";
import IngredientInputDisabled from "./IngredientInputDisabled";

export const IngredientsList = (props) => {
  const { ingredients } = props;
  return (
    <Fragment>
      <Typography component="p" variant="b1">
        <ReceiptLong sx={{ m: "0px 8px 0px 16px", verticalAlign: "middle" }} />
        Ingredients ({ingredients.length})
      </Typography>
      <List sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {ingredients.map((ingredient, i) => (
          <ListItem key={ingredient.id} sx={{ p: "0px" }}>
            <IngredientInputDisabled ingredient={ingredient} />
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};

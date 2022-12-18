import { ReceiptLong } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  useTheme
} from "@mui/material";
import React, { Fragment } from "react";
import IngredientInput from "./IngredientInput";
import IngredientInputDisabled from "./IngredientInputDisabled";

export const IngredientsList = (props) => {
  const {
    handleChange,
    handleDelete,
    handleEdit,
    handleKeyDown,
    handleToggleDisable,
    ingredients
  } = props;

  const mode = useTheme().palette.mode;
  const ingredientsBorderStyle =
    mode === "light"
      ? "thin solid rgba(0, 0, 0, 0.12)"
      : "thin solid rgba(255, 255, 255, 0.12)";

  return (
    <Fragment>
      <Typography
        component="p"
        pb={3}
        sx={{ borderBottom: ingredientsBorderStyle, fontWeight: 400 }}
        variant="h6"
      >
        <ReceiptLong sx={{ mr: 1, verticalAlign: "middle" }} />
        Ingredients ({ingredients.length})
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          pt: 2
        }}
      >
        {ingredients.map((ingredient) => (
          <ListItem disableGutters key={ingredient.id} sx={{ pr: 1 }}>
            <IngredientInputDisabled
              handleChange={handleChange}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleKeyDown={handleKeyDown}
              handleToggleDisable={handleToggleDisable}
              ingredient={ingredient}
            />
            {/* <Divider /> */}
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};

import { Box, Card, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import ImageInput from "./components/ImageInput";
import IngredientInput from "./components/IngredientInput";
import { IngredientsList } from "./components/IngredientsList";

export const RecipeFormOptional = (props) => {
  const {
    handleChange,
    handleImage,
    handleKeyDown,
    handleSubmit,
    ingredientInputVal,
    values
  } = props;

  const imgState = values.filter(
    (ingredient) => ingredient.id == "image-input"
  )[0];

  return (
    <Card component="section" sx={{ maxWidth: "500px", p: 2 }}>
      <Typography component="h1" variant="h4" mb={4}>
        Customize recipe{" "}
        <Typography component="span" variant="h6">
          (optional)
        </Typography>
      </Typography>
      <form id="recipe-form-optional">
        <FormControl sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Recipe title"
            id="title-input"
            name="title-input"
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleChange}
            placeholder="e.g. Abuela's dirty beans syrniki"
            sx={{ flex: 1 }}
            title="enter a concise, cogent, and exciting title"
            type="text"
            // value={value}
            variant="outlined"
          />
          <TextField
            className="description-textarea"
            InputLabelProps={{ shrink: true }}
            label="Recipe description"
            id="description-textarea"
            multiline
            name="description-textarea"
            onChange={handleChange}
            placeholder="Elaborate on the recipe title by covering key points to know about the recipe such as specific cuts of meat, speciality cooking devices like sous vide machines, or anything else special the dish or its history."
            rows="4"
            sx={{ flex: "1 1 auto" }}
            title="Highlight interesting things about the recipe or elaborate on the recipe title"
            variant="outlined"
          />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <TextField
              id="servings-input"
              label="Servings per recipe"
              inputProps={{ min: "1", sx: { textAlign: "center" } }}
              name="servings-input"
              onChange={handleChange}
              type="number"
              sx={{ maxWidth: "145px" }}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Box>
          <Box>
            <ImageInput handleImage={handleImage} imgName={imgState.imgName} />
          </Box>
        </FormControl>
      </form>
    </Card>
  );
};

import { Box, InputLabel, TextareaAutosize, TextField } from "@mui/material";
import React from "react";

const IngredientsTextarea = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
      <TextField
        className="ingredients-textarea"
        cols="50"
        InputLabelProps={{ shrink: true }}
        label="Ingredients & quantities list"
        id="ingredients-textarea"
        multiline
        name="ingredients-textarea"
        placeholder="Ingredients list with one ingredient and quantity per line e.g.&#13;&#10;1/2 cup heavy cream&#13;&#10;3 tablespoons butter&#13;&#10;1 pound chicken breast"
        rows="10"
        sx={{ flex: "1 1 auto" }}
        title="Enter an ingredients list with one ingredient and quantity per line"
        variant="outlined"
      />
    </Box>
  );
};

export default IngredientsTextarea;

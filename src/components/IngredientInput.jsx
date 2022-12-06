import React from "react";

function IngredientInput(props) {
  return (
    <React.Fragment>
      <label htmlFor="ingredient-input">Ingredient</label>
      <input
        className="ingredient-input"
        id="ingredient-input"
        placeholder="e.g. 1/2 cup of broccoli"
        type="text"
      />
      <button className="ingredient-save" id="ingredient-save" type="submit">
        Save Ingredient
      </button>
    </React.Fragment>
  );
}

export default IngredientInput;

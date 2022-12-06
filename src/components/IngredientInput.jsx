import React from "react";

function IngredientInput(props) {
  return (
    <React.Fragment>
      <label htmlFor="ingredient-input">Ingredient</label>
      <input
        className="ingredient-input"
        id="ingredient-input"
        name="ingredient"
        onChange={props.handleChange}
        placeholder="e.g. 1/2 cup of broccoli"
        type="text"
      />
      <button
        className="ingredient-save"
        id="ingredient-save"
        // onClick={props.handleClick}
        type="button"
      >
        Save Ingredient
      </button>
    </React.Fragment>
  );
}

export default IngredientInput;
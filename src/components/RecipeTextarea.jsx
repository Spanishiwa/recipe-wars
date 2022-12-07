import React from "react";

function RecipeTextarea() {
  return (
    <React.Fragment>
      <label htmlFor="recipe-textarea">Enter your recipe</label>
      <textarea
        className="recipe-textarea"
        cols="50"
        id="recipe-textarea"
        name="recipe-textarea"
        placeholder="One ingredient per line e.g.&#13;&#10;1/2 cup heavy cream&#13;&#10;3 tablespoons butter&#13;&#10;1 pound chicken breast"
        rows="10"
      ></textarea>
    </React.Fragment>
  );
}

export default RecipeTextarea;

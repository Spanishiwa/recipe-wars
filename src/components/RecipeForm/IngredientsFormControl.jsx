import React, { useContext, useRef } from 'react';
import { DynamicFeed, PostAdd } from '@mui/icons-material';
import { Button, FormControl, Typography } from '@mui/material';
import { RecipeTextarea } from '../RecipeTextarea/RecipeTextarea';
import {
  multilineHeaderSx,
  multilineIconSx,
  textareaContainerSx,
} from './RecipeFormStyles';
import IngredientInput from '../IngredientInput/IngredientInput';
import { ingredientsPlaceholder } from './RecipeFormUtil';
import { RecipesContext } from '../Contexts/RecipesContext';
import { SnackbarContext } from '../Contexts/SnackbarContext';

export const IngredientsFormControl = () => {
  const { state } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);

  const textareaRef = useRef(null);

  const handleSubmitThenFocus = (e) => {
    e.preventDefault();

    const name =
      e.target.getAttribute('name') || e.currentTarget.getAttribute('name');
    // code works - ration API calls for testing
    const ingredient = state.filter((ingredient) => ingredient.id === name);

    // if (ingredient) useFetchAPI(ingredient[0].text, null, name);
    if (ingredient) {
      ('yes');
    }

    showAlert('Fetching ingredient', 'info');
    textareaRef.current.focus();
  };

  const handleKeySubmitThenFocus = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      e.stopPropagation();
      e.preventDefault();

      handleSubmitThenFocus(e);
    }
  };

  return (
    <FormControl sx={textareaContainerSx}>
      <IngredientInput />
      <Typography sx={multilineHeaderSx}>
        <DynamicFeed sx={multilineIconSx} />
        Post multiple ingredients at a time below, but only enter one per line.
      </Typography>
      <RecipeTextarea
        label="Ingredients & quantities"
        inputRef={textareaRef}
        name="ingredients-textarea"
        placeholder={ingredientsPlaceholder}
        rows={10}
        title="Enter an ingredients grocery list with one ingredient & quantity per line"
      />
      <Button
        className="submit"
        disableElevation
        name="ingredients-textarea"
        onClick={handleSubmitThenFocus}
        onKeyDown={handleKeySubmitThenFocus}
        size="large"
        startIcon={<PostAdd />}
        sx={{ mt: '-24px', maxWidth: '220px' }}
        type="submit"
        variant="contained"
      >
        POST INGREDIENTS
      </Button>
    </FormControl>
  );
};

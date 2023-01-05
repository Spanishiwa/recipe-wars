import React from 'react';
import { Tune } from '@mui/icons-material';
import { Box, FormControl, Typography } from '@mui/material';
import ImageInput from './ImageInput/ImageInput';
import { IngredientsList } from '../IngredientsList/IngredientsList';
import { RecipeNumberfield } from '../RecipeNumberfield/RecipeNumberfield';
import { RecipeTextarea } from '../RecipeTextarea/RecipeTextarea';
import {
  formOptionalSx,
  headerSubtext,
  ingredientsListContainerSx,
  servingsContainerSx,
} from './FormOptionalStyles';
import {
  descriptionPlaceholder,
  instructionsPlaceholder,
} from './FormOptionalUtil';

export const RecipeFormOptional = () => {
  return (
    <Box component="section" sx={{ display: 'flex', gap: 2, p: 2 }}>
      <Box component="form" id="recipe-form-optional" sx={formOptionalSx}>
        <Typography component="h1" variant="h5" mb={3}>
          <Tune sx={{ padding: '0px 8px 0px 0px', verticalAlign: 'middle' }} />
          Customize recipe
          <Typography component="span" variant="caption" sx={headerSubtext}>
            (optional)
          </Typography>
        </Typography>
        <FormControl sx={{ display: 'flex', gap: 4 }}>
          <RecipeTextarea
            label="Recipe description"
            name="description-textarea"
            placeholder={descriptionPlaceholder}
            rows={5}
            title="Highlight interesting things about the recipe or elaborate on the recipe title"
          />
          <Box sx={servingsContainerSx}>
            <RecipeNumberfield
              label="Servings per recipe"
              name="servings-input"
              title="How many portion sizes the recipe serves"
            />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <ImageInput />
          </Box>
          <RecipeTextarea
            label="Recipe instructions"
            name="recipe-textarea"
            rows={19}
            title="Describe in full detail the cooking and preparation process to reproduce your recipe"
            placeholder={instructionsPlaceholder}
          />
        </FormControl>
      </Box>
      <Box sx={ingredientsListContainerSx}>
        <IngredientsList recipeName="Untitled" />
      </Box>
    </Box>
  );
};

import React from 'react';
import { Tune } from '@mui/icons-material';
import { Box, FormControl, Typography } from '@mui/material';
import ImageInput from './ImageInput/ImageInput';
import { IngredientsList } from '../IngredientsList/IngredientsList';
import { RecipeNumberfield } from './RecipeNumberfield/RecipeNumberfield';
import { RecipeTextarea } from '../RecipeTextarea/RecipeTextarea';
import {
  formOptionalContainerSx,
  formOptionalSx,
  headerSubtext,
  ingredientsListContainerSx,
  servingsContainerSx,
} from './FormOptionalStyles';
import {
  descriptionPlaceholder,
  instructionsPlaceholder,
} from './FormOptionalUtil';
import PropTypes from 'prop-types';

export const RecipeFormOptional = (props) => {
  const { recipeName } = props;

  return (
    <Box component="section" sx={formOptionalContainerSx}>
      <Box component="form" id="recipe-form-optional" sx={formOptionalSx}>
        <Typography component="h1" variant="h5" mb={{ xs: '24px', md: '29px' }}>
          <Tune fontSize="large" sx={{ mr: 2, verticalAlign: 'bottom' }} />
          Customize recipe
          <Typography component="span" variant="caption" sx={headerSubtext}>
            (optional)
          </Typography>
        </Typography>
        <FormControl sx={{ display: 'flex' }}>
          <RecipeTextarea
            label="Recipe description"
            name={`${recipeName}description-textarea`}
            placeholder={descriptionPlaceholder}
            rows={5}
            title="Highlight interesting things about the recipe or elaborate on the recipe title"
          />
          <Box sx={servingsContainerSx}>
            <RecipeNumberfield
              label="Servings per recipe"
              name={`${recipeName}servings-input`}
              title="How many portion sizes the recipe serves"
              sx={{ width: { xs: '130px', sm: '161px' } }}
            />
          </Box>
          <Box sx={{ display: 'flex', mb: 4 }}>
            <ImageInput recipeName={recipeName} />
          </Box>
          <RecipeTextarea
            label="Recipe instructions"
            name={`${recipeName}recipe-textarea`}
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

RecipeFormOptional.propTypes = { recipeName: PropTypes.string };

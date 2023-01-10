import React from 'react';
import { Box, Typography } from '@mui/material';
import { IngredientsList } from '../IngredientsList/IngredientsList';
import { ManageSearch } from '@mui/icons-material';
import { RecipeTextfield } from '../RecipeTextfield/RecipeTextfield';
import PropTypes from 'prop-types';
import {
  formLeftContainerSx,
  formRightContainerSx,
  formSectionSx,
  searchIconSx,
} from './RecipeFormStyles';
import { examplesDescriptionText, headerSubtext } from './RecipeFormUtil';
import { InputExamplesList } from './InputExamplesList/InputExamplesList';
import IngredientInput from './IngredientInput/IngredientInput';

const RecipeForm = (props) => {
  const { ingredientRef, recipeName, titleRef } = props;

  return (
    <Box component="section" sx={formSectionSx}>
      <Box sx={formLeftContainerSx}>
        <Typography component="h1" mb={2} pt={3} variant="h5">
          <ManageSearch fontSize="large" sx={searchIconSx} />
          Recipe Nutrition
          <Typography component="p" sx={{ my: 2 }} variant="body1">
            {headerSubtext}
          </Typography>
        </Typography>
        <RecipeTextfield
          inputRef={titleRef}
          label="Recipe title"
          name={`${recipeName}title-input`}
          placeholder="e.g. Abuela's dirty beans syrniki"
          required={true}
          title="Enter a concise, cogent, and exciting title"
        />
        <Typography component="p" sx={{ mb: 2, mt: 1 }} variant="b1">
          {examplesDescriptionText}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <InputExamplesList />
        </Box>
        <IngredientInput inputRef={ingredientRef} recipeName={recipeName} />
      </Box>
      <Box sx={formRightContainerSx}>
        <IngredientsList recipeName={recipeName} />
      </Box>
    </Box>
  );
};

export default RecipeForm;

RecipeForm.propTypes = {
  ingredientRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  recipeName: PropTypes.string,
  titleRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

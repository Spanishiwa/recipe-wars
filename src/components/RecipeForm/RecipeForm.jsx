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
import { IngredientsFormControl } from './IngredientsFormControl';

const RecipeForm = (props) => {
  const { titleRef } = props;

  return (
    <Box component="section" sx={formSectionSx}>
      <Box sx={formLeftContainerSx}>
        <Typography component="h1" variant="h5" mb={1}>
          <ManageSearch fontSize="large" sx={searchIconSx} />
          Recipe Nutrition
          <Typography component="p" sx={{ mb: 2 }} variant="body1">
            {headerSubtext}
          </Typography>
        </Typography>
        <RecipeTextfield
          inputRef={titleRef}
          label="Recipe title"
          name="title-input"
          placeholder="e.g. Abuela's dirty beans syrniki"
          required={true}
          title="Enter a concise, cogent, and exciting title"
        />
        <Typography component="p" variant="b1">
          {examplesDescriptionText}
        </Typography>
        <Box>
          <InputExamplesList />
        </Box>
        <IngredientsFormControl />
      </Box>
      <Box sx={formRightContainerSx}>
        <IngredientsList recipeName="Untitled" />
      </Box>
    </Box>
  );
};

export default RecipeForm;

RecipeForm.propTypes = {
  titleRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

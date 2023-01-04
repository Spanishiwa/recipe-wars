import React, { useRef } from 'react';
import IngredientInput from '../IngredientInput/IngredientInput';
import { Box, Button, FormControl, List, Typography } from '@mui/material';
import { IngredientsList } from '../IngredientsList/IngredientsList';
import {
  Close,
  Done,
  DynamicFeed,
  ManageSearch,
  PostAdd,
} from '@mui/icons-material';
import { InputExamples } from '../InputExamples/InputExamples';
import { RecipeTextarea } from '../RecipeTextarea/RecipeTextarea';
import { RecipeTextfield } from '../RecipeTextfield/RecipeTextfield';
import PropTypes from 'prop-types';
import {
  examplesListSx,
  formLeftContainerSx,
  formRightContainerSx,
  formSectionSx,
  multilineHeaderSx,
  multilineIconSx,
  textareaContainerSx,
} from './RecipeFormStyles';
import {
  examplesDescriptionText,
  headerSubtext,
  inputExamples,
} from './RecipeFormUtil';

const RecipeForm = (props) => {
  const { titleRef } = props;
  // const { handlers, ingredients, inputs, showAlert, titleRef } = props;
  const getInput = (id) => inputs.filter((input) => input.id === id)[0];

  const ingredientInput = getInput('ingredient-input');
  const ingredientsTextarea = getInput('ingredients-textarea');
  const titleInput = getInput('title-input');
  const ingredientsTextareaRef = useRef(null);

  const handleKeySubmitThenFocus = (e) => {
    const key = e.which || e.keyCode || 0;
    handleKeySubmit(e);
    if (key === 13) {
      showAlert('Fetching ingredients', 'info');
      ingredientsTextareaRef.current.focus();
    }
  };

  const handleSubmitThenFocus = (e) => {
    handleSubmit(e);
    showAlert('Fetching ingredients', 'info');
    ingredientsTextareaRef.current.focus();
  };

  const titleProps = {
    error: titleInput.error,
    handleChange: handleChange,
    handleBlur: handleBlur,
    inputRef: titleRef,
    label: 'Recipe title',
    name: 'title-input',
    placeholder: "e.g. Abuela's dirty beans syrniki",
    required: true,
    status: titleInput.status,
    title: `Enter a concise, cogent, and exciting title`,
    value: titleInput.text,
  };

  const ingredientsTextareaProps = {
    error: ingredientsTextarea.error,
    handleChange: handleChange,
    handleBlur: handleBlur,
    label: 'Ingredients & quantities',
    name: 'ingredients-textarea',
    placeholder: `Ingredients list with one ingredient & quantity per line e.g.
1/2 cup heavy cream
3 tablespoons butter
1 pound chicken breast`,
    inputRef: ingredientsTextareaRef,
    rows: 10,
    status: ingredientsTextarea.status,
    title: `Enter an ingredients grocery list with one ingredient & quantity per line`,
    value: ingredientsTextarea.text,
  };

  return (
    <Box component="section" sx={{ formSectionSx }}>
      <Box sx={{ formLeftContainerSx }}>
        <Typography component="h1" variant="h5" mb={1}>
          <ManageSearch
            fontSize="large"
            sx={{ padding: '0px 8px 8px 0px', verticalAlign: 'middle' }}
          />
          Recipe Nutrition
          <Typography component="p" sx={{ mb: 2 }} variant="body1">
            {headerSubtext}
          </Typography>
        </Typography>
        <RecipeTextfield {...titleProps} />
        <Typography component="p" variant="b1">
          {examplesDescriptionText}
        </Typography>
        <Box>
          <List sx={examplesListSx}>
            {inputExamples.examples.map((inputExample, idx) => {
              return (
                <InputExamples
                  CustomIcon={idx % 2 === 0 ? Done : Close}
                  iconColor={idx % 2 === 0 ? 'success' : 'error'}
                  inputExample={inputExample}
                  key={inputExample}
                  inputExamplesSx={{ maxWidth: { xs: '100%', sm: '50%' } }}
                  title={inputExamples.titles[idx]}
                />
              );
            })}
          </List>
        </Box>
        <FormControl sx={textareaContainerSx}>
          <IngredientInput input={ingredientInput} />
          <Typography sx={multilineHeaderSx}>
            <DynamicFeed sx={multilineIconSx} />
            Post multiple ingredients at a time below, but only enter one per
            line.
          </Typography>
          <RecipeTextarea {...ingredientsTextareaProps} />
          <Button
            className="submit"
            disableElevation
            name="ingredients-textarea"
            onKeyDown={handleKeySubmitThenFocus}
            onClick={handleSubmitThenFocus}
            size="large"
            startIcon={<PostAdd />}
            sx={{ mt: '-24px', maxWidth: '220px' }}
            type="submit"
            variant="contained"
          >
            POST INGREDIENTS
          </Button>
        </FormControl>
      </Box>
      <Box sx={{ formRightContainerSx }}>
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

import { ReceiptLong } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListSubheader,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import IngredientInputDisabled from '../IngredientInputDisabled/IngredientInputDisabled';
import PropTypes from 'prop-types';
import {
  getIngredientsHeaderSx,
  listSubheaderSx,
  listSx,
} from './IngredientsListStyles';

export const IngredientsList = (props) => {
  const { handlers, ingredients } = props;

  const mode = useTheme().palette.mode;
  const ingredientsHeaderSx = getIngredientsHeaderSx(mode);

  return (
    <List sx={listSx}>
      <ListSubheader sx={listSubheaderSx}>
        <Typography component="p" sx={ingredientsHeaderSx} variant="h6">
          <ReceiptLong sx={{ mr: 1, verticalAlign: 'middle' }} />
          Ingredients ({ingredients.length})
        </Typography>
      </ListSubheader>
      {ingredients.map((ingredient) => (
        <ListItem
          disableGutters
          key={ingredient.id}
          sx={{ padding: '16px 8px 0px 8px' }}
        >
          <IngredientInputDisabled
            handlers={handlers}
            ingredient={ingredient}
          />
        </ListItem>
      ))}
    </List>
  );
};

IngredientsList.propTypes = {
  handlers: PropTypes.shape({
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
    handleKeyDelete: PropTypes.func,
    handleKeySubmit: PropTypes.func,
    handleToggleDisable: PropTypes.func,
  }).isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      parsed: PropTypes.string.isRequired,
      calories: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      carbohydrate: PropTypes.string.isRequired,
      protein: PropTypes.string.isRequired,
      fat: PropTypes.string.isRequired,
      status: PropTypes.string,
      isDisabled: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
      recipeName: PropTypes.string.isRequired,
    })
  ),
};

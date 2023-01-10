import { ReceiptLong } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListSubheader,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useContext } from 'react';
import IngredientInputDisabled from './IngredientInputDisabled/IngredientInputDisabled';
import PropTypes from 'prop-types';
import {
  getIngredientsHeaderSx,
  ingrPadding,
  listSubheaderSx,
  listSx,
  receiptLongSx,
} from './IngredientsListStyles';
import { RecipesContext } from '../Contexts/RecipesContext';

export const IngredientsList = (props) => {
  const { state } = useContext(RecipesContext);
  const { isEditable, recipeName } = props;

  const mode = useTheme().palette.mode;
  const ingredientsHeaderSx = getIngredientsHeaderSx(isEditable, mode);

  const recipeIngredients = state.filter(
    (input) => input.recipeName === recipeName && input.parsed
  );

  return (
    <List sx={listSx}>
      <ListSubheader sx={listSubheaderSx}>
        <Typography component="p" sx={ingredientsHeaderSx} variant="h6">
          <ReceiptLong fontSize="large" sx={receiptLongSx} />
          Ingredients ({recipeIngredients.length})
        </Typography>
      </ListSubheader>
      {recipeIngredients.map((ingr) => (
        <ListItem disableGutters key={ingr.id} sx={ingrPadding(isEditable)}>
          <IngredientInputDisabled ingredient={ingr} isEditable={isEditable} />
        </ListItem>
      ))}
    </List>
  );
};

IngredientsList.propTypes = {
  isEditable: PropTypes.bool,
  recipeName: PropTypes.string,
};

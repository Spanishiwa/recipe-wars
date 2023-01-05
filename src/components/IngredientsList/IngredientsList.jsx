import { ReceiptLong } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListSubheader,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useContext } from 'react';
import IngredientInputDisabled from '../IngredientInputDisabled/IngredientInputDisabled';
import PropTypes from 'prop-types';
import {
  getIngredientsHeaderSx,
  ingrPadding,
  listSubheaderSx,
  listSx,
} from './IngredientsListStyles';
import { RecipesContext } from '../Contexts/RecipesContext';

export const IngredientsList = (props) => {
  const { recipeName } = props;
  const { state } = useContext(RecipesContext);

  const recipeIngredients = state.filter(
    (ingredient) => ingredient.recipeName === recipeName && ingredient.parsed
  );

  const mode = useTheme().palette.mode;
  const ingredientsHeaderSx = getIngredientsHeaderSx(mode);

  return (
    <List sx={listSx}>
      <ListSubheader sx={listSubheaderSx}>
        <Typography component="p" sx={ingredientsHeaderSx} variant="h6">
          <ReceiptLong sx={{ mr: 1, verticalAlign: 'middle' }} />
          Ingredients ({recipeIngredients.length})
        </Typography>
      </ListSubheader>
      {recipeIngredients.map((ingr) => (
        <ListItem disableGutters key={ingr.id} sx={ingrPadding}>
          <IngredientInputDisabled ingredient={ingr} />
        </ListItem>
      ))}
    </List>
  );
};

IngredientsList.propTypes = { recipeName: PropTypes.string.isRequired };

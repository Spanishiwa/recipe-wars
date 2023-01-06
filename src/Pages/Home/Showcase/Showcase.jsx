import { Box, Card } from '@mui/material';
import React, { Fragment, useContext } from 'react';
import { RecipeCard } from '../../../components/RecipeCard/RecipeCard';
import { ResetAllCard } from './ResetAllCard';
import { lodashGroupBy } from '../../../Util';
import { useSnackbarRedirect } from '../../../Hooks/useSnackbarRedirect';
import { RecipesContext } from '../../../components/Contexts/RecipesContext';

export const Showcase = () => {
  const { state } = useContext(RecipesContext);

  useSnackbarRedirect();

  const recipes = lodashGroupBy(state, 'recipeName');

  const recipeNames = Object.keys(recipes).filter(
    (recipeName) => recipeName !== 'undefined' && recipeName !== 'Untitled'
  );

  return (
    <Fragment>
      {recipeNames.length ? <></> : <ResetAllCard />}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {recipeNames.map((recipeName) => {
          return (
            <Card key={recipeName}>
              <RecipeCard recipeName={recipeName} />
            </Card>
          );
        })}
      </Box>
    </Fragment>
  );
};

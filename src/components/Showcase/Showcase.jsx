import { Box, Card } from '@mui/material';
import React, { Fragment } from 'react';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import PropTypes from 'prop-types';
import { ResetAllCard } from './ResetAllCard';
import { lodashGroupBy } from '../../Util';
import { useSnackbarRedirect } from '../../Hooks/useSnackbarRedirect';

export const Showcase = (props) => {
  const { recipeStates } = props;

  useSnackbarRedirect();

  const recipes = lodashGroupBy(recipeStates, 'recipeName');

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

Showcase.propTypes = {
  recipeStates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

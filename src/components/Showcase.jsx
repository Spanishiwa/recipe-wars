import { Box, Button, Card, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { RecipeCard } from './RecipeCard';
import { MuiSnackbar } from './MuiSnackbar';
import { useLocation } from 'react-router-dom';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PropTypes from 'prop-types';

const INIT_SNACKBAR = {
  message: 'Title is "Untitled" or empty',
  open: false,
  severity: 'error',
};

export const Showcase = (props) => {
  const { state } = useLocation();
  const { handlers, recipeStates } = props;

  const { handleResetAll } = handlers;

  const [snackbarState, setSnackbarState] = React.useState(
    state ? state : INIT_SNACKBAR
  );

  const showAlert = (message, severity) => {
    setSnackbarState((prevState) => ({
      ...prevState,
      message: message,
      open: true,
      severity: severity,
    }));
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  const handleResetAllClick = () => {
    showAlert('Resetting all recipes to default', 'success');
    handleResetAll();
  };

  const lodashGroupBy = (xs, key) => {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const recipes = lodashGroupBy(recipeStates, 'recipeName');
  const recipeNames = Object.keys(recipes).filter(
    (recipeName) => recipeName !== 'undefined' && recipeName !== 'Untitled'
  );
  const servingsToggle = recipeStates.filter(
    (state) => state.id === 'servings-toggle'
  )[0];

  return (
    <Fragment>
      {recipeNames.length === 0 ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Card sx={{ padding: 2 }}>
            <Typography component="p" sx={{ mb: 2 }} variant="h6">
              Want to bring back the default recipes? Use this Reset All button
            </Typography>
            <Button
              aria-label="RESET ALL"
              color="error"
              component="button"
              disableElevation
              onClick={handleResetAllClick}
              size="large"
              title="Reset all recipes to default"
              type="button"
              variant="contained"
            >
              <RestartAltIcon sx={{ mr: 1 }} />
              RESET ALL
            </Button>
          </Card>
        </Box>
      ) : (
        <></>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {recipeNames.map((recipeName) => {
          const recipeState = recipes[recipeName].filter(
            (recipe) => recipe.title
          )[0];
          const ingredients = recipes[recipeName].filter(
            (recipe) => recipe.parsed
          );

          return (
            <Card key={recipeName}>
              <RecipeCard
                handlers={handlers}
                ingredients={ingredients}
                isPerServing={servingsToggle[`is${recipeName}PerServing`]}
                recipeState={recipeState}
                selectText={recipeState.selectText}
                showAlert={showAlert}
              />
            </Card>
          );
        })}
      </Box>
      <MuiSnackbar
        handleClose={handleSnackbarClose}
        message={snackbarState.message}
        open={snackbarState.open}
        severity={snackbarState.severity}
      />
    </Fragment>
  );
};

Showcase.propTypes = {
  handlers: PropTypes.shape({
    handleResetAll: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleDeleteRecipe: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleKeyDelete: PropTypes.func.isRequired,
    handleKeySubmit: PropTypes.func.isRequired,
    handleToggleDisable: PropTypes.func.isRequired,
    handleServingsToggle: PropTypes.func.isRequired,
  }).isRequired,
  recipeStates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

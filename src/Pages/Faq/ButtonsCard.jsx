import React, { useContext } from 'react';
import { Button, Card, useMediaQuery, useTheme } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { LocalDining } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { resetAll } from '../../reducers/actions';
import { RecipesContext } from '../../components/Contexts/RecipesContext';
import { RESET_ALL_SNACKBAR } from '../../Util';

export const ButtonsCard = () => {
  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));

  const { dispatch } = useContext(RecipesContext);
  const handleResetAll = () => dispatch(resetAll());

  return (
    <Card
      sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, p: 2 }}
    >
      <Button
        aria-label="START PAGE"
        color="primary"
        component={RouterLink}
        disableElevation
        size={xsOnly ? 'medium' : 'large'}
        sx={{ minWidth: { xs: '137px', sm: '175px' } }}
        title="Start Page"
        to="/start"
        variant="contained"
      >
        <LocalDining sx={{ mr: 1 }} />
        {xsOnly ? 'START' : 'GET STARTED'}
      </Button>
      <Button
        aria-label="RESET ALL"
        color="error"
        component={RouterLink}
        disableElevation
        onClick={handleResetAll}
        size={xsOnly ? 'medium' : 'large'}
        state={RESET_ALL_SNACKBAR}
        sx={{ minWidth: { xs: '137px', sm: '175px' } }}
        title="Reset all recipes to default"
        to={'/recipe-wars'}
        variant="outlined"
      >
        <RestartAltIcon sx={{ mr: 1 }} />
        RESET ALL
      </Button>
    </Card>
  );
};

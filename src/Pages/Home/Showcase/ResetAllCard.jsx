import React, { useContext } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Box, Button, Card, Typography } from '@mui/material';
import { RecipesContext } from '../../../components/Contexts/RecipesContext';
import { resetAll } from '../../../reducers/actions';
import { SnackbarContext } from '../../../components/Contexts/SnackbarContext';
import { RESET_ALL_SNACKBAR } from '../../../Util';

export const ResetAllCard = () => {
  const { dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);

  const handleResetAllClick = () => {
    showAlert(RESET_ALL_SNACKBAR.message, RESET_ALL_SNACKBAR.severity);

    dispatch(resetAll());
  };

  return (
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
  );
};

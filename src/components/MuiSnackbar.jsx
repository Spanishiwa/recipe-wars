import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React from 'react';

export const MuiSnackbar = (props) => {
  const { handleClose, message, open, severity } = props;

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert
        elevation={6}
        onClose={handleClose}
        severity={severity}
        sx={{ width: '100%' }}
        variant="filled"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

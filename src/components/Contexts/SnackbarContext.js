import React, { createContext, useCallback, useMemo, useState } from 'react';
import { INIT_SNACKBAR } from '../../Util';
import { MuiSnackbar } from '../MuiSnackbar/MuiSnackbar';
import PropTypes from 'prop-types';

export const SnackbarContext = createContext();

export const SnackbarProvider = (props) => {
  const [snackbarState, setSnackbarState] = useState(INIT_SNACKBAR);
  const { children } = props;

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;

    setSnackbarState((prevState) => ({ ...prevState, open: false }));
  };

  const showAlert = useCallback((message, severity) => {
    setSnackbarState((prevState) => ({
      ...prevState,
      message: message,
      open: true,
      severity: severity,
    }));
  }, []);

  const snackbarContextValue = useMemo(() => {
    return { showAlert };
  }, [showAlert]);

  return (
    <SnackbarContext.Provider value={snackbarContextValue}>
      {children}
      <MuiSnackbar
        handleClose={handleSnackbarClose}
        message={snackbarState.message}
        open={snackbarState.open}
        severity={snackbarState.severity}
      />
    </SnackbarContext.Provider>
  );
};

SnackbarProvider.propTypes = { children: PropTypes.element.isRequired };

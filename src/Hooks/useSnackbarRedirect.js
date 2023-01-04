import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SnackbarContext } from '../components/MuiSnackbar/SnackbarContext';

const useSnackbarRedirect = () => {
  const { state } = useLocation();
  const { showAlert } = useContext(SnackbarContext);

  useEffect(() => {
    if (state?.message) showAlert(state.message, state.severity);
  }, [state]);
};

export { useSnackbarRedirect };

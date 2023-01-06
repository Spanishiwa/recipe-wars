import React, { useMemo, useReducer } from 'react';
import Footer from '../Footer/Footer';
import { Box, Container } from '@mui/material';
import NavBar from '../NavBar/NavBar';
import { Start } from '../../Pages/Start/Start';
import { Faq } from '../../Pages/Faq/Faq';
import { Route, Routes } from 'react-router-dom';
import { INIT_RECIPE_WARS } from '../../Util';
import { rootReducer } from '../../reducers/rootReducer';
import { useControlledLocalStorage, useRubberBandFix } from './AppHooks';
import { appSx, mainSx } from './AppStyles';
import { SnackbarProvider } from '../Contexts/SnackbarContext';
import { RecipesContextProvider } from '../Contexts/RecipesContext';
import { Home } from '../../Pages/Home/Home';

function App() {
  const [state, dispatch] = useReducer(
    rootReducer,
    JSON.parse(localStorage.getItem('values')) || INIT_RECIPE_WARS
  );

  const recipesContextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  // hooks
  useControlledLocalStorage(state);
  useRubberBandFix();

  return (
    <SnackbarProvider>
      <RecipesContextProvider value={recipesContextValue}>
        <NavBar />
        <Container component="main" maxWidth="lg" sx={mainSx}>
          <Box className="app" sx={appSx}>
            <Routes>
              <Route element={<Faq />} path="/faq" />
              <Route element={<Home />} path="/recipe-wars" />
              <Route element={<Start />} path="/start" />
            </Routes>
          </Box>
        </Container>
        <Footer />
      </RecipesContextProvider>
    </SnackbarProvider>
  );
}
export { App };

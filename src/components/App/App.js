import React, { useMemo, useReducer } from 'react';
import Footer from '../Footer/Footer';
import { Box, Container } from '@mui/material';
import NavBar from '../NavBar/NavBar';
import MuiStepper from '../MuiStepper/MuiStepper';
import { Faq } from '../Faq/Faq';
import { Route, Routes } from 'react-router-dom';
import { Showcase } from '../Showcase/Showcase';
import { INIT_RECIPE_WARS } from '../../Util';
import { rootReducer } from '../../reducers/rootReducer';
import { useControlledLocalStorage, useRubberBandFix } from './AppHooks';
import { appSx, mainSx } from './AppStyles';
import { SnackbarProvider } from '../Contexts/SnackbarContext';
import { RecipesContextProvider } from '../Contexts/RecipesContext';

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
              <Route
                path="/recipe-wars"
                element={<Showcase recipeStates={state} />}
              ></Route>
              <Route path="/faq" element={<Faq />}></Route>
              <Route
                path="/start"
                element={<MuiStepper recipeStates={state} />}
              ></Route>
            </Routes>
          </Box>
        </Container>
        <Footer />
      </RecipesContextProvider>
    </SnackbarProvider>
  );
}
export { App };

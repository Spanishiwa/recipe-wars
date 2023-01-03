import React, { createContext, useMemo, useReducer } from 'react';
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
import { getDispatchHandlers } from '../../reducers/dispatch';
import { appSx, mainSx } from './AppStyles';
// import { RecipesContextProvider } from '../RecipesContext/RecipesContext';

export const RecipesContext = createContext();

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

  const memoizedHandlers = getDispatchHandlers();

  const inputs = state.filter((value) => value.isInput);

  return (
    <RecipesContext.Provider value={recipesContextValue}>
      <NavBar />
      <Container component="main" maxWidth="lg" sx={mainSx}>
        <Box className="app" sx={appSx}>
          <Routes>
            <Route
              path="/recipe-wars"
              element={
                <Showcase handlers={memoizedHandlers} recipeStates={state} />
              }
            ></Route>
            <Route
              path="/faq"
              element={<Faq handleResetAll={memoizedHandlers.handleResetAll} />}
            ></Route>
            <Route
              path="/start"
              element={
                <MuiStepper
                  handlers={memoizedHandlers}
                  inputs={inputs}
                  recipeStates={state}
                  setInputError={memoizedHandlers.setInputError}
                />
              }
            ></Route>
          </Routes>
        </Box>
      </Container>
      <Footer />
    </RecipesContext.Provider>
  );
}
export { App };

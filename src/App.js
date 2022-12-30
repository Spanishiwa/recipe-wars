import React, { Fragment, useEffect, useReducer } from 'react';
import Bg_Pattern_Dark from './assets/Graphcoders_Lil_Fiber.png';
import Bg_Pattern_Light from './assets/Beige_Paper.png';
import Footer from './components/Footer';
import { Box, Container, useTheme } from '@mui/material';
import NavBar from './components/NavBar';
import MuiStepper from './components/MuiStepper';
import { CONFIG } from './config';
import { Faq } from './components/Faq';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Showcase } from './components/Showcase';
import { INIT_INPUTS, INIT_RECIPE_WARS, submitRecipeSnackbar } from './Util';
import {
  resetInputError,
  updateInput,
  createIngredients,
  updateIngredient,
  deleteIngredient,
  deleteRecipe,
  updateImage,
  resetRecipe,
  resetAll,
  updateSelect,
  toggleServingsInput,
  submitRecipe,
  toggleInputDisable,
  updateInputError,
  setFetching,
  setFetchFail,
} from './reducers/actions';
import { rootReducer } from './reducers/rootReducer';

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    rootReducer,
    JSON.parse(localStorage.getItem('values')) || INIT_RECIPE_WARS
  );

  const flattenPayload = (data, name) => {
    return data.ingredients.map((ingredient) => {
      const recipeName = ingredient.recipeName || 'Untitled';
      const validId = (recipeName + ingredient.text)
        .replace(/[^a-zA-Z]+/g, '')
        .slice(-50);
      const { nutrients } = ingredient.parsed[0];

      return {
        id: name || validId,
        text: `${ingredient.parsed[0].quantity} ${ingredient.parsed[0].measure} ${ingredient.parsed[0].foodMatch}`,
        parsed: `${ingredient.parsed[0].quantity} ${ingredient.parsed[0].measure} ${ingredient.parsed[0].foodMatch}`,
        calories: nutrients.ENERC_KCAL.quantity,
        carbohydrate: `${nutrients.CHOCDF.quantity}${nutrients.CHOCDF.unit} carbs`,
        protein: `${nutrients.PROCNT.quantity}${nutrients.PROCNT.unit} protein`,
        fat: `${nutrients.FAT.quantity}${nutrients.FAT.unit} fat`,
        status: ' ',
        isDisabled: true,
        error: false,
        recipeName: recipeName,
      };
    });
  };

  const fetchAPI = (text, name, id) => {
    const { accessRecipe, appId, appKey } = CONFIG;
    const recipeUrl = accessRecipe + appId + appKey;
    const recipePayload = {
      title: 'Untitled',
      ingr: text.split('\n').filter((s) => s.length),
    };

    if (state.filter((value) => value.id === 'isRequesting')[0].isRequesting) {
      return;
    } else {
      dispatch(setFetching());
    }

    fetch(recipeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipePayload),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`${res.status} poor input failed to update`);
        }
        return res.json();
      })
      .then((data) => {
        const flatIngredientsPayload = flattenPayload(data, name);
        const flatIngredientPayload = flatIngredientsPayload[0];

        if (!id.includes('-')) {
          // updating single ingredient
          dispatch(updateIngredient(id, flatIngredientPayload));
        } else {
          dispatch(createIngredients(id, flatIngredientsPayload));
          // appending ingredient(s) and clearing input generator / error / status
        }
      })
      .catch((err) => {
        dispatch(setFetchFail(id, err.message));
      });
  };

  const handleBlur = (e) => {
    dispatch(resetInputError(e));
  };

  const handleChange = (e) => {
    dispatch(updateInput(e));
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteIngredient(e));
  };

  const handleDeleteRecipe = (e) => {
    dispatch(deleteRecipe(e));
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const name =
      e.target.getAttribute('name') || e.currentTarget.getAttribute('name');

    const ingredient = state.filter((ingredient) => ingredient.id === name);
    if (ingredient) fetchAPI(ingredient[0].text, name, name);
  };

  const handleKeyDelete = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      e.preventDefault();
      e.stopPropagation();
      handleDelete(e);
    }
  };

  const handleKeySubmit = (e) => {
    const key = e.which || e.keyCode || 0;
    const isDelete =
      e.target.classList.contains('delete') ||
      e.currentTarget.classList.contains('delete');

    const isSubmit =
      e.target.classList.contains('submit') ||
      e.currentTarget.classList.contains('submit');

    if (key === 13 && isDelete) {
      e.stopPropagation();
      e.preventDefault();

      handleDelete(e);
    } else if (key === 13 && isSubmit) {
      e.stopPropagation();
      e.preventDefault();

      handleSubmit(e);
    }
  };

  const handleImage = (e) => {
    const imgFile = e.target.files[0];
    if (!imgFile) return;
    // clean up previous Blob
    const imgInput = state.filter((input) => input.id === 'image-input')[0];

    if (imgInput?.imgSrc) URL.revokeObjectURL(imgInput.imgSrc);

    dispatch(updateImage(e));
  };

  const handleReset = () => {
    dispatch(resetRecipe());
  };

  const handleResetAll = () => {
    dispatch(resetAll());
  };

  const handleSelect = (e) => {
    dispatch(updateSelect(e));
  };

  const handleServingsToggle = (e) => {
    dispatch(toggleServingsInput(e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name =
      e.target.getAttribute('name') || e.currentTarget.getAttribute('name');
    // code works - ration API calls for testing
    const ingredient = state.filter((ingredient) => ingredient.id === name);

    if (ingredient) fetchAPI(ingredient[0].text, null, name);
  };

  const handleSubmitRecipe = () => {
    dispatch(submitRecipe());

    navigate('/recipe-wars', { state: submitRecipeSnackbar });
  };

  const handleToggleDisable = (e) => {
    e.preventDefault();

    dispatch(toggleInputDisable(e));
  };

  const setInputError = (name, message) => {
    dispatch(updateInputError(name, message));
  };

  const mode = useTheme().palette.mode;
  const bgPattern = mode === 'light' ? Bg_Pattern_Light : Bg_Pattern_Dark;
  const bgColor = mode === 'light' ? '#F5F7FA' : '#121212';
  const appSx = {
    backgroundColor: 'background.default',
    backgroundImage: `url(${bgPattern})`,
    backgroundRepeat: 'repeat',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  };

  useEffect(() => {
    // fix rubber banding scroll
    document.body.style.backgroundColor = bgColor;
    document.body.style.backgroundImage = `url(${bgPattern})`;
    document.body.style.backgroundRepeat = 'repeat';

    return () => {
      document.body.style.backgroundColor = null;
      document.body.style.backgroundImage = null;
      document.body.style.backgroundRepeat = null;
    };
  }, [mode, bgColor, bgPattern]);

  useEffect(() => {
    // save ingredients, recipes, but not inputs to localstorage

    const stateWithInputsReset = [
      ...INIT_INPUTS,
      ...state.filter((v) => !v.isInput || v.id === 'servings-toggle'),
    ];

    localStorage.setItem('values', JSON.stringify(stateWithInputsReset));
  }, [state]);

  const handlers = {
    handleBlur: handleBlur,
    handleChange: handleChange,
    handleDelete: handleDelete,
    handleDeleteRecipe: handleDeleteRecipe,
    handleEdit: handleEdit,
    handleKeyDelete: handleKeyDelete,
    handleKeySubmit: handleKeySubmit,
    handleImage: handleImage,
    handleReset: handleReset,
    handleResetAll: handleResetAll,
    handleServingsToggle: handleServingsToggle,
    handleSelect: handleSelect,
    handleSubmit: handleSubmit,
    handleSubmitRecipe: handleSubmitRecipe,
    handleToggleDisable: handleToggleDisable,
  };

  const inputs = state.filter((value) => value.isInput);

  return (
    <Fragment>
      <NavBar />
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: { xs: '32px 0px', sm: '32px 16px' },
        }}
      >
        <Box className="app" sx={appSx}>
          <Routes>
            <Route
              path="/recipe-wars"
              element={<Showcase handlers={handlers} recipeStates={state} />}
            ></Route>
            <Route
              path="/faq"
              element={<Faq handleResetAll={handleResetAll} />}
            ></Route>
            <Route
              path="/start"
              element={
                <MuiStepper
                  handlers={handlers}
                  inputs={inputs}
                  recipeStates={state}
                  setInputError={setInputError}
                />
              }
            ></Route>
          </Routes>
        </Box>
      </Container>
      <Footer />
    </Fragment>
  );
}
export default App;

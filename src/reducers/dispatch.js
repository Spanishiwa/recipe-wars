import { useContext } from 'react';
import { RecipesContext } from '../components/App/App';
// import { useFetchAPI } from '../Hooks/useFetchAPI';
import {
  resetInputError,
  updateInput,
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
  updateIngredient,
  createIngredients,
} from './actions';
import { flattenPayload } from '../components/App/AppUtil';
import { CONFIG } from '../config';
// import { useEffect } from 'react';
// import { submitRecipeSnackbar } from '../Util';

const getDispatchHandlers = () => {
  // const dispatch = useContext(RecipesContext);
  // console.log(`state: ${state} and dispatch ${dispatch}`);

  const handlers = {
    useFetchAPI(text, name, id) {
      //   useEffect(() => {
      const { accessRecipe, appId, appKey } = CONFIG;
      const recipeUrl = accessRecipe + appId + appKey;
      const recipePayload = {
        title: 'Untitled',
        ingr: text.split('\n').filter((s) => s.length),
      };

      if (
        state.filter((value) => value.id === 'isRequesting')[0].isRequesting
      ) {
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
          if (!res.ok) throw Error(`Poor input failed to update`);

          return res.json();
        })
        .then((data) => {
          const flatIngredientsPayload = flattenPayload(data, name);
          const flatIngredientPayload = flatIngredientsPayload[0];

          if (!id.includes('-')) {
            // updating single ingredient
            dispatch(updateIngredient(id, flatIngredientPayload));
          } else {
            // appending ingredient(s) and clearing input generator / error / status
            dispatch(createIngredients(id, flatIngredientsPayload));
          }
        })
        .catch((err) => dispatch(setFetchFail(id, err.message)));
      //   });
    },

    handleBlur(e) {
      dispatch(resetInputError(e));
    },

    handleChange(e) {
      dispatch(updateInput(e));
    },

    handleDelete(e) {
      e.preventDefault();

      dispatch(deleteIngredient(e));
    },

    handleDeleteRecipe(e) {
      dispatch(deleteRecipe(e));
    },

    handleEdit(e) {
      e.stopPropagation();
      e.preventDefault();

      const name =
        e.target.getAttribute('name') || e.currentTarget.getAttribute('name');

      const ingredient = state.filter((ingredient) => ingredient.id === name);
      if (ingredient) handlers.useFetchAPI(ingredient[0].text, name, name);
    },

    handleKeyDelete(e) {
      const key = e.which || e.keyCode || 0;

      if (key === 13) {
        e.preventDefault();
        e.stopPropagation();
        handlers.handleDelete(e);
      }
    },

    handleKeySubmit(e) {
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

        handlers.handleDelete(e);
      } else if (key === 13 && isSubmit) {
        e.stopPropagation();
        e.preventDefault();

        handlers.handleSubmit(e);
      }
    },

    handleImage(e) {
      const imgFile = e.target.files[0];
      if (!imgFile) return;
      // clean up previous Blob
      const imgInput = state.filter((input) => input.id === 'image-input')[0];

      if (imgInput?.imgSrc) URL.revokeObjectURL(imgInput.imgSrc);

      dispatch(updateImage(e));
    },

    handleReset() {
      dispatch(resetRecipe());
    },

    handleResetAll() {
      dispatch(resetAll());
    },

    handleSelect(e) {
      dispatch(updateSelect(e));
    },

    handleServingsToggle(e) {
      dispatch(toggleServingsInput(e));
    },

    handleSubmit(e) {
      e.preventDefault();

      const name =
        e.target.getAttribute('name') || e.currentTarget.getAttribute('name');
      // code works - ration API calls for testing
      const ingredient = state.filter((ingredient) => ingredient.id === name);

      if (ingredient) handlers.useFetchAPI(ingredient[0].text, null, name);
    },

    handleSubmitRecipe() {
      dispatch(submitRecipe());

      //   navigate('/recipe-wars', { state: submitRecipeSnackbar });
    },

    handleToggleDisable(e) {
      e.preventDefault();

      dispatch(toggleInputDisable(e));
    },

    setInputError(name, message) {
      dispatch(updateInputError(name, message));
    },
  };

  return handlers;
};

export { getDispatchHandlers };

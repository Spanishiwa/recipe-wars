import { useContext } from 'react';
import { RecipesContext } from '../components/App/App';
import { flattenPayload } from '../components/App/AppUtil';
import { CONFIG } from '../config';
import {
  createIngredients,
  setFetchFail,
  setFetching,
  updateIngredient,
} from '../reducers/actions';

const useFetchAPI = (text, name, id) => {
  const { state, dispatch } = useContext(RecipesContext);

  const { accessRecipe, appId, appKey } = CONFIG;
  const recipeUrl = accessRecipe + appId + appKey;
  const recipePayload = {
    title: 'Untitled',
    ingr: text.split('\n').filter((s) => s.length),
  };

  if (state.filter((value) => value.id === 'isRequesting')[0].isRequesting) {
    return;
  }

  dispatch(setFetching());

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
};

export { useFetchAPI };

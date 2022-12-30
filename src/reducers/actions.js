const ACTION_TYPES = {
  RESET_INPUT_ERROR: 'RESET_INPUT_ERROR',
  UPDATE_INPUT: 'UPDATE_INPUT',
  CREATE_INGREDIENTS: 'CREATE_INGREDIENTS',
  UPDATE_INGREDIENT: 'UPDATE_INGREDIENT',
  DELETE_INGREDIENT: 'DELETE_INGREDIENT',
  DELETE_RECIPE: 'DELETE_RECIPE',
  UPDATE_IMAGE: 'UPDATE_IMAGE',
  RESET_RECIPE: 'RESET_RECIPE',
  RESET_ALL: 'RESET_ALL',
  UPDATE_SELECT: 'UPDATE_SELECT',
  TOGGLE_SERVINGS_INPUT: 'TOGGLE_SERVINGS_INPUT',
  SUBMIT_RECIPE: 'SUBMIT_RECIPE',
  TOGGLE_INPUT_DISABLE: 'TOGGLE_INPUT_DISABLE',
  UPDATE_INPUT_ERROR: 'UPDATE_INPUT_ERROR',
  SET_FETCHING: 'SET_FETCHING',
  SET_NOT_FETCHING: 'SET_NOT_FETCHING',
  SET_FETCH_FAIL: 'SET_FETCH_FAIL',
  LOAD_LOCAL_STORAGE: 'LOAD_LOCAL_STORAGE',
};

const {
  RESET_INPUT_ERROR,
  UPDATE_INPUT,
  CREATE_INGREDIENTS,
  UPDATE_INGREDIENT,
  DELETE_INGREDIENT,
  DELETE_RECIPE,
  UPDATE_IMAGE,
  RESET_RECIPE,
  RESET_ALL,
  UPDATE_SELECT,
  TOGGLE_SERVINGS_INPUT,
  SUBMIT_RECIPE,
  TOGGLE_INPUT_DISABLE,
  UPDATE_INPUT_ERROR,
  SET_FETCHING,
  SET_NOT_FETCHING,
  SET_FETCH_FAIL,
  LOAD_LOCAL_STORAGE,
} = ACTION_TYPES;

// action creators

const resetInputError = (e) => {
  return {
    type: RESET_INPUT_ERROR,
    payload: {
      name:
        e.target.getAttribute('name') || e.currentTarget.getAttribute('name'),
    },
  };
};

const updateInput = (e) => {
  return {
    type: UPDATE_INPUT,
    payload: { name: e.target.name, value: e.target.value },
  };
};

const createIngredients = (name, flatIngredients) => {
  return {
    type: CREATE_INGREDIENTS,
    payload: {
      flatIngredients: flatIngredients,
      name: name,
    },
  };
};

const updateIngredient = (name, flatIngredient) => {
  return {
    type: UPDATE_INGREDIENT,
    payload: {
      name: name,
      flatIngredient: flatIngredient,
    },
  };
};

const deleteIngredient = (e) => {
  return {
    type: DELETE_INGREDIENT,
    payload: {
      name:
        e.target.getAttribute('name') || e.currentTarget.getAttribute('name'),
    },
  };
};

const deleteRecipe = (e) => {
  return {
    type: DELETE_RECIPE,
    payload: {
      recipeName:
        e.target.getAttribute('data-recipe-name') ||
        e.currentTarget.getAttribute('data-recipe-name'),
    },
  };
};

const updateImage = (e) => {
  return {
    type: UPDATE_IMAGE,
    payload: {
      imgName: e.target.files[0].name,
      imgSrc: URL.createObjectURL(e.target.files[0]),
      name: e.target.name || e.currentTarget.name,
    },
  };
};

const resetRecipe = () => {
  return {
    type: RESET_RECIPE,
  };
};

const resetAll = () => {
  return { type: RESET_ALL };
};

const updateSelect = (e) => {
  return {
    type: UPDATE_SELECT,
    payload: { value: e.target.value || e.currentTarget.value || ' ' },
  };
};

const toggleServingsInput = (e) => {
  return {
    type: TOGGLE_SERVINGS_INPUT,
    payload: {
      name:
        `is${e.target.getAttribute('data-recipe-name')}PerServing` ||
        `is${e.currentTarget.getAttribute('data-recipe-name')}PerServing`,
    },
  };
};

const submitRecipe = () => {
  return { type: SUBMIT_RECIPE };
};

const toggleInputDisable = (e) => {
  return {
    type: TOGGLE_INPUT_DISABLE,
    payload: {
      name:
        e.target.getAttribute('name') || e.currentTarget.getAttribute('name'),
    },
  };
};

const updateInputError = (name, message) => {
  return {
    type: UPDATE_INPUT_ERROR,
    payload: {
      name: name,
      status: message,
    },
  };
};

const setFetching = () => {
  return { type: SET_FETCHING };
};

const setNotFetching = () => {
  return { type: SET_NOT_FETCHING };
};

const setFetchFail = (name, status) => {
  return {
    type: SET_FETCH_FAIL,
    payload: {
      name: name,
      status: status,
    },
  };
};

const loadLocalStorage = (localStorageState) => {
  return {
    type: LOAD_LOCAL_STORAGE,
    payload: { localStorageState: localStorageState },
  };
};

export {
  ACTION_TYPES,
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
  setNotFetching,
  setFetchFail,
  loadLocalStorage,
};

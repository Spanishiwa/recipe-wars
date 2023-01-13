import {
  INIT_RECIPE_WARS,
  createRecipeInputs,
  getRecipeInputValues,
  DEFAULT_INPUTS,
  validHtml,
} from '../Util';
import { ACTION_TYPES } from './actions';
const {
  RESET_INPUT_ERROR,
  UPDATE_INPUT,
  CREATE_INGREDIENTS,
  UPDATE_INGREDIENT,
  DELETE_IMAGE,
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
  SET_DISABLED_RECIPE_INGREDIENTS,
  LOAD_LOCAL_STORAGE,
} = ACTION_TYPES;

const rootReducer = (state, action) => {
  switch (action.type) {
    case RESET_INPUT_ERROR:
      return state.map((prevState) =>
        prevState.id === action.payload.name
          ? { ...prevState, error: false, status: ' ' }
          : prevState
      );
    case UPDATE_INPUT:
      return state.map((prevState) =>
        prevState.id === action.payload.name
          ? { ...prevState, text: action.payload.value }
          : prevState
      );
    case CREATE_INGREDIENTS:
      return [
        ...state.map((prevState) => {
          const isSubmittedInput = prevState.id === action.payload.name;
          if (isSubmittedInput) {
            return {
              ...prevState,
              text: '',
              error: false,
              status: 'Successfully posted',
            };
          }

          if (prevState.id === 'isRequesting') {
            return { ...prevState, isRequesting: false };
          }

          return prevState;
        }),
        // appending new ingredients
        ...action.payload.flatIngredients,
      ];
    case UPDATE_INGREDIENT:
      return state.map((prevState) => {
        if (prevState.id === action.payload.name) {
          return {
            ...action.payload.flatIngredient,
            recipeName: prevState.recipeName,
          };
        }

        if (prevState.id === 'isRequesting') {
          return { ...prevState, isRequesting: false };
        }

        return prevState;
      });
    case DELETE_IMAGE:
      return state.map((prevState) => {
        if (prevState.id === `${action.payload.recipeName}image-input`) {
          return { ...prevState, imgSrc: '', imgName: '' };
        }

        return prevState;
      });
    case DELETE_INGREDIENT:
      return state.filter((prevState) => prevState.id !== action.payload.name);
    case DELETE_RECIPE:
      return state.filter(
        (prevState) => prevState.recipeName !== action.payload.recipeName
      );
    case UPDATE_IMAGE:
      return state.map((prevState) =>
        prevState.id === action.payload.name
          ? {
              ...prevState,
              imgSrc: action.payload.imgSrc,
              imgName: action.payload.imgName,
            }
          : prevState
      );
    case RESET_RECIPE:
      return state.map((prevState) => {
        const untitledIngredient =
          prevState.recipeName === 'Untitled' && prevState.parsed;

        if (untitledIngredient) return;

        const defaultInputValue = DEFAULT_INPUTS[prevState.id];

        if (defaultInputValue) return defaultInputValue;
      });
    case RESET_ALL:
      return INIT_RECIPE_WARS;
    case UPDATE_SELECT:
      return state.map((prevState) =>
        prevState.id === action.payload.name
          ? { ...prevState, text: action.payload.value }
          : prevState
      );
    case TOGGLE_SERVINGS_INPUT:
      return state.map((prevState) =>
        prevState.id === action.payload.name
          ? { ...prevState, isPerServing: !prevState.isPerServing }
          : prevState
      );
    case SUBMIT_RECIPE: {
      const recipeState = getRecipeInputValues(state, 'Untitled');
      const recipeName = validHtml(recipeState.title);

      const stateWithFormInputsReset = state.map((prevState) => {
        const defaultInput = DEFAULT_INPUTS[prevState.id];
        if (defaultInput) return defaultInput;

        const untitledIngredient =
          prevState.recipeName === 'Untitled' && prevState.parsed;
        if (untitledIngredient) return { ...prevState, recipeName: recipeName };

        return prevState;
      });

      return [
        ...createRecipeInputs(recipeName, recipeState),
        ...stateWithFormInputsReset,
      ];
    }
    case TOGGLE_INPUT_DISABLE:
      return state.map((prevState) =>
        prevState.id === action.payload.name
          ? { ...prevState, isDisabled: false }
          : prevState
      );
    case UPDATE_INPUT_ERROR:
      return state.map((prevState) =>
        prevState.id === action.payload.name
          ? { ...prevState, error: true, status: action.payload.status }
          : prevState
      );
    case SET_FETCHING:
      return state.map((prevState) =>
        prevState.id === 'isRequesting'
          ? { ...prevState, isRequesting: true }
          : prevState
      );
    case SET_NOT_FETCHING:
      return state.map((prevState) =>
        prevState.id === 'isRequesting'
          ? { ...prevState, isRequesting: false }
          : prevState
      );
    case SET_FETCH_FAIL:
      return state.map((prevState) => {
        if (prevState.id === action.payload.name) {
          return {
            ...prevState,
            error: true,
            status: action.payload.status,
            text: prevState.parsed || prevState.text,
          };
        }

        if (prevState.id === 'isRequesting') {
          return { ...prevState, isRequesting: false };
        }

        return prevState;
      });
    case SET_DISABLED_RECIPE_INGREDIENTS:
      return state.map((prevState) => {
        const isRecipeIngredient =
          prevState.recipeName === action.payload.recipeName &&
          prevState.parsed;

        if (isRecipeIngredient) return { ...prevState, isDisabled: true };

        return prevState;
      });
    case LOAD_LOCAL_STORAGE:
      return action.payload.localStorageState;
    default:
      return state;
  }
};

export { rootReducer };

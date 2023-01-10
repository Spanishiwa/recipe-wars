import {
  INIT_INGREDIENT_INPUT,
  INIT_INGREDIENTS_TEXTAREA,
  INIT_IMAGE_INPUT,
  INIT_TITLE_INPUT,
  INIT_DESCRIPTION_TEXTAREA,
  INIT_RECIPE_TEXTAREA,
  INIT_SERVINGS_INPUT,
  INIT_SERVINGS_TOGGLE,
  INIT_PHOTOS_SELECT_INPUT,
  INIT_RECIPE_WARS,
  createRecipeInputs,
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
          // clearing input generator / error / status
          if (prevState.id === action.payload.name) {
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
      // filter out noRecipeName ingredients and reset inputs
      return state.map((prevState) => {
        if (prevState.parsed && prevState.recipeName === 'Untitled') return;

        switch (prevState.id) {
          case 'Untitledingredient-input':
            return INIT_INGREDIENT_INPUT;
          case 'Untitledingredients-textarea':
            return INIT_INGREDIENTS_TEXTAREA;
          case 'Untitledimage-input':
            return INIT_IMAGE_INPUT;
          case 'Untitledtitle-input':
            return INIT_TITLE_INPUT;
          case 'Untitleddescription-textarea':
            return INIT_DESCRIPTION_TEXTAREA;
          case 'Untitledrecipe-textarea':
            return INIT_RECIPE_TEXTAREA;
          case 'Untitledservings-input':
            return INIT_SERVINGS_INPUT;
          case 'Untitledservings-toggle':
            return INIT_SERVINGS_TOGGLE;
          case 'Untitledphotos-select-input':
            return INIT_PHOTOS_SELECT_INPUT;
          default:
            return prevState;
        }
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
      const recipeState = state.reduce(
        (accum, input) => {
          // get input values
          switch (input.id) {
            case 'Untitledimage-input':
              accum.imgSrc = input.imgSrc;
              accum.imgName = input.imgName;
              return accum;
            case 'Untitledtitle-input':
              accum.title = input.text;
              return accum;
            case 'Untitleddescription-textarea':
              accum.description = input.text;
              return accum;
            case 'Untitledrecipe-textarea':
              accum.instructions = input.text;
              return accum;
            case 'Untitledservings-input':
              accum.servings = input.text;
              return accum;
            case 'Untitledservings-toggle':
              accum.isPerServing = input.isPerServing;
              return accum;
            case 'Untitledphotos-select-input':
              accum.selectText = input.text;
              return accum;
            default:
              return accum;
          }
        },
        {
          imgSrc: '',
          imgName: '',
          title: '',
          description: '',
          instructions: '',
          servings: 1,
          isPerServing: true,
          selectText: '',
        }
      );

      const recipeName = recipeState.title
        .replace(/[^a-zA-Z]+/g, '')
        .slice(-50);

      const stateWithFormInputsReset = state.map((prevState) => {
        if (prevState.recipeName === 'Untitled' && prevState.parsed) {
          //   update recipeName of pending noRecipeName ingredients
          return { ...prevState, recipeName: recipeName };
        }
        switch (prevState.id) {
          // reset recipe inputs
          case 'Untitledingredient-input':
            return INIT_INGREDIENT_INPUT;
          case 'Untitledingredients-textarea':
            return INIT_INGREDIENTS_TEXTAREA;
          case 'Untitledimage-input':
            return INIT_IMAGE_INPUT;
          case 'Untitledtitle-input':
            return INIT_TITLE_INPUT;
          case 'Untitleddescription-textarea':
            return INIT_DESCRIPTION_TEXTAREA;
          case 'Untitledrecipe-textarea':
            return INIT_RECIPE_TEXTAREA;
          case 'Untitledservings-input':
            return INIT_SERVINGS_INPUT;
          case 'Untitledservings-toggle':
            return INIT_SERVINGS_TOGGLE;
          case 'photos-select-input':
            return INIT_PHOTOS_SELECT_INPUT;
          default:
            return prevState;
        }
      });

      // preprend created recipe inputs to state with form inputs reset and ingredients recipe names set
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
        if (
          prevState.recipeName === action.payload.recipeName &&
          prevState.parsed
        ) {
          return { ...prevState, isDisabled: true };
        }

        return prevState;
      });
    case LOAD_LOCAL_STORAGE:
      return action.payload.localStorageState;
    default:
      return state;
  }
};

export { rootReducer };

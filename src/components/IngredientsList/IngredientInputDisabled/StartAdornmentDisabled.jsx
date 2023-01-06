import React, { useContext } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Done } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { editButtonSx, submitButtonSx } from './IngredientDisabledStyles';
import {
  setFetchFail,
  setFetching,
  toggleInputDisable,
  updateIngredient,
} from '../../../reducers/actions';
import { RecipesContext } from '../../Contexts/RecipesContext';
import { SnackbarContext } from '../../Contexts/SnackbarContext';
import { currentlyRequesting, getPOSTBody } from '../../../Util';
import { CONFIG } from '../../../config';

export const StartAdornmentDisabled = (props) => {
  const { handleKeySubmit, ingredient } = props;
  const { id } = ingredient;
  const { state, dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);

  const handleEdit = () => {
    if (currentlyRequesting(state)) return;

    dispatch(setFetching());
    showAlert('Fetching edited ingredient', 'info');

    fetch(CONFIG.recipeURL, getPOSTBody(ingredient))
      .then((res) => {
        if (!res.ok) throw Error(`Poor input failed to update`);

        return res.json();
      })
      .then((data) => dispatch(updateIngredient(data, id)))
      .catch((err) => dispatch(setFetchFail(id, err.message)));
  };

  const handleToggleDisable = (e) => dispatch(toggleInputDisable(e));

  return (
    <InputAdornment name={id} position="start">
      <IconButton
        aria-label="Edit parsed ingredient"
        className="edit"
        edge="end"
        name={id}
        sx={editButtonSx}
        onClick={handleToggleDisable}
        title="Edit ingredient"
      >
        <EditIcon name={id} variant="standard" />
      </IconButton>
      <IconButton
        aria-label="Submit parsed ingredient"
        className="submit"
        edge="end"
        name={id}
        onClick={handleEdit}
        onKeyDown={handleKeySubmit}
        sx={submitButtonSx}
        title="Save your edits to the ingredients list"
      >
        <Done name={id} variant="standard" />
      </IconButton>
    </InputAdornment>
  );
};

StartAdornmentDisabled.propTypes = {
  handleKeySubmit: PropTypes.func.isRequired,
  ingredient: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    parsed: PropTypes.string.isRequired,
    calories: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    carbohydrate: PropTypes.string.isRequired,
    protein: PropTypes.string.isRequired,
    fat: PropTypes.string.isRequired,
    status: PropTypes.string,
    isDisabled: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    recipeName: PropTypes.string.isRequired,
  }).isRequired,
};

import React, { useContext } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Done } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { editButtonSx, submitButtonSx } from './IngredientDisabledStyles';
import { toggleInputDisable } from '../../reducers/actions';
import { RecipesContext } from '../App/RecipesContext';

export const StartAdornmentDisabled = (props) => {
  const { handleKeySubmit, id } = props;
  const { state, dispatch } = useContext(RecipesContext);

  const handleEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const name =
      e.target.getAttribute('name') || e.currentTarget.getAttribute('name');

    const ingredient = state.filter((ingredient) => ingredient.id === name);
    // if (ingredient) useFetchAPI(ingredient[0].text, name, name);
    if (ingredient) return;
  };

  const handleToggleDisable = (e) => {
    e.preventDefault();

    dispatch(toggleInputDisable(e));
  };

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
  id: PropTypes.string.isRequired,
};

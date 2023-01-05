import React, { useContext } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { RecipesContext } from '../Contexts/RecipesContext';
import { deleteIngredient } from '../../reducers/actions';
import { deleteButtonSx } from './IngredientDisabledStyles';

export const EndAdornmentDisabled = (props) => {
  const { id } = props;
  const { dispatch } = useContext(RecipesContext);

  const handleKeyDelete = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
      e.preventDefault();
      e.stopPropagation();

      dispatch(deleteIngredient(e));
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteIngredient(e));
  };

  return (
    <InputAdornment name={id} onKeyDown={handleKeyDelete} position="end">
      <IconButton
        aria-label="Delete ingredient"
        className="delete"
        edge="end"
        name={id}
        onClick={handleDelete}
        onKeyDown={handleKeyDelete}
        sx={deleteButtonSx}
        title="Delete ingredient from ingredients list"
      >
        <DeleteIcon name={id} onKeyDown={handleKeyDelete} variant="outlined" />
      </IconButton>
    </InputAdornment>
  );
};

EndAdornmentDisabled.propTypes = { id: PropTypes.string.isRequired };

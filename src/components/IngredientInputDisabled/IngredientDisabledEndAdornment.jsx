import React from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

export const IngredientDisabledEndAdornment = (props) => {
  const { handleDelete, handleKeyDelete, id } = props;

  const deleteButtonSx = {
    color: 'error.main',
    '&:hover': { color: 'error.main' },
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

IngredientDisabledEndAdornment.propTypes = {
  handleDelete: PropTypes.func,
  handleKeyDelete: PropTypes.func,
  id: PropTypes.string.isRequired,
};

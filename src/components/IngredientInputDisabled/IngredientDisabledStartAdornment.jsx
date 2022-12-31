import React from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Done } from '@mui/icons-material';
import PropTypes from 'prop-types';

export const IngredientDisabledStartAdornment = (props) => {
  const { handleEdit, handleKeySubmit, handleToggleDisable, id } = props;

  const editButtonSx = {
    color: 'text.primary',
    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      color: 'primary.main',
    },
  };

  const submitButtonSx = {
    color: 'primary.main',
    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      color: 'primary.main',
    },
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

IngredientDisabledStartAdornment.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleKeySubmit: PropTypes.func.isRequired,
  handleToggleDisable: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

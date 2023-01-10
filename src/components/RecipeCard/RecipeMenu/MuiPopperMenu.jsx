import React, { useContext } from 'react';
import {
  ClickAwayListener,
  Divider,
  ListItemIcon,
  MenuItem,
  MenuList,
} from '@mui/material';
import { Edit, EditOff } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { SnackbarContext } from '../../Contexts/SnackbarContext';
import { RecipesContext } from '../../Contexts/RecipesContext';
import {
  deleteRecipe,
  setDisabledRecipeIngredients,
} from '../../../reducers/actions';

export const MuiPopperMenu = (props) => {
  const {
    isEditable,
    handleClose,
    handleListKeyDown,
    open,
    recipeName,
    setIsEditable,
  } = props;

  const { dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);

  const handleDeleteRecipeFromMenu = (e) => {
    dispatch(deleteRecipe(recipeName));

    showAlert('Deleting Recipe', 'success');
    handleClose(e);
  };

  const handleToggleEditable = (e) => {
    handleClose(e);

    if (!isEditable) {
      showAlert('Edit recipe mode enabled', 'info');
      return setIsEditable(true);
    }

    showAlert('Saving edits', 'success');
    dispatch(setDisabledRecipeIngredients(recipeName));
    setIsEditable(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <MenuList
        autoFocusItem={open}
        id="composition-menu"
        aria-labelledby="composition-button"
        onKeyDown={handleListKeyDown}
      >
        <MenuItem onClick={handleToggleEditable}>
          <ListItemIcon>
            {isEditable ? (
              <EditOff color="success" />
            ) : (
              <Edit color="primary" />
            )}
          </ListItemIcon>
          {isEditable ? 'Save Recipe' : 'Edit Recipe'}
        </MenuItem>
        <Divider component="li" variant="middle" />
        <MenuItem onClick={handleDeleteRecipeFromMenu}>
          <ListItemIcon>
            <DeleteIcon color="error" />
          </ListItemIcon>
          Delete Recipe
        </MenuItem>
      </MenuList>
    </ClickAwayListener>
  );
};

MuiPopperMenu.propTypes = {
  isEditable: PropTypes.bool,
  handleClose: PropTypes.func,
  handleListKeyDown: PropTypes.func,
  open: PropTypes.bool,
  recipeName: PropTypes.string,
  setIsEditable: PropTypes.func,
};

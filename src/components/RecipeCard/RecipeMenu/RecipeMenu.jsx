import { Edit, EditOff, MoreVert } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  deleteRecipe,
  setDisabledRecipeIngredients,
} from '../../../reducers/actions';
import { RecipesContext } from '../../Contexts/RecipesContext';
import { getMenuButtonSx, topLeftOrigin } from './RecipeMenuStyles';
import { SnackbarContext } from '../../Contexts/SnackbarContext';
import { getInput } from '../../../Util';
import { RecipeTextfield } from '../../RecipeTextfield/RecipeTextfield';

export const RecipeMenu = (props) => {
  const { state, dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);
  const { pathname } = useLocation();

  const { setIsEditable, isEditable, recipeName } = props;

  // MUI Positioned menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDeleteRecipeFromMenu = () => {
    dispatch(deleteRecipe(recipeName));

    showAlert('Deleting Recipe', 'success');
    handleClose();
  };

  const handleToggleEditable = () => {
    handleClose();

    if (!isEditable) {
      showAlert('Edit recipe mode enabled', 'info');
      return setIsEditable(true);
    }

    showAlert('Saving edits', 'success');
    dispatch(setDisabledRecipeIngredients(recipeName));
    setIsEditable(false);
  };

  const menuButtonSx = getMenuButtonSx(pathname);

  const title = getInput(state, `${recipeName}title-input`).text;

  return (
    <Box sx={{ display: 'flex', minHeight: '64px', p: '0px 16px 16px 16px ' }}>
      <IconButton
        aria-controls={open ? 'recipe-positioned-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        aria-label="show more actions"
        color="primary"
        id="recipe-positioned-button"
        onClick={handleClick}
        sx={menuButtonSx}
        size="large"
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="recipe-positioned-menu"
        aria-labelledby="recipe-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={topLeftOrigin}
        transformOrigin={topLeftOrigin}
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
      </Menu>
      {isEditable ? (
        <RecipeTextfield
          label="Recipe title"
          helperText=""
          name={`${recipeName}title-input`}
          placeholder="e.g. Abuela's dirty beans syrniki"
          required={false}
          title="Enter a concise, cogent, and exciting title"
        />
      ) : (
        <Typography component="h5" variant="h5">
          {title}
        </Typography>
      )}
    </Box>
  );
};

RecipeMenu.propTypes = {
  setIsEditable: PropTypes.func,
  isEditable: PropTypes.bool,
  recipeName: PropTypes.string,
};

import { MoreVert } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteRecipe } from '../../reducers/actions';
import { RecipesContext } from '../Contexts/RecipesContext';
import { getMenuButtonSx, topLeftOrigin } from './RecipeMenuStyles';
import { SnackbarContext } from '../Contexts/SnackbarContext';

export const RecipeMenu = (props) => {
  const { dispatch } = useContext(RecipesContext);
  const { showAlert } = useContext(SnackbarContext);
  const { pathname } = useLocation();

  const { recipeName, title } = props;

  // MUI Positioned menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDeleteRecipeFromMenu = (e) => {
    dispatch(deleteRecipe(e));

    showAlert('Deleting Recipe', 'success');
    handleClose();
  };

  const menuButtonSx = getMenuButtonSx(pathname);

  return (
    <Typography component="h5" sx={{ pb: 2, pl: 2 }} variant="h5">
      <IconButton
        aria-controls={open ? 'recipe-positioned-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        aria-label="show more actions"
        color="primary"
        data-recipe-name={recipeName}
        id="recipe-positioned-button"
        onClick={handleClick}
        sx={menuButtonSx}
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
        <MenuItem
          data-recipe-name={recipeName}
          onClick={handleDeleteRecipeFromMenu}
        >
          <ListItemIcon>
            <DeleteIcon color="error" />
          </ListItemIcon>
          Delete Recipe
        </MenuItem>
      </Menu>
      {title}
    </Typography>
  );
};

RecipeMenu.propTypes = {
  recipeName: PropTypes.string.isRequired,
  title: PropTypes.string,
};

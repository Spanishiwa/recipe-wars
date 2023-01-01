import { MoreVert } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RecipeMenu = (props) => {
  const { pathname } = useLocation();
  const { handleDeleteRecipe, recipeName, showAlert, title } = props;

  // MUI Positioned menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDeleteRecipeFromMenu = (e) => {
    handleDeleteRecipe(e);
    showAlert('Deleting Recipe', 'success');
    handleClose();
  };

  const topLeftOrigin = {
    vertical: 'top',
    horizontal: 'left',
  };

  const menuButtonSx = {
    mr: 2,
    verticalAlign: 'middle',
    visibility: pathname === '/start' ? 'hidden' : 'visible',
  };

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
        sx={{ menuButtonSx }}
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
  handleDeleteRecipe: PropTypes.func,
  recipeName: PropTypes.string,
  showAlert: PropTypes.func,
  title: PropTypes.string,
};

import { MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";

export const RecipeMenu = (props) => {
  const { pathname } = useLocation();
  const { handleDeleteRecipe, recipeName, showAlert } = props;

  // MUI Positioned menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteRecipeFromMenu = (e) => {
    handleDeleteRecipe(e);
    showAlert("Deleting Recipe", "success");
    handleClose();
  };

  return (
    <Fragment>
      <IconButton
        aria-controls={open ? "recipe-positioned-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        aria-label="show more actions"
        color="primary"
        data-recipe-name={recipeName}
        id="recipe-positioned-button"
        onClick={handleClick}
        sx={{
          mr: 2,
          verticalAlign: "middle",
          visibility: pathname === "/recipe-wars" ? "visible" : "hidden"
        }}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="recipe-positioned-menu"
        aria-labelledby="recipe-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
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
    </Fragment>
  );
};

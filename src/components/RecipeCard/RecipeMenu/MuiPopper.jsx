import React, { useEffect, useState, useRef } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Box, Grow, IconButton, Paper, Popper } from '@mui/material';
import { getMenuButtonSx, titleContainerSx } from './RecipeMenuStyles';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MuiPopperMenu } from './MuiPopperMenu';

export const MuiPopper = (props) => {
  const { children, isEditable, recipeName, setIsEditable } = props;
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) return;
    setOpen(false);
  };

  function handleListKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const menuButtonSx = getMenuButtonSx(pathname);

  return (
    <Box display="flex" sx={titleContainerSx}>
      <IconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={menuButtonSx}
        size="large"
      >
        <MoreVert />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        sx={{ zIndex: 1 }}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
            <Paper>
              <MuiPopperMenu
                isEditable={isEditable}
                handleClose={handleClose}
                handleListKeyDown={handleListKeyDown}
                open={open}
                recipeName={recipeName}
                setIsEditable={setIsEditable}
              />
            </Paper>
          </Grow>
        )}
      </Popper>
      {children}
    </Box>
  );
};

MuiPopper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  isEditable: PropTypes.bool,
  recipeName: PropTypes.string,
  setIsEditable: PropTypes.func,
};

import { AppBar, Toolbar, useTheme } from '@mui/material';
import React from 'react';
import Bg_Pattern_Light from '../../assets/Beige_Paper.png';
import Bg_Pattern_Dark from '../../assets/Maze_Black.png';
import { IconButtonsGroup } from './IconButtonsGroup';
import { LogoTitle } from './LogoTitle';

const NavBar = () => {
  const mode = useTheme().palette.mode;
  const bgPattern = mode === 'light' ? Bg_Pattern_Light : Bg_Pattern_Dark;

  const toolbarSx = {
    flexDirection: 'row',
    justifyContent: { xs: 'center' },
    margin: { lg: 'auto' },
    maxWidth: 'lg',
    width: { lg: '100%' },
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ backgroundImage: `url(${bgPattern})` }}>
        <Toolbar sx={toolbarSx}>
          <LogoTitle />
          <IconButtonsGroup />
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* second toolbar for height when AppBar goes sticky as per MUI docs */}
    </React.Fragment>
  );
};

export default NavBar;

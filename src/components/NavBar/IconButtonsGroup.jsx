import { Button, Divider, Stack, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import ColorModeContext from '../Contexts/ColorModeContext';
import {
  GitHub,
  Help,
  LightMode,
  LocalDining,
  Nightlight,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { getNavButtonStyles, iconButtonsContainerSx } from './NavBarStyles';

export const IconButtonsGroup = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  const mode = useTheme().palette.mode;
  const colorModeIcon = mode === 'light' ? <Nightlight /> : <LightMode />;
  const navButtonStyles = getNavButtonStyles(mode);

  return (
    <Stack
      divider={<Divider flexItem orientation="vertical" />}
      sx={iconButtonsContainerSx}
    >
      <Button
        onClick={toggleColorMode}
        sx={navButtonStyles}
        title="Toggle color theme"
      >
        {colorModeIcon}
        THEME
      </Button>
      <Button
        component={RouterLink}
        sx={navButtonStyles}
        title="Start Page"
        to="/start"
      >
        <LocalDining />
        START
      </Button>
      <Button
        component={RouterLink}
        sx={navButtonStyles}
        title="Frequently Asked Questions"
        to="/faq"
      >
        <Help />
        FAQ
      </Button>
      <Button
        component="a"
        href="https://github.com/Spanishiwa/recipe-wars"
        rel="noopener"
        sx={navButtonStyles}
        target="_blank"
        title="GitHub repository"
      >
        <GitHub />
        GitHub
      </Button>
    </Stack>
  );
};

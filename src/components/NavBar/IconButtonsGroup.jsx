import { Button, Divider, Stack, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import ColorModeContext from '../ColorModeContext/ColorModeContext';
import {
  GitHub,
  Help,
  LightMode,
  LocalDining,
  Nightlight,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export const IconButtonsGroup = () => {
  const colorMode = useContext(ColorModeContext);

  const mode = useTheme().palette.mode;

  const colorModeIcon = mode === 'light' ? <Nightlight /> : <LightMode />;

  const hoverSx =
    mode === 'light' ? { '&:hover': { background: 'rgb(83, 140, 0)' } } : {};

  const navButtonStyles = {
    color: mode === 'light' ? 'secondary.main' : 'primary.main',
    cursor: 'pointer',
    display: 'flex',
    flex: '1 1 0px',
    flexDirection: 'column',
    px: 2,
    ...hoverSx,
  };

  return (
    <Stack
      alignItems="center"
      divider={<Divider flexItem orientation="vertical" />}
      direction="row"
      flex={{ xs: '1 1 auto', sm: '0.1 1 auto' }}
    >
      <Button
        onClick={colorMode.toggleColorMode}
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

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Recipe_Icon from '../../assets/recipe_icon.png';
import { Box, Link, Typography, useTheme } from '@mui/material';

export const LogoTitle = () => {
  const mode = useTheme().palette.mode;

  return (
    <Box display={{ xs: 'none', sm: 'flex' }} flexGrow={1} gap={2}>
      <Link
        color="inherit"
        component={RouterLink}
        display="flex"
        to="/recipe-wars"
        sx={{ alignItems: 'center', gap: 2 }}
        title="Homepage"
        underline="none"
      >
        <img alt="Recipe Wars logo" height="48" src={Recipe_Icon} width="48" />
        <Typography
          color={mode === 'light' ? 'text.dark' : 'primary.main'}
          component="h1"
          fontWeight="500"
          variant="h5"
        >
          RECIPE WARS
        </Typography>
      </Link>
    </Box>
  );
};

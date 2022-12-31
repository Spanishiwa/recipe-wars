import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { GitHub, Help, Home, LocalDining } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export const IconLinksGroup = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }} gap={4}>
      <Link
        component={RouterLink}
        to="/recipe-wars"
        rel="noopener"
        title="Homepage"
        variant="b1"
      >
        <Home sx={{ verticalAlign: 'middle' }} />
        <Typography component="span" sx={{ ml: 1 }} variant="b1">
          HOME
        </Typography>
      </Link>
      <Link
        component={RouterLink}
        to="/start"
        rel="noopener"
        title="Customize your recipe page"
        variant="b1"
      >
        <LocalDining sx={{ verticalAlign: 'middle' }} />
        <Typography component="span" sx={{ ml: 1 }} variant="b1">
          START
        </Typography>
      </Link>
      <Link
        component={RouterLink}
        to="/faq"
        rel="noopener"
        title="Frequently Asked Questions page"
        variant="b1"
      >
        <Help sx={{ verticalAlign: 'middle' }} />
        <Typography component="span" sx={{ ml: 1 }} variant="b1">
          FAQ
        </Typography>
      </Link>
      <Link
        component="a"
        href="https://github.com/Spanishiwa/recipe-wars"
        rel="noopener"
        sx={{ paddingRight: '18px' }}
        target="_blank"
        title="GitHub source code"
        variant="b1"
      >
        <GitHub sx={{ verticalAlign: 'middle' }} />
        <Typography component="span" sx={{ ml: 1 }} variant="b1">
          GITHUB
        </Typography>
      </Link>
    </Box>
  );
};

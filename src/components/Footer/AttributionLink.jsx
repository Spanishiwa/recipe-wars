import React from 'react';
import { Box, Link } from '@mui/material';
import Edamam_Badge_Transparent from '../../assets/Edamam_Badge_Transparent.svg';

export const AttributionLink = () => {
  return (
    <Link
      component="a"
      href="https://developer.edamam.com/attribution"
      rel="noopener"
      sx={{ display: 'inline-block' }}
      target="_blank"
      title="Edamam API logo and attribution"
    >
      <Box
        alt="Powered by Edamam"
        component="img"
        className="logo-edamam"
        src={Edamam_Badge_Transparent}
        sx={{ display: 'block', height: '50px' }}
      />
    </Link>
  );
};

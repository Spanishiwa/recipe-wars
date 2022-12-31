import React from 'react';
import Bg_Pattern_Dark from '../../assets/Debut_Dark.png';
import Bg_Pattern_Light from '../../assets/Back_Pattern.png';
import { Box, useTheme } from '@mui/material';
import { IconLinksGroup } from './IconLinksGroup';
import { AttributionLink } from './AttributionLink';

function Footer() {
  const mode = useTheme().palette.mode;

  const footerSx =
    mode === 'light'
      ? {
          backgroundColor: 'primary.light',
          backgroundImage: `url(${Bg_Pattern_Light})`,
          borderTop: '1px solid rgba(0, 0, 0, 0.23)',
        }
      : {
          backgroundColor: 'background.default',
          backgroundImage: `url(${Bg_Pattern_Dark})`,
        };

  const footerAttributes = {
    component: 'footer',
    sx: {
      display: 'flex',
      ...footerSx,

      padding: {
        xs: '16px',
        sm: '16px 16px 16px 12px',
        lg: '16px',
      },
    },
  };

  return (
    <Box {...footerAttributes}>
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          margin: 'auto',
          maxWidth: '1200px',
          padding: { sm: '0px 0px 0px 0px' },
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flex: '1 1 auto',
            justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
            margin: { lg: 'auto' },
            maxWidth: 'lg',
            width: { xs: 'auto', lg: '100%' },
          }}
        >
          <AttributionLink />
          <IconLinksGroup />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

import { Box } from '@mui/system';
import React from 'react';
import Edamam_Badge_Transparent from '../assets/Edamam_Badge_Transparent.svg';
import Bg_Pattern_Dark from '../assets/Debut_Dark.png';
// import Bg_Pattern_Light from "../assets/Beige_Paper.png";
import Bg_Pattern_Light from '../assets/Back_Pattern.png';
import { Link, Typography, useTheme } from '@mui/material';
import { GitHub, Help, Home, LocalDining } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

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
          <Link
            component="a"
            href="https://developer.edamam.com/attribution"
            rel="noopener"
            sx={{
              display: 'inline-block',
            }}
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
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

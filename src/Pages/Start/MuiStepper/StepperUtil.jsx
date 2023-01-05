import React from 'react';
import Bg_Pattern_Light from '../../../assets/Back_Pattern.png';
import Bg_Pattern_Dark from '../../../assets/Debut_Dark.png';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const getActionSx = (mode) => {
  if (mode === 'light') {
    return {
      backgroundColor: 'primary.light',
      backgroundImage: `url(${Bg_Pattern_Light})`,
      padding: '16px',
    };
  } else {
    return {
      backgroundColor: 'background.default',
      backgroundImage: `url(${Bg_Pattern_Dark})`,
      padding: '16px',
    };
  }
};

const getNextEndIcon = (direction) => {
  if (direction === 'rtl') return <KeyboardArrowLeft />;

  return <KeyboardArrowRight />;
};

const getBackStartIcon = (direction) => {
  if (direction === 'rtl') return <KeyboardArrowRight />;

  return <KeyboardArrowLeft />;
};

export { getActionSx, getBackStartIcon, getNextEndIcon };

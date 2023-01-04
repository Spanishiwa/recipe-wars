const leftCaptionSx = {
  display: { xs: 'none', sm: 'inline' },
  verticalAlign: 'middle',
};

const getServingsSwitchLeftSx = (isPerServing) => {
  return {
    ...(!isPerServing && { color: 'primary.main' }),
    cursor: 'pointer',
    '&:hover': { color: 'primary.main' },
  };
};

const getServingsSwitchRightSx = (isPerServing) => {
  return {
    ...(isPerServing && { color: 'primary.main' }),
    cursor: 'pointer',
    '&:hover': { color: 'primary.main' },
  };
};

const servingsSwitchSx = {
  '.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary': {
    color: 'primary.main',
  },
};

export {
  getServingsSwitchLeftSx,
  getServingsSwitchRightSx,
  leftCaptionSx,
  servingsSwitchSx,
};

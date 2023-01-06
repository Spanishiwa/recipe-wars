const getIngredientsBorderStyle = (mode) => {
  if (mode === 'light') {
    return 'thin solid rgba(0, 0, 0, 0.12)';
  } else {
    return 'thin solid rgba(255, 255, 255, 0.12)';
  }
};

const getIngredientsHeaderSx = (mode) => {
  return {
    borderBottom: getIngredientsBorderStyle(mode),
    fontWeight: 400,
    padding: '0px 0px 24px 16px',
  };
};

const ingrPadding = {
  minHeight: '103px',
  marginBottom: '-24px',
  padding: '8px 8px 16px 8px',
};

const listSx = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0px',
  top: '-1px',
};

const listSubheaderSx = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
  padding: {
    xs: '16px 0px 0px 0px',
    sm: '16px 0px 0px 0px',
    md: '0px 16px',
  },
  top: '-1px',
  zIndex: 2,
};

export { getIngredientsHeaderSx, ingrPadding, listSubheaderSx, listSx };

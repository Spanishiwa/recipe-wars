const getIngredientsBorderStyle = (mode) => {
  if (mode === 'light') {
    return 'thin solid rgba(0, 0, 0, 0.12)';
  } else {
    return 'thin solid rgba(255, 255, 255, 0.12)';
  }
};

const getIngredientsHeaderSx = (isEditable, mode) => {
  return {
    borderBottom: getIngredientsBorderStyle(mode),
    padding: isEditable ? '27px 16px' : '27px 16px',
  };
};

const ingrPadding = (isEditable) => {
  return {
    marginBottom: isEditable ? '-16px' : '-28px',
    padding: isEditable
      ? '0px 16px 8px 16px'
      : { xs: '0px 16px 8px 16px', md: '0px 16px 8px 28px' },
  };
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
  '&.MuiListSubheader-sticky': { color: 'inherit' },
  padding: { xs: '0px', md: '0px 16px' },
  top: '-1px',
  zIndex: 2,
};

const receiptLongSx = { mr: 2, verticalAlign: 'bottom' };

export {
  getIngredientsHeaderSx,
  ingrPadding,
  listSubheaderSx,
  listSx,
  receiptLongSx,
};

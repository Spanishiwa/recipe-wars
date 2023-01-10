const hoverSx = (mode) => {
  if (mode === 'light') return { '&:hover': { background: 'rgb(83, 140, 0)' } };
  return {};
};

const getNavButtonStyles = (mode) => {
  return {
    color: mode === 'light' ? 'secondary.main' : 'primary.main',
    cursor: 'pointer',
    display: 'flex',
    flex: '1 1 0px',
    flexDirection: 'column',
    px: 2,
    ...hoverSx(mode),
  };
};

const iconButtonsContainerSx = {
  alignItems: 'center',
  flexDirection: 'row',
  flex: { xs: '1 1 auto', sm: '0.1 1 auto' },
};

const toolbarSx = {
  flexDirection: 'row',
  justifyContent: { xs: 'center' },
  margin: { lg: 'auto' },
  maxWidth: '1192px',
  paddingLeft: { sm: '20px' },
  paddingRight: { sm: 0 },
  width: { lg: '100%' },
};

export { getNavButtonStyles, iconButtonsContainerSx, toolbarSx };

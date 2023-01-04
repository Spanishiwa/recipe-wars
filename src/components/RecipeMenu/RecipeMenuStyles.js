const getMenuButtonSx = (pathname) => {
  return {
    mr: 2,
    verticalAlign: 'middle',
    visibility: pathname === '/start' ? 'hidden' : 'visible',
  };
};

const topLeftOrigin = {
  vertical: 'top',
  horizontal: 'left',
};

export { getMenuButtonSx, topLeftOrigin };

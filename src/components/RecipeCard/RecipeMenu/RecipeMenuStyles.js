const getMenuButtonSx = (pathname) => {
  return {
    color: '#66bb6a',
    p: 2,
    verticalAlign: 'middle',
    visibility: pathname === '/start' ? 'hidden' : 'visible',
  };
};

const titleContainerSx = {
  alignItems: 'center',
  padding: { xs: '16px 16px 16px 0px' },
};

const topLeftOrigin = {
  vertical: 'top',
  horizontal: 'left',
};

export { getMenuButtonSx, titleContainerSx, topLeftOrigin };

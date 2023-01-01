const getIngredientsSx = (expand, mode) => {
  return expand
    ? {
        borderTop: { xs: cardActionBorderStyle(mode), md: 'unset' },
        flex: '35%',
        maxHeight: 'auto',
        overflowY: 'auto',
      }
    : {
        flex: '35%',
        maxHeight: '400px',
        overflowY: 'auto',
      };
};

const cardActionBorderStyle = (mode) => {
  mode === 'light'
    ? 'thin solid rgba(0, 0, 0, 0.12)'
    : 'thin solid rgba(255, 255, 255, 0.12)';
};

const getCardActionsSx = (mode) => {
  return {
    borderTop: cardActionBorderStyle(mode),
    borderBottom: { xs: cardActionBorderStyle(mode), md: 'unset' },
    flexFlow: 'row-reverse',
    justifyContent: 'left',
  };
};

const cardContentSx = {
  display: 'flex',
  flexFlow: { xs: 'column-reverse', md: 'row-reverse' },
  padding: '16px 0px 0px 0px',
  '.MuiCardContent-root&:last-child': { pb: 0 },
};

const getCollapseInstructionsSx = (mode) => {
  return {
    borderTop: { xs: 'unset', md: cardActionBorderStyle(mode) },
    flexFlow: 'row-reverse',
    justifyContent: 'left',
    maxHeight: '1200px',
    overflowY: 'auto',
    whiteSpace: 'pre-wrap',
  };
};

export {
  getCardActionsSx,
  getCollapseInstructionsSx,
  cardContentSx,
  getIngredientsSx,
};

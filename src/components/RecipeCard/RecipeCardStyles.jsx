const getIngredientsSx = (expand, mode) => {
  if (expand) {
    return {
      borderTop: { xs: cardActionBorderStyle(mode), md: 'unset' },
      flex: '35%',
      maxHeight: 'auto',
      overflowY: 'auto',
    };
  } else {
    return {
      flex: '35%',
      maxHeight: '510px',
      overflowY: 'auto',
    };
  }
};

const cardActionBorderStyle = (mode) => {
  if (mode === 'light') {
    return 'thin solid rgba(0, 0, 0, 0.12)';
  } else {
    return 'thin solid rgba(255, 255, 255, 0.12)';
  }
};

const getCardActionsSx = (mode) => {
  return {
    boxSizing: 'border-box',
    borderTop: cardActionBorderStyle(mode),
    borderBottom: { xs: cardActionBorderStyle(mode), md: 'unset' },
    flexFlow: 'row-reverse',
    justifyContent: 'left',
    minHeight: '90px',
    pl: 0,
  };
};

const cardContentSx = {
  display: 'flex',
  flexFlow: { xs: 'column-reverse', md: 'row-reverse' },
  padding: '0px',
  '.MuiCardContent-root&:last-child': { pb: 0 },
};

const getCollapseInstructionsSx = (mode) => {
  return {
    borderTop: { xs: 'unset', md: cardActionBorderStyle(mode) },
    flexFlow: 'row-reverse',
    justifyContent: 'left',
    maxHeight: '1200px',
    overflowY: 'auto',
    padding: '16px',
    whiteSpace: 'pre-wrap',
  };
};

const titleSx = { fontWeight: 500, pr: 2 };

export {
  getCardActionsSx,
  getCollapseInstructionsSx,
  cardContentSx,
  getIngredientsSx,
  titleSx,
};

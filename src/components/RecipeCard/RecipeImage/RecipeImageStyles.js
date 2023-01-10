const getBgColor = (mode) => {
  if (mode === 'light') return '#F5F7FA';

  return '#121212';
};

const getEditableInputsContainerSx = (imgSrc, mode) => {
  return {
    '&::before': {
      backgroundImage: `url(${imgSrc})`,
      content: '""',
      height: '240px',
      backgroundColor: getBgColor(mode),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      objectFit: 'cover',
      opacity: '0.1',
    },
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    height: '240px',
    p: 2,
    position: 'relative',
  };
};

const figcaptionSx = { padding: '32px 16px', whiteSpace: 'pre-wrap' };

const servingsSwitchContainerSx = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  pt: 3,
  mb: '-8px',
};

const svgContainerSx = {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: { xs: '6px', md: '8px' },
  justifyContent: 'space-between',
  rowGap: '24px',
  textAlign: { xs: 'left', sm: 'center' },
  '& :first-of-type': { textAlign: 'left' },
  '& :last-of-type': { textAlign: 'right' },
};

const servingsTextSx = { verticalAlign: 'middle' };

export {
  getEditableInputsContainerSx,
  figcaptionSx,
  servingsSwitchContainerSx,
  servingsTextSx,
  svgContainerSx,
};

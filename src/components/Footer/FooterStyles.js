import Bg_Pattern_Dark from '../../assets/Debut_Dark.png';
import Bg_Pattern_Light from '../../assets/Back_Pattern.png';

const footerBgSx = (mode) => {
  if (mode === 'light') {
    return {
      backgroundColor: 'primary.light',
      backgroundImage: `url(${Bg_Pattern_Light})`,
      borderTop: '1px solid rgba(0, 0, 0, 0.23)',
    };
  } else {
    return {
      backgroundColor: 'background.default',
      backgroundImage: `url(${Bg_Pattern_Dark})`,
    };
  }
};

const getFooterSx = (mode) => {
  return {
    display: 'flex',
    ...footerBgSx(mode),
    padding: {
      xs: '16px',
      sm: '16px 0px 16px 8px',
    },
  };
};

const footerContainerSx = {
  display: 'flex',
  flex: '1 1 auto',
  margin: 'auto',
  maxWidth: '1200px',
};

const footerLinksContainerSx = {
  alignItems: 'center',
  display: 'flex',
  flex: '1 1 auto',
  justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
  margin: { lg: 'auto' },
  maxWidth: 'lg',
  width: { xs: 'auto', lg: '100%' },
};

export { getFooterSx, footerContainerSx, footerLinksContainerSx };

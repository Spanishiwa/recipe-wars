const formOptionalContainerSx = {
  display: 'flex',
  gap: 2,
  padding: '0px 16px 16px 16px',
};

const formOptionalSx = {
  display: 'flex',
  flex: { xs: '1 1 auto', sm: '1 1 auto', md: '65%' },
  flexDirection: 'column',
  pt: { xs: 4, md: 3 },
};

const headerSubtext = {
  display: { xs: 'inline' },
  ml: { xs: '8px' },
  verticalAlign: 'middle',
};

const imageInputDeleteButtonSx = {
  border: '1px solid transparent',
  backgroundColor: 'rgba(211, 47, 47, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(211, 47, 47, 0.2)',
    border: '1px solid #d32f2f',
  },
  verticalAlign: 'middle',
  maxWidth: '100%',
  wordBreak: 'break-all',
};

const imageInputDeleteIconSx = {
  color: 'error.main',
  '&:hover': { color: 'error.main' },
};

const imageInputsContainerSx = {
  display: 'flex',
  flex: '1 1 auto',
  gap: 2,
  justifyContent: 'space-between',
};

const imageInputsFigtextSx = { mb: 4, textAlign: 'center' };

const ingredientsListContainerSx = {
  display: { xs: 'none', md: 'flex' },
  flex: { xs: '1 1 auto', md: '1 1 35%' },
  flexDirection: 'column',
};

const servingsContainerSx = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  my: 4,
};

const noImageUploadedSx = {
  alignItems: 'center',
  display: 'flex',
  minHeight: '39px',
  pl: '12px',
};

const noImageUploadedIconSx = { mr: 1, verticalAlign: 'bottom' };

export {
  formOptionalContainerSx,
  formOptionalSx,
  headerSubtext,
  imageInputDeleteButtonSx,
  imageInputDeleteIconSx,
  imageInputsContainerSx,
  imageInputsFigtextSx,
  ingredientsListContainerSx,
  noImageUploadedIconSx,
  noImageUploadedSx,
  servingsContainerSx,
};

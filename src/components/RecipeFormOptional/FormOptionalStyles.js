const formOptionalSx = {
  display: 'flex',
  flex: { xs: '1 1 auto', sm: '1 1 auto', md: '65%' },
  flexDirection: 'column',
};

const headerSubtext = {
  display: { xs: 'block', md: 'inline' },
  ml: { xs: '0px', md: '8px' },
  verticalAlign: 'middle',
};

const imageInputsContainerSx = {
  display: 'flex',
  flex: '1 1 auto',
  gap: 2,
  justifyContent: 'space-between',
};

const ingredientsListContainerSx = {
  display: { xs: 'none', sm: 'flex' },
  flex: { xs: '1 1 auto', md: '1 1 35%' },
  flexDirection: 'column',
};

const servingsContainerSx = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
};

export {
  formOptionalSx,
  headerSubtext,
  imageInputsContainerSx,
  ingredientsListContainerSx,
  servingsContainerSx,
};

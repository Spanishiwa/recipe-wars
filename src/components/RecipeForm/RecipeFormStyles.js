const formSectionSx = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
  gap: 2,
  p: 2,
};

const formLeftContainerSx = {
  display: 'flex',
  flex: { xs: '1 1 auto', sm: '1 1 auto', md: '65%' },
  flexDirection: 'column',
  rowGap: 2,
};

const formRightContainerSx = {
  display: 'flex',
  flex: { xs: '1 1 auto', sm: '1 1 auto', md: '1 1 35%' },
  flexDirection: 'column',
};

const examplesListSx = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  flexFlow: 'wrap',
  pt: 0,
};

const multilineHeaderSx = {
  mt: '-16px',
  paddingLeft: '32px',
  textIndent: '-32px',
};

const multilineIconSx = {
  verticalAlign: 'middle',
  padding: '8px 8px 8px 0px',
};

const searchIconSx = { padding: '0px 8px 8px 0px', verticalAlign: 'middle' };

const textareaContainerSx = {
  display: 'flex',
  gap: 4,
  margin: {
    xs: '8px 0px 0px 0px',
    sm: '8px 0px 0px 0px',
    md: '8px 0px 0px 0px',
  },
};

export {
  examplesListSx,
  formLeftContainerSx,
  formRightContainerSx,
  formSectionSx,
  multilineHeaderSx,
  multilineIconSx,
  searchIconSx,
  textareaContainerSx,
};

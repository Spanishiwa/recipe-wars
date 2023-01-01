const standardVariantSx = (isDisabled) => {
  if (isDisabled) {
    return { disableUnderline: true };
  } else {
    return {};
  }
};

const containerSx = {
  display: 'flex',
  flexDirection: 'row',
  flex: '1 1 auto',
};

const ingredientInputDisabledSx = {
  flex: '1 1 auto',
  '& .MuiInputBase-root.Mui-disabled .submit': { display: 'none' },
  '& .MuiInputBase-root.Mui-disabled .delete': { display: 'none' },
  '& .MuiInputBase-root.Mui-disabled .edit': { display: 'inline-flex' },
  '& .MuiInputBase-root .edit': { display: 'none' },
  '& .MuiInputBase-adornedEnd.MuiInputBase-adornedStart': {
    paddingLeft: '0px ',
  },
};

export { standardVariantSx, containerSx, ingredientInputDisabledSx };

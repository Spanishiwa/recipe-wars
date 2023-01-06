const containerSx = {
  display: 'flex',
  flexDirection: 'row',
  flex: '1 1 auto',
  marginTop: '16px',
};

const deleteButtonSx = {
  color: 'error.main',
  '&:hover': { color: 'error.main' },
};

const editButtonSx = {
  color: 'text.primary',
  '&:hover, &.Mui-focusVisible, &.Mui-active': {
    color: 'primary.main',
  },
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

const standardVariantSx = (isDisabled) => {
  if (isDisabled) {
    return { disableUnderline: true };
  } else {
    return {};
  }
};

const submitButtonSx = {
  color: 'primary.main',
  '&:hover, &.Mui-focusVisible, &.Mui-active': {
    color: 'primary.main',
  },
};

export {
  containerSx,
  editButtonSx,
  deleteButtonSx,
  ingredientInputDisabledSx,
  standardVariantSx,
  submitButtonSx,
};

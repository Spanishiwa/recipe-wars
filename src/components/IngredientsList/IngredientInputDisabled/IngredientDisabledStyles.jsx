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

const ingredientInputDisabledSx = (isEditable, pathname) => {
  return {
    flex: '1 1 auto',
    '& .MuiInputBase-root.Mui-disabled': { minHeight: '56px' },
    '& .MuiFormHelperText-root.Mui-disabled': isEditable
      ? { display: 'block' }
      : { display: 'none' },
    '& .MuiInputBase-root.Mui-disabled .submit': { display: 'none' },
    '& .MuiInputBase-root.Mui-disabled .delete': { display: 'none' },
    '& .MuiInputBase-root.Mui-disabled .edit':
      isEditable || pathname === '/start'
        ? { display: 'inline-flex' }
        : { display: 'none' },
    '& .MuiInputBase-root .edit': { display: 'none' },
    '& .MuiInputBase-adornedEnd.MuiInputBase-adornedStart': {
      paddingLeft: '0px ',
    },
  };
};

const standardVariantSx = (mode, isEditable) => {
  if (!isEditable) return;

  return {
    disableUnderline: true,
    sx: {
      '& .MuiInputBase-input.Mui-disabled': {
        color: 'text.primary',
        WebkitTextFillColor:
          mode === 'light' ? '#616E7C' : 'rgba(255,255,255,0.7)',
      },
    },
  };
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

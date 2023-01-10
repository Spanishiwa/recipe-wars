const errorSx = (error) => {
  if (error) {
    return {
      '& .MuiInputBase-root.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'error.main',
      },
      '& .MuiInputLabel-root.Mui-error': {
        color: 'error.main',
      },
      '& .MuiFormHelperText-root.Mui-error': {
        color: 'error.main',
      },
    };
  } else {
    return {};
  }
};

const ingredientInputAdornmentSx = {
  '&:hover, &.Mui-focusVisible, &.Mui-active': {
    color: 'primary.main',
  },
};

const getIngredientInputSx = (error, status) => {
  return {
    flex: 1,
    '& .MuiOutlinedInput-root.Mui-focused .MuiIconButton-root': {
      color: 'primary.main',
    },
    '& .MuiInputLabel-root.Mui-required': {
      display: 'flex',
      flexDirection: 'row-reverse',
      marginLeft: '-5px',
    },
    marginBottom: '-14px',
    ...errorSx(error),
    ...statusSx(status),
  };
};

const statusSx = (status) => {
  if (status.length > 1) {
    return {
      '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'primary.main',
      },
      '& .MuiInputLabel-root': {
        color: 'primary.main',
      },
      '& .MuiFormHelperText-root': {
        color: 'primary.main',
      },
    };
  } else {
    return {};
  }
};

export { getIngredientInputSx, ingredientInputAdornmentSx };

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

const ingredientInputSx = (error, status) => {
  return {
    flex: 1,
    '& .MuiOutlinedInput-root.Mui-focused .MuiIconButton-root': {
      color: 'primary.main',
    },
    ...errorSx(error),
    ...statusSx(status),
  };
};

export { ingredientInputSx };

const getErrorSx = (error) => {
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
const getStatusSx = (status) => {
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

export { getErrorSx, getStatusSx };

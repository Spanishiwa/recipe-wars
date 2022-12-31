import { Box } from '@mui/system';
import React from 'react';
import PropTypes from 'prop-types';
import { IngredientDisabledEndAdornment } from './IngredientDisabledEndAdornment';
import { IngredientDisabledStartAdornment } from './IngredientDisabledStartAdornment';
import { TextField } from '@mui/material';

const IngredientInputDisabled = (props) => {
  const { handlers, ingredient } = props;

  const {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeyDelete,
    handleKeySubmit,
    handleToggleDisable,
  } = handlers;

  const { error, id, isDisabled, status, text } = ingredient;

  const standardVariantSx = isDisabled ? { disableUnderline: true } : {};

  return (
    <Box
      name={id}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flex: '1 1 auto',
      }}
    >
      <TextField
        className={`parsed ${isDisabled ? '' : 'submit'}`}
        disabled={isDisabled}
        error={error}
        helperText={status}
        label={isDisabled ? '' : 'Ingredient & quantity'}
        id={id}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          ...standardVariantSx,
          startAdornment: (
            <IngredientDisabledStartAdornment
              handleEdit={handleEdit}
              handleKeySubmit={handleKeySubmit}
              handleToggleDisable={handleToggleDisable}
              id={id}
            />
          ),
          endAdornment: (
            <IngredientDisabledEndAdornment
              handleDelete={handleDelete}
              handleKeyDelete={handleKeyDelete}
              id={id}
            />
          ),
        }}
        name={id}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={isDisabled ? undefined : handleKeySubmit}
        p={0}
        placeholder={text}
        sx={{
          flex: '1 1 auto',
          '& .MuiInputBase-root.Mui-disabled .submit': { display: 'none' },
          '& .MuiInputBase-root.Mui-disabled .delete': { display: 'none' },
          '& .MuiInputBase-root.Mui-disabled .edit': { display: 'inline-flex' },
          '& .MuiInputBase-root .edit': { display: 'none' },
          '& .MuiInputBase-adornedEnd.MuiInputBase-adornedStart': {
            paddingLeft: '0px ',
          },
        }}
        title="Ingredient parsed through Edamam API"
        type="text"
        value={text}
        variant={isDisabled ? 'standard' : 'outlined'}
      />
    </Box>
  );
};

export default IngredientInputDisabled;

IngredientInputDisabled.propTypes = {
  handlers: PropTypes.shape({
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
    handleKeyDelete: PropTypes.func,
    handleKeySubmit: PropTypes.func,
    handleToggleDisable: PropTypes.func,
  }).isRequired,
  ingredient: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    parsed: PropTypes.string.isRequired,
    calories: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    carbohydrate: PropTypes.string.isRequired,
    protein: PropTypes.string.isRequired,
    fat: PropTypes.string.isRequired,
    status: PropTypes.string,
    isDisabled: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    recipeName: PropTypes.string.isRequired,
  }).isRequired,
};

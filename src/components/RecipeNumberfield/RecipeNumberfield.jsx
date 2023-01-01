import { TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export const RecipeNumberfield = (props) => {
  const { handleChange, label, name, title, value } = props;
  return (
    <TextField
      id={name}
      label={label}
      inputProps={{ min: 1, sx: { textAlign: 'center' } }}
      name={name}
      onChange={handleChange}
      title={title}
      type="number"
      sx={{ maxWidth: '145px' }}
      InputLabelProps={{ shrink: true }}
      value={value}
    />
  );
};

RecipeNumberfield.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
};

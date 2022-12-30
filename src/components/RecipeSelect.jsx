import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export const RecipeSelect = (props) => {
  const { handleSelect, text } = props;
  return (
    <FormControl sx={{ minWidth: 145 }}>
      <InputLabel id="photos-select-input-label">Photo</InputLabel>
      <Select
        displayEmpty
        id="photos-select-input"
        inputProps={{ 'aria-label': 'Choose a preset photo' }}
        label="Photo"
        name="photos-select-input"
        onChange={handleSelect}
        title="Choose from one of our preset photos"
        value={text}
      >
        <MenuItem value=" "></MenuItem>
        <MenuItem value="forkKnife">Fork & Knife</MenuItem>
        <MenuItem value="defaultImg">Tomatos</MenuItem>
        <MenuItem value="grains">Grains & Corn</MenuItem>
        <MenuItem value="colorfulVegetables">Vegetables</MenuItem>
        <MenuItem value="charcuterie">Charcuterie</MenuItem>
        <MenuItem value="cookies">Cocoa Cookies</MenuItem>
      </Select>
      <FormHelperText>Choose a photo</FormHelperText>
    </FormControl>
  );
};

RecipeSelect.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

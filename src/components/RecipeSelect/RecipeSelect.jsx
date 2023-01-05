import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useContext } from 'react';
import { RecipesContext } from '../Contexts/RecipesContext';
import { updateSelect } from '../../reducers/actions';
import { getInput } from '../../Util';

export const RecipeSelect = () => {
  const { state, dispatch } = useContext(RecipesContext);

  const selectText = getInput(state, 'photos-select-input').text;

  const handleSelect = (e) => dispatch(updateSelect(e));

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
        value={selectText}
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

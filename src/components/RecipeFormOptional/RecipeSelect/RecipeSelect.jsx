import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useContext } from 'react';
import { RecipesContext } from '../../Contexts/RecipesContext';
import { updateSelect } from '../../../reducers/actions';
import { getInput } from '../../../Util';
import PropTypes from 'prop-types';

export const RecipeSelect = (props) => {
  const { recipeName } = props;
  const { state, dispatch } = useContext(RecipesContext);

  const selectText = getInput(state, `${recipeName}photos-select-input`).text;

  const handleSelect = (e) => dispatch(updateSelect(e));

  return (
    <FormControl sx={{ minWidth: 130, width: { xs: 'auto', sm: '161px' } }}>
      <InputLabel id={`${recipeName}photos-select-input-label`}>
        Image
      </InputLabel>
      <Select
        displayEmpty
        id={`${recipeName}photos-select-input`}
        inputProps={{ 'aria-label': 'Choose a preset photo' }}
        label="Photo"
        name={`${recipeName}photos-select-input`}
        onChange={handleSelect}
        title="Choose from one of our preset photos"
        value={selectText}
      >
        <MenuItem value=" "></MenuItem>
        <MenuItem value="charcuterie">Charcuterie</MenuItem>
        <MenuItem value="cookies">Cookies</MenuItem>
        <MenuItem value="grains">Grains</MenuItem>
        <MenuItem value="defaultImg">Tomatos</MenuItem>
        <MenuItem value="forkKnife">Utensils</MenuItem>
        <MenuItem value="colorfulVegetables">Vegetables</MenuItem>
      </Select>
      <FormHelperText>Choose an image</FormHelperText>
    </FormControl>
  );
};

RecipeSelect.propTypes = { recipeName: PropTypes.string };

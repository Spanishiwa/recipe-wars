import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import React from "react";

export const RecipeSelect = (props) => {
  const { handleSelect, text } = props;
  return (
    <FormControl sx={{ minWidth: 145 }}>
      <Select
        displayEmpty
        id="photos-select-input"
        inputProps={{ "aria-label": "Choose a preset photo" }}
        name="photos-select-input"
        onChange={handleSelect}
        title="Choose from one of our preset photos"
        value={text}
      >
        <MenuItem value=" ">
          <em>None</em>
        </MenuItem>
        <MenuItem value="forkKnife">Fork & Knife</MenuItem>
        <MenuItem value="defaultImg">Tomatos</MenuItem>
        <MenuItem value="grains">Grains & Corn</MenuItem>
        <MenuItem value="colorfulVegetables">Vegetables</MenuItem>
        <MenuItem value="charcuterie">Charcuterie</MenuItem>
        <MenuItem value="cookies">Cocoa Cookies</MenuItem>
      </Select>
    </FormControl>
  );
};

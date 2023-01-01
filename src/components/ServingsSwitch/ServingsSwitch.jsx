import { InputLabel, Switch } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { ServingsSwitchLeft } from './ServingsSwitchLeft';
import { ServingsSwitchRight } from './ServingsSwitchRight';

export const ServingsSwitch = (props) => {
  const { handleServingsToggle, isPerServing, recipeName } = props;

  const handleKeyDown = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13 || key === 37 || key === 39) {
      e.preventDefault();
      e.stopPropagation();
      handleServingsToggle(e);
    }
  };

  const servingsSwitchSx = {
    '.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary': {
      color: 'primary.main',
    },
  };

  return (
    <InputLabel
      className={recipeName}
      name="servings-toggle"
      onKeyDown={handleKeyDown}
      sx={{ alignItems: 'center', display: 'flex' }}
      title="Display nutritional values per serving or by total amount"
    >
      <ServingsSwitchLeft isPerServing={isPerServing} />
      <Switch
        className={recipeName}
        inputProps={{ 'data-recipe-name': recipeName }}
        name="servings-toggle"
        onChange={handleServingsToggle}
        sx={{ servingsSwitchSx }}
        checked={isPerServing}
      />
      <ServingsSwitchRight isPerServing={isPerServing} />
    </InputLabel>
  );
};

ServingsSwitch.propTypes = {
  handleServingsToggle: PropTypes.func.isRequired,
  isPerServing: PropTypes.bool,
  recipeName: PropTypes.string,
};

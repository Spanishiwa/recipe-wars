import { InputLabel, Switch } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ServingsSwitchLeft } from './ServingsSwitchLeft';
import { ServingsSwitchRight } from './ServingsSwitchRight';
import { RecipesContext } from '../Contexts/RecipesContext';
import { toggleServingsInput } from '../../reducers/actions';
import { servingsSwitchSx } from './ServingsSwitchStyles';

export const ServingsSwitch = (props) => {
  const { isPerServing, recipeName } = props;
  const { dispatch } = useContext(RecipesContext);

  const handleServingsToggle = (e) => dispatch(toggleServingsInput(e));

  const handleKeyDown = (e) => {
    const key = e.which || e.keyCode || 0;

    if (key === 13 || key === 37 || key === 39) {
      e.preventDefault();
      e.stopPropagation();

      handleServingsToggle(e);
    }
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
        checked={isPerServing}
        inputProps={{ 'data-recipe-name': recipeName }}
        name="servings-toggle"
        onChange={handleServingsToggle}
        sx={servingsSwitchSx}
      />
      <ServingsSwitchRight isPerServing={isPerServing} />
    </InputLabel>
  );
};

ServingsSwitch.propTypes = {
  isPerServing: PropTypes.bool.isRequired,
  recipeName: PropTypes.string.isRequired,
};

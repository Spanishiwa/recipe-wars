import { FlatwareRounded, Restaurant } from '@mui/icons-material';
import { InputLabel, Switch, Typography } from '@mui/material';
import React from 'react';

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

  return (
    <InputLabel
      className={recipeName}
      name="servings-toggle"
      onKeyDown={handleKeyDown}
      sx={{ alignItems: 'center', display: 'flex' }}
      title="Display nutritional values per serving or by total amount"
    >
      <Typography
        component="span"
        name="servings-toggle"
        sx={{
          ...(!isPerServing && { color: 'primary.main' }),
          cursor: 'pointer',
          '&:hover': { color: 'primary.main' },
        }}
        title="Display nutritional values by total amount"
        variant="caption"
      >
        <Typography
          component="span"
          name="servings-toggle"
          sx={{
            display: { xs: 'none', sm: 'inline' },
            verticalAlign: 'middle',
          }}
          variant="caption"
        >
          Total
        </Typography>
        <FlatwareRounded sx={{ verticalAlign: 'middle' }}></FlatwareRounded>
      </Typography>
      <Switch
        className={recipeName}
        inputProps={{ 'data-recipe-name': recipeName }}
        name="servings-toggle"
        onChange={handleServingsToggle}
        sx={{
          '.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary': {
            color: 'primary.main',
          },
        }}
        checked={isPerServing}
      />
      <Typography
        component="span"
        name="servings-toggle"
        sx={{
          ...(isPerServing && { color: 'primary.main' }),
          cursor: 'pointer',
          '&:hover': { color: 'primary.main' },
        }}
        title="Display nutritional values per serving"
        variant="caption"
      >
        <Restaurant sx={{ verticalAlign: 'middle' }}></Restaurant>
        <Typography component="span" name="servings-toggle" variant="caption">
          Per serving
        </Typography>
      </Typography>
    </InputLabel>
  );
};

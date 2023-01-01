import { Typography } from '@mui/material';
import React from 'react';
import { Restaurant } from '@mui/icons-material';
import PropTypes from 'prop-types';
export const ServingsSwitchRight = (props) => {
  const { isPerServing } = props;

  const servingsSwitchRightSx = {
    ...(isPerServing && { color: 'primary.main' }),
    cursor: 'pointer',
    '&:hover': { color: 'primary.main' },
  };

  return (
    <Typography
      component="span"
      name="servings-toggle"
      sx={servingsSwitchRightSx}
      title="Display nutritional values per serving"
      variant="caption"
    >
      <Restaurant sx={{ verticalAlign: 'middle' }} />
      <Typography component="span" name="servings-toggle" variant="caption">
        Per serving
      </Typography>
    </Typography>
  );
};

ServingsSwitchRight.propTypes = {
  isPerServing: PropTypes.bool,
};

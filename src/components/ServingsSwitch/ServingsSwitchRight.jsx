import { Typography } from '@mui/material';
import React from 'react';
import { Restaurant } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { getServingsSwitchRightSx } from './ServingsSwitchStyles';

export const ServingsSwitchRight = (props) => {
  const { isPerServing } = props;

  const servingsSwitchRightSx = getServingsSwitchRightSx(isPerServing);

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

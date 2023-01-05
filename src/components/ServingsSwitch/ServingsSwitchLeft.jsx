import { Typography } from '@mui/material';
import React from 'react';
import { FlatwareRounded } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { getServingsSwitchLeftSx, leftCaptionSx } from './ServingsSwitchStyles';

export const ServingsSwitchLeft = (props) => {
  const { isPerServing } = props;

  const servingsSwitchLeftSx = getServingsSwitchLeftSx(isPerServing);

  return (
    <Typography
      component="span"
      name="servings-toggle"
      sx={servingsSwitchLeftSx}
      title="Display nutritional values by total amount"
      variant="caption"
    >
      <Typography
        component="span"
        name="servings-toggle"
        sx={leftCaptionSx}
        variant="caption"
      >
        Total
      </Typography>
      <FlatwareRounded sx={{ verticalAlign: 'middle' }} />
    </Typography>
  );
};

ServingsSwitchLeft.propTypes = {
  isPerServing: PropTypes.bool.isRequired,
};

import { Typography } from '@mui/material';
import React from 'react';
import { FlatwareRounded } from '@mui/icons-material';
import PropTypes from 'prop-types';

export const ServingsSwitchLeft = (props) => {
  const { isPerServing } = props;

  const servingsSwitchLeftSx = {
    ...(!isPerServing && { color: 'primary.main' }),
    cursor: 'pointer',
    '&:hover': { color: 'primary.main' },
  };

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
        sx={{
          display: { xs: 'none', sm: 'inline' },
          verticalAlign: 'middle',
        }}
        variant="caption"
      >
        Total
      </Typography>
      <FlatwareRounded sx={{ verticalAlign: 'middle' }} />
    </Typography>
  );
};

ServingsSwitchLeft.propTypes = {
  isPerServing: PropTypes.bool,
};

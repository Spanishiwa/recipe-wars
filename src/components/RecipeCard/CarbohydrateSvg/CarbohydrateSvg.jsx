import { SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as Carbohydrate } from '../../../assets/Carbohydrate.svg';
import PropTypes from 'prop-types';

export const CarbohydrateSvg = (props) => {
  const { sx, carbohydrate } = props;

  const containerSx = {
    ...sx,
    flex: { xs: '45%', sm: 'auto' },
    minWidth: { xs: '125px', sm: 'inherit' },
    textAlign: { xs: 'right', sm: 'center' },
  };

  const carbohydrateSx = { pl: 1, verticalAlign: 'middle' };

  return (
    <Typography component="span" sx={containerSx} variant="b2">
      <SvgIcon
        sx={{ verticalAlign: 'middle' }}
        titleAccess={`${carbohydrate} grams of carbohydrates`}
      >
        <Carbohydrate></Carbohydrate>
      </SvgIcon>
      <Typography component="span" sx={carbohydrateSx} variant="b1">
        {carbohydrate}g carbs
      </Typography>
    </Typography>
  );
};

CarbohydrateSvg.propTypes = {
  carbohydrate: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

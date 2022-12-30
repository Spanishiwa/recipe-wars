import { SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as Carbohydrate } from '../assets/Carbohydrate.svg';
import PropTypes from 'prop-types';

export const CarbohydrateSvg = (props) => {
  const { sx, carbohydrate } = props;
  return (
    <Typography
      component="span"
      sx={{
        ...sx,
        flex: { xs: '50%', sm: 'auto' },
        maxWidth: { xs: '125px', sm: 'inherit' },
      }}
      variant="b2"
    >
      <SvgIcon
        sx={{ verticalAlign: 'middle' }}
        titleAccess={`${carbohydrate} grams of carbohydrates`}
      >
        <Carbohydrate></Carbohydrate>
      </SvgIcon>
      <Typography
        component="span"
        sx={{ pl: 1, verticalAlign: 'middle' }}
        variant="b1"
      >
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

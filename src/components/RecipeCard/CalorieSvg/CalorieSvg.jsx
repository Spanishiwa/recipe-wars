import { SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as Calorie } from '../../../assets/Calorie.svg';
import PropTypes from 'prop-types';

export const CalorieSvg = (props) => {
  const { sx, calories } = props;

  const containerSx = {
    ...sx,
    flex: { xs: '45%', sm: 'auto' },
    minWidth: { xs: '125px', sm: 'inherit' },
  };

  const calorieSx = { pl: 1, verticalAlign: 'middle' };

  return (
    <Typography component="span" sx={containerSx} variant="b2">
      <SvgIcon
        sx={{ verticalAlign: 'middle' }}
        titleAccess={`${calories} total calories (kCal)`}
      >
        <Calorie></Calorie>
      </SvgIcon>
      <Typography component="span" sx={calorieSx} variant="b1">
        {calories} kCal
      </Typography>
    </Typography>
  );
};

CalorieSvg.propTypes = {
  calories: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

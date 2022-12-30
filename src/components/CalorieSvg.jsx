import { SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as Calorie } from '../assets/Calorie.svg';
import PropTypes from 'prop-types';

export const CalorieSvg = (props) => {
  const { sx, calories } = props;

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
        titleAccess={`${calories} total calories (kCal)`}
      >
        <Calorie></Calorie>
      </SvgIcon>
      <Typography
        component="span"
        sx={{ pl: 1, verticalAlign: 'middle' }}
        variant="b1"
      >
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

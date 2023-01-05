import { Typography } from '@mui/material';
import React from 'react';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';
import PropTypes from 'prop-types';

export const FatSvg = (props) => {
  const { sx, fat } = props;

  const fatTextContainerSx = {
    ...sx,
    flex: { xs: '50%', sm: 'auto' },
    maxWidth: { xs: '125px', sm: 'inherit' },
  };

  const fatIconSx = { verticalAlign: 'middle' };
  const fatFigtextSx = { pl: 1, verticalAlign: 'middle' };

  return (
    <Typography component="span" sx={fatTextContainerSx} variant="b2">
      <EggOutlinedIcon sx={fatIconSx} titleAccess={`${fat} grams of fat`} />
      <Typography component="span" sx={fatFigtextSx} variant="b1">
        {fat}g fat
      </Typography>
    </Typography>
  );
};

FatSvg.propTypes = {
  fat: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

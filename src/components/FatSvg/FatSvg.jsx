import { Typography } from '@mui/material';
import React from 'react';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';
import PropTypes from 'prop-types';

export const FatSvg = (props) => {
  const { sx, fat } = props;
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
      <EggOutlinedIcon
        sx={{ verticalAlign: 'middle' }}
        titleAccess={`${fat} grams of fat`}
      />
      <Typography
        component="span"
        sx={{ pl: 1, verticalAlign: 'middle' }}
        variant="b1"
      >
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

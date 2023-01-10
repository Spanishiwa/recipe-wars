import { SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as Protein } from '../../../assets/Protein.svg';
import PropTypes from 'prop-types';

export const ProteinSvg = (props) => {
  const { sx, protein } = props;

  const containerSx = {
    ...sx,
    flex: { xs: '45%', sm: 'auto' },
    minWidth: { xs: '125px', sm: 'inherit' },
  };

  const proteinSx = { pl: 1, verticalAlign: 'middle' };

  return (
    <Typography component="span" sx={containerSx} variant="b2">
      <SvgIcon
        sx={{ verticalAlign: 'middle' }}
        titleAccess={`${protein} grams of protein`}
      >
        <Protein></Protein>
      </SvgIcon>
      <Typography component="span" sx={proteinSx} variant="b1">
        {protein}g protein
      </Typography>
    </Typography>
  );
};

ProteinSvg.propTypes = {
  protein: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

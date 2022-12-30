import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export const InputExamples = (props) => {
  const { CustomIcon, iconColor, inputExample, inputExamplesSx, title } = props;
  return (
    <ListItem disableGutters sx={{ ...inputExamplesSx }} title={title}>
      <ListItemIcon sx={{ minWidth: '40px' }}>
        <CustomIcon color={iconColor} />
      </ListItemIcon>
      <ListItemText primary={inputExample} />
    </ListItem>
  );
};

InputExamples.propTypes = {
  CustomIcon: PropTypes.elementType.isRequired,
  iconColor: PropTypes.string.isRequired,
  inputExample: PropTypes.string.isRequired,
  inputExamplesSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

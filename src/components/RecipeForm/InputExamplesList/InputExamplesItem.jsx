import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Chopsticks from '../../../assets/chopsticks.png';
import { Done } from '@mui/icons-material';

export const InputExamplesItem = (props) => {
  const { Icon, inputExample, inputExamplesSx, title } = props;
  return (
    <ListItem disableGutters sx={{ ...inputExamplesSx }} title={title}>
      <ListItemIcon sx={{ minWidth: '40px' }}>
        {Icon === 'Done' ? (
          <Done color="success" />
        ) : (
          <img width="24" height="24" src={Chopsticks} />
        )}
      </ListItemIcon>
      <ListItemText primary={inputExample} />
    </ListItem>
  );
};

InputExamplesItem.propTypes = {
  Icon: PropTypes.string,
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

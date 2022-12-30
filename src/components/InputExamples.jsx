import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

export const InputExamples = (props) => {
  const { iconColor, CustomIcon, inputExample, inputExamplesSx, title } = props;
  return (
    <ListItem disableGutters sx={{ ...inputExamplesSx }} title={title}>
      <ListItemIcon sx={{ minWidth: '40px' }}>
        <CustomIcon color={iconColor} />
      </ListItemIcon>
      <ListItemText primary={inputExample} />
    </ListItem>
  );
};

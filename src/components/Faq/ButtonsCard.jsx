import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { LocalDining } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export const ButtonsCard = (props) => {
  const { handleResetAll } = props;
  return (
    <Card
      sx={{ display: 'flex', justifyContent: 'space-between', p: 2, mt: 2 }}
    >
      <Button
        aria-label="START PAGE"
        color="primary"
        component={RouterLink}
        disableElevation
        size="large"
        title="Start Page"
        to="/start"
        variant="contained"
      >
        <LocalDining sx={{ mr: 1 }} />
        GET STARTED
      </Button>
      <Button
        aria-label="RESET ALL"
        color="error"
        component={RouterLink}
        disableElevation
        onClick={handleResetAll}
        size="large"
        title="Reset all recipes to default"
        to="/recipe-wars"
        variant="outlined"
      >
        <RestartAltIcon sx={{ mr: 1 }} />
        RESET ALL
      </Button>
    </Card>
  );
};

ButtonsCard.propTypes = {
  handleResetAll: PropTypes.func.isRequired,
};

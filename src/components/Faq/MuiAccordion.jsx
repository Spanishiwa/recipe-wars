import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getExpandedSx, getHoverSx } from './FaqUtil';

export const MuiAccordion = (props) => {
  const { question, answer, idx } = props;

  const theme = useTheme();

  const hoverSx = getHoverSx(theme.palette.mode);
  const expandedSx = getExpandedSx(theme.palette.mode);

  return (
    <Accordion sx={expandedSx}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
        aria-controls={`panel${idx}a-content`}
        id={`panel${idx}a-header`}
        sx={hoverSx}
      >
        <Typography>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

MuiAccordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

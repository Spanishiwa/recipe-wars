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
import Bg_Pattern_Dark from '../../assets/Debut_Dark.png';
import Bg_Pattern_Light from '../../assets/Back_Pattern.png';

export const MuiAccordion = (props) => {
  const { question, answer, idx } = props;

  const mode = useTheme().palette.mode;
  const bgPattern = mode === 'light' ? Bg_Pattern_Light : Bg_Pattern_Dark;
  const bgColor = mode === 'light' ? '#F5F7FA' : '#121212';
  const hoverSx = {
    '&:hover': {
      backgroundImage: `url(${bgPattern})`,
      backgroundColor: bgColor,
      backgroundRepeat: 'repeat',
    },
  };

  const expandedSx = {
    '& .MuiAccordionDetails-root': {
      backgroundImage: `url(${bgPattern})`,
      backgroundColor: bgColor,
      backgroundRepeat: 'repeat',
    },
  };
  return (
    <Accordion sx={expandedSx}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: 'primary.main',
            }}
          />
        }
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

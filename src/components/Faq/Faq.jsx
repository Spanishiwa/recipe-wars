import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { ButtonsCard } from './ButtonsCard';
import { MuiAccordion } from './MuiAccordion';
import { questionsAndAnswers } from './questions';

export const Faq = (props) => {
  const { handleResetAll } = props;

  return (
    <Container
      className="faq"
      maxWidth="lg"
      sx={{ '&.MuiContainer-root.faq': { padding: '0px' } }}
    >
      <Card sx={{ padding: 2, mb: 2 }}>
        <Typography component="h4" color="text.primary" variant="h6">
          Frequently Asked Questions
        </Typography>
      </Card>
      {questionsAndAnswers.map((questionAnswer, idx) => {
        return (
          <MuiAccordion
            answer={questionAnswer[`answer${idx}`]}
            idx={idx}
            key={questionAnswer[`question${idx}`]}
            question={questionAnswer[`question${idx}`]}
          />
        );
      })}
      <ButtonsCard handleResetAll={handleResetAll} />
    </Container>
  );
};

Faq.propTypes = {
  handleResetAll: PropTypes.func.isRequired,
};

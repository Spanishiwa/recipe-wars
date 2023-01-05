import React, { useContext } from 'react';
import { Card, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { ButtonsCard } from './ButtonsCard';
import { MuiAccordion } from './MuiAccordion';
import { faqContainerSx, questionsAndAnswers } from './FaqUtil';
import { resetAll } from '../../reducers/actions';
import { RecipesContext } from '../Contexts/RecipesContext';

export const Faq = () => {
  const { dispatch } = useContext(RecipesContext);

  const handleResetAll = () => dispatch(resetAll());

  return (
    <Container className="faq" maxWidth="lg" sx={faqContainerSx}>
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

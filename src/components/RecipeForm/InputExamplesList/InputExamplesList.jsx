import React from 'react';
import { List } from '@mui/material';
import { Close, Done } from '@mui/icons-material';
import { InputExamplesItem } from './InputExamplesItem';
import { examplesListSx } from '../RecipeFormStyles';
import { inputExamples } from '../RecipeFormUtil';

export const InputExamplesList = () => {
  return (
    <List sx={examplesListSx}>
      {inputExamples.examples.map((inputExample, idx) => {
        return (
          <InputExamplesItem
            CustomIcon={idx % 2 === 0 ? Done : Close}
            iconColor={idx % 2 === 0 ? 'success' : 'error'}
            inputExample={inputExample}
            key={inputExample}
            inputExamplesSx={{ maxWidth: { xs: '100%', sm: '50%' } }}
            title={inputExamples.titles[idx]}
          />
        );
      })}
    </List>
  );
};

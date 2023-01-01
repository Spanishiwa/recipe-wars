import { Box, Typography } from '@mui/material';
import React from 'react';
import { CalorieSvg } from '../CalorieSvg/CalorieSvg';
import { CarbohydrateSvg } from '../CarbohydrateSvg/CarbohydrateSvg';
import { ProteinSvg } from '../ProteinSvg/ProteinSvg';
import { FatSvg } from '../FatSvg/FatSvg';
import { getNutrients } from './RecipeImageUtil';
import PropTypes from 'prop-types';

export const RecipeImageFigcaption = (props) => {
  const { children, description, isPerServing, ingredients, servings } = props;

  const nutrients = getNutrients(ingredients);
  const { calories, carbohydrate, protein, fat } = nutrients;

  const svgContainerSx = {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: { xs: '6px', md: '8px' },
    justifyContent: 'space-between',
    pb: '16px',
    rowGap: '16px',
  };

  return (
    <Typography
      component="figcaption"
      sx={{ padding: '24px 16px', whiteSpace: 'pre-wrap' }}
      variant="b2"
    >
      <Box sx={{ ...svgContainerSx }}>
        <CalorieSvg
          calories={(isPerServing ? calories / servings : calories).toFixed(0)}
        />
        <CarbohydrateSvg
          carbohydrate={(isPerServing
            ? carbohydrate / servings
            : carbohydrate
          ).toFixed(0)}
        />
        <ProteinSvg
          protein={(isPerServing ? protein / servings : protein).toFixed(0)}
        />
        <FatSvg fat={(isPerServing ? fat / servings : fat).toFixed(0)} />
      </Box>
      <Box
        display="flex"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 2,
        }}
      >
        {children}
        <Typography
          component="span"
          sx={{ verticalAlign: 'middle' }}
          variant="b2"
        >
          Serves {servings}
        </Typography>
      </Box>
      {description}
    </Typography>
  );
};

RecipeImageFigcaption.propTypes = {
  children: PropTypes.element,
  description: PropTypes.string,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      parsed: PropTypes.string.isRequired,
      calories: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      carbohydrate: PropTypes.string.isRequired,
      protein: PropTypes.string.isRequired,
      fat: PropTypes.string.isRequired,
      status: PropTypes.string,
      isDisabled: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
      recipeName: PropTypes.string.isRequired,
    })
  ),
  servings: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  isPerServing: PropTypes.bool,
};

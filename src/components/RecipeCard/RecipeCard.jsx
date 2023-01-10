import React, { useContext, useState } from 'react';
import { Box, CardContent, Typography, useTheme } from '@mui/material';
import { RecipeImage } from './RecipeImage/RecipeImage';
import { IngredientsList } from '../IngredientsList/IngredientsList';
import { MuiPopper } from './RecipeMenu/MuiPopper';
import { cardContentSx, getIngredientsSx, titleSx } from './RecipeCardStyles';
import PropTypes from 'prop-types';
import { CardCollapse } from './CardCollapse';
import { RecipesContext } from '../Contexts/RecipesContext';
import { getInput } from '../../Util';
import { RecipeTextfield } from '../RecipeTextfield/RecipeTextfield';

export const RecipeCard = (props) => {
  const { state } = useContext(RecipesContext);
  const { recipeName } = props;
  const [isEditable, setIsEditable] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  const mode = useTheme().palette.mode;
  const ingredientsSx = getIngredientsSx(expanded, mode);

  const title = getInput(state, `${recipeName}title-input`).text;

  return (
    <Box component="section" sx={{ borderRadius: { xs: 0, sm: 0, md: '4px' } }}>
      <CardContent sx={cardContentSx}>
        <Box sx={ingredientsSx}>
          <IngredientsList isEditable={isEditable} recipeName={recipeName} />
        </Box>
        <Box sx={{ flex: '65%' }}>
          <MuiPopper
            isEditable={isEditable}
            recipeName={recipeName}
            setIsEditable={setIsEditable}
          >
            {isEditable ? (
              <RecipeTextfield
                label="Recipe title"
                helperText=""
                name={`${recipeName}title-input`}
                placeholder="e.g. Abuela's dirty beans syrniki"
                required={false}
                title="Enter a concise, cogent, and exciting title"
              />
            ) : (
              <Typography component="h5" sx={titleSx} variant="h5">
                {title}
              </Typography>
            )}
          </MuiPopper>
          <RecipeImage isEditable={isEditable} recipeName={recipeName} />
          <CardCollapse
            expanded={expanded}
            handleExpandClick={handleExpandClick}
            isEditable={isEditable}
            recipeName={recipeName}
          />
        </Box>
      </CardContent>
    </Box>
  );
};

export default RecipeCard;

RecipeCard.propTypes = { recipeName: PropTypes.string };

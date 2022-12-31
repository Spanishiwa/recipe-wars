import React, { useState } from 'react';
import {
  Box,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { RecipeImage } from '../RecipeImage/RecipeImage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { IngredientsList } from '../IngredientsList/IngredientsList';
import { RecipeMenu } from '../RecipeMenu/RecipeMenu';
import PropTypes from 'prop-types';

const ExpandMore = styled((props) => {
  // ignorerestsiblings
  /* eslint-disable */
  const { expand, ...other } = props;
  /* eslint-enable */
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ingredientsSx = (expand, style) => {
  return expand
    ? {
        borderTop: { xs: style, md: 'unset' },
        maxHeight: 'auto',
        overflowY: 'auto',
      }
    : {
        maxHeight: '400px',
        overflowY: 'auto',
      };
};

export const RecipeCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const {
    handlers,
    ingredients,
    recipeState,
    isPerServing,
    selectText,
    showAlert,
  } = props;
  const { handleDeleteRecipe, handleServingsToggle } = handlers;

  const { title, description, imgSrc, recipeName, instructions, servings } =
    recipeState;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mode = useTheme().palette.mode;
  const cardActionBorderStyle =
    mode === 'light'
      ? 'thin solid rgba(0, 0, 0, 0.12)'
      : 'thin solid rgba(255, 255, 255, 0.12)';

  return (
    <Box component="section" sx={{ borderRadius: { xs: 0, sm: 0, md: '4px' } }}>
      <CardContent
        sx={{
          display: 'flex',
          flexFlow: { xs: 'column-reverse', md: 'row-reverse' },
          padding: '16px 0px 0px 0px',
          '.MuiCardContent-root&:last-child': { pb: 0 },
        }}
      >
        <Box
          sx={{
            flex: '35%',
            ...ingredientsSx(expanded, cardActionBorderStyle),
          }}
        >
          <IngredientsList
            handlers={handlers}
            ingredients={ingredients}
            recipeName={recipeName}
          />
          <Typography component="p" variant="b1"></Typography>
        </Box>
        <Box sx={{ flex: '65%' }}>
          <Typography
            component="h5"
            sx={{ padding: '0px 0px 16px 16px' }}
            variant="h5"
          >
            <RecipeMenu
              handleDeleteRecipe={handleDeleteRecipe}
              recipeName={recipeName}
              showAlert={showAlert}
            />
            {title}
          </Typography>
          <RecipeImage
            description={description}
            handleServingsToggle={handleServingsToggle}
            imgSrc={imgSrc}
            ingredients={ingredients}
            isPerServing={isPerServing}
            recipeName={recipeName}
            servings={servings}
            selectText={selectText}
            title={title}
          />
          <CardActions
            disableSpacing
            sx={{
              borderTop: cardActionBorderStyle,
              borderBottom: { xs: cardActionBorderStyle, md: 'unset' },
              flexFlow: 'row-reverse',
              justifyContent: 'left',
            }}
          >
            Recipe instructions
            <FeedOutlinedIcon sx={{ m: '0px 8px 0px 16px' }} />
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ color: 'primary.main', margin: '0' }}
              title="Reveal recipe details"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography component="p" variant="b2"></Typography>
            <Typography
              component="p"
              p={2}
              sx={{
                borderTop: { xs: 'unset', md: cardActionBorderStyle },
                flexFlow: 'row-reverse',
                justifyContent: 'left',
                maxHeight: '1200px',
                overflowY: 'auto',
                whiteSpace: 'pre-wrap',
              }}
              variant="b2"
            >
              {instructions}
            </Typography>
          </Collapse>
        </Box>
      </CardContent>
    </Box>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  handlers: PropTypes.shape({
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleDeleteRecipe: PropTypes.func,
    handleEdit: PropTypes.func.isRequired,
    handleKeyDelete: PropTypes.func.isRequired,
    handleKeySubmit: PropTypes.func.isRequired,
    handleToggleDisable: PropTypes.func.isRequired,
    handleServingsToggle: PropTypes.func.isRequired,
  }).isRequired,
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
  recipeState: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    recipeName: PropTypes.string,
    instructions: PropTypes.string,
    servings: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
  }),
  isPerServing: PropTypes.bool,
  selectText: PropTypes.string,
  showAlert: PropTypes.func,
};

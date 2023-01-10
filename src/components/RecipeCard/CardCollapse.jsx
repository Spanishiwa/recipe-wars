import React, { Fragment, useContext } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import {
  Box,
  CardActions,
  Collapse,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import {
  getCardActionsSx,
  getCollapseInstructionsSx,
} from './RecipeCardStyles';
import PropTypes from 'prop-types';
import { RecipesContext } from '../Contexts/RecipesContext';
import { getInput } from '../../Util';
import { RecipeTextarea } from '../RecipeTextarea/RecipeTextarea';

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

export const CardCollapse = (props) => {
  const { expanded, handleExpandClick, isEditable, recipeName } = props;
  const { state } = useContext(RecipesContext);

  const mode = useTheme().palette.mode;
  const cardActionsSx = getCardActionsSx(mode);
  const collapsibleInstructionsSx = getCollapseInstructionsSx(mode);

  const instructions = getInput(state, `${recipeName}recipe-textarea`).text;
  // const { label, inputRef, name, placeholder, rows, title }
  return (
    <Fragment>
      <CardActions disableSpacing sx={cardActionsSx}>
        <Typography component="p" variant="h6">
          Recipe instructions
        </Typography>
        <FeedOutlinedIcon fontSize="large" sx={{ p: '16px 16px 16px 0px' }} />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: 'primary.main', margin: '0', p: 2 }}
          title="Reveal recipe details"
        >
          <ExpandMoreIcon fontSize="large" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {isEditable ? (
          <Box sx={collapsibleInstructionsSx}>
            <RecipeTextarea name={`${recipeName}recipe-textarea`} rows={19} />
          </Box>
        ) : (
          <Typography component="p" sx={collapsibleInstructionsSx} variant="b2">
            {instructions}
          </Typography>
        )}
      </Collapse>
    </Fragment>
  );
};

CardCollapse.propTypes = {
  expanded: PropTypes.bool.isRequired,
  handleExpandClick: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
  recipeName: PropTypes.string,
};

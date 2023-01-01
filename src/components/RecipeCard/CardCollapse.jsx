import React, { Fragment } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import {
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
  const { expanded, handleExpandClick, instructions } = props;

  const mode = useTheme().palette.mode;
  const cardActionsSx = getCardActionsSx(mode);
  const collapsibleInstructionsSx = getCollapseInstructionsSx(mode);

  return (
    <Fragment>
      <CardActions disableSpacing sx={cardActionsSx}>
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
        <Typography
          component="p"
          p={2}
          sx={collapsibleInstructionsSx}
          variant="b2"
        >
          {instructions}
        </Typography>
      </Collapse>
    </Fragment>
  );
};

CardCollapse.propTypes = {
  expanded: PropTypes.bool.isRequired,
  handleExpandClick: PropTypes.func.isRequired,
  instructions: PropTypes.string,
};

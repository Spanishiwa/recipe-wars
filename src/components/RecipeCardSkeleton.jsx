import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
  useTheme
} from "@mui/material";
import { RecipeImage } from "./RecipeImage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import ReceiptLong from "@mui/icons-material/ReceiptLong";
import { ITALIAN_BEEF } from "../config";
import { IngredientsList } from "./IngredientsList";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));
const ingredientsSx = (expand, style) => {
  return expand
    ? {
        borderTop: { xs: style, md: "unset" },
        maxHeight: "auto",
        overflowY: "auto"
      }
    : {
        maxHeight: "300px",
        overflowY: "scroll"
      };
};

export const RecipeCardSkeleton = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mode = useTheme().palette.mode;
  const cardActionBorderStyle =
    mode === "light"
      ? "thin solid rgba(0, 0, 0, 0.12)"
      : "thin solid rgba(255, 255, 255, 0.12)";

  const cardActionsStyle = {
    borderTop: cardActionBorderStyle,
    borderBottom: cardActionBorderStyle,
    flexFlow: "row-reverse",
    justifyContent: "left"
  };

  const { title, description, ingredients, src, serving } = ITALIAN_BEEF;
  console.log(ITALIAN_BEEF);
  return (
    <Card
      component="section"
      sx={{ borderRadius: { xs: 0, sm: 0, md: "4px" } }}
    >
      <CardHeader
        sx={{ padding: "16px 16px 0px 16px" }}
        title="Concise, but descriptive recipe title"
      />
      <CardContent
        sx={{
          display: "flex",
          flexFlow: { xs: "column-reverse", md: "row-reverse" },
          p: "16px 0px 0px 0px",
          ".MuiCardContent-root&:last-child": { pb: 0 }
        }}
      >
        <Box
          sx={{
            flex: "35%",
            padding: { xs: "16px", sm: "16px", md: "0px 16px 16px 16px" },
            ...ingredientsSx(expanded, cardActionBorderStyle)
          }}
        >
          <IngredientsList ingredients={ingredients} />
          <Typography component="p" variant="b1"></Typography>
        </Box>
        <Box sx={{ flex: "65%" }}>
          <RecipeImage {...ITALIAN_BEEF} />
          <CardActions
            disableSpacing
            sx={{
              borderTop: cardActionBorderStyle,
              borderBottom: { xs: cardActionBorderStyle, md: "unset" },
              flexFlow: "row-reverse",
              justifyContent: "left"
            }}
          >
            {" "}
            Recipe <FeedOutlinedIcon sx={{ m: "0px 8px 0px 16px" }} />
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{
                color: "primary.main",
                margin: "0"
              }}
              title="reveal recipe details"
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
                borderTop: { xs: "unset", md: cardActionBorderStyle },
                flexFlow: "row-reverse",
                justifyContent: "left",
                maxHeight: "1200px",
                overflowY: "scroll"
              }}
              variant="b2"
            >
              Well formatted instructions with detailed steps to prepare the
              recipe. Make good use of numbering and white space for maximum
              cogency.
            </Typography>
          </Collapse>
        </Box>
      </CardContent>
    </Card>
  );
};

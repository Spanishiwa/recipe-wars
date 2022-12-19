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
        maxHeight: "400px",
        overflowY: "auto"
      };
};

const RecipeCard = (props) => {
  // const { ingredients } = ITALIAN_BEEF;
  const [expanded, setExpanded] = React.useState(false);
  const {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeySubmit,
    handleToggleDisable,
    handleServingsToggle,
    values
  } = props;

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

  const inputValues = (state) => {
    return state.reduce(
      (accum, inputState) => {
        switch (inputState.id) {
          case "title-input":
            accum.titleText = inputState.text;
          case "recipe-textarea":
            accum.recipeText = inputState.text;
          default:
            return accum;
        }
      },
      { titleText: "", recipeText: "" }
    );
  };

  const { titleText, recipeText } = inputValues(values);
  const ingredients = values.filter((ingr) => ingr.parsed);
  return (
    <Box component="section" sx={{ borderRadius: { xs: 0, sm: 0, md: "4px" } }}>
      <CardContent
        sx={{
          display: "flex",
          flexFlow: { xs: "column-reverse", md: "row-reverse" },
          gap: 2,
          padding: "16px 0px 0px 0px",
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
          <IngredientsList
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleKeySubmit={handleKeySubmit}
            handleToggleDisable={handleToggleDisable}
            ingredients={ingredients}
          />
          <Typography component="p" variant="b1"></Typography>
        </Box>
        <Box sx={{ flex: "65%" }}>
          <Typography
            component="h5"
            sx={{ padding: "0px 0px 24px 16px" }}
            variant="h5"
          >
            {titleText}
          </Typography>
          <RecipeImage
            handleServingsToggle={handleServingsToggle}
            values={values}
          />
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
            Recipe instructions
            <FeedOutlinedIcon sx={{ m: "0px 8px 0px 16px" }} />
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ color: "primary.main", margin: "0" }}
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
                borderTop: { xs: "unset", md: cardActionBorderStyle },
                flexFlow: "row-reverse",
                justifyContent: "left",
                maxHeight: "1200px",
                overflowY: "auto",
                whiteSpace: "pre-wrap"
              }}
              variant="b2"
            >
              {recipeText}
            </Typography>
          </Collapse>
        </Box>
      </CardContent>
    </Box>
  );
};

export default RecipeCard;

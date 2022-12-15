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

const RecipeCard = (props) => {
  const { ingredients } = ITALIAN_BEEF;
  const [expanded, setExpanded] = React.useState(false);

  console.log(props);
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

  const title = props.values.filter(
    (ingredient) => ingredient.id == "title-input"
  )[0].text;

  return (
    <Card
      component="section"
      sx={{ borderRadius: { xs: 0, sm: 0, md: "4px" } }}
    >
      <CardHeader sx={{ padding: "16px 16px 0px 16px" }} title={title} />
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
          <IngredientsList
            // handleDelete={handleDelete}
            ingredients={ingredients}
          />
          <Typography component="p" variant="b1"></Typography>
        </Box>
        <Box sx={{ flex: "65%" }}>
          <RecipeImage values={props.values} {...ITALIAN_BEEF} />
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
              sx={{ color: "primary.main", margin: "0" }}
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
              Let the meat rest at room temperature for 15 minutes (this is a
              good time to measure your other spices and seasonings). Season the
              beef all over with kosher salt. Heat a large skillet or Dutch oven
              over medium-high. Once it is hot, sear the meat on all sides until
              golden brown, moving it as little as possible so that it develops
              a nice crust (this will take about 10 minutes). Transfer to the
              slow cooker. Turn the heat to medium. Carefully splash in some of
              the broth and with a wooden spoon, scrape up the brown bits on the
              bottom of the pan (this is FLAVOR). Pour the liquid and any bits
              into the slow cooker on top of the beef. In a small bowl, stir
              together the seasoning ingredients: Italian seasoning, granulated
              sugar, garlic powder, onion powder, salt, black pepper, and thyme.
              Sprinkle on top of the beef. Add the pepperoncini peppers and
              juice. Add the giardiniera (do not add any giardiniera juice).
              Pour in the remaining broth. Cover the crockpot and cook on LOW
              for 8 to 10 hours, or until meat shreds easily with a fork. Shred
              the beef, then stir it together with the juices. Cover and cook on
              low for 30 additional minutes. To serve, split the hoagie buns and
              toast on a baking sheet in the oven at 350 degrees for 5 to 7
              minutes (if desired). Fill with the shredded Italian beef (get
              plenty of that yummy, messy juice!) and top with provolone,
              pepperoncini, and Giardiniera as desired. Enjoy! NOTES: *You can
              swap the homemade Italian seasoning mix in this recipe with a .7
              ounce packet of Italian dressing mix. TO STORE: Refrigerate
              Italian beef in an airtight storage container for up to 3 days. TO
              REHEAT: Rewarm leftovers in a Dutch oven on the stovetop over
              medium-low heat or in the microwave. TO FREEZE: Freeze beef in an
              airtight freezer-safe storage container for up to 3 months. Let
              thaw overnight in the refrigerator before reheating.
            </Typography>
          </Collapse>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;

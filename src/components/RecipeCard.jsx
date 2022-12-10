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
  Typography
} from "@mui/material";
import { RecipeImage } from "./RecipeImage";
import { Expand, Favorite, Share } from "@mui/icons-material";

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

const RecipeCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card component="section" sx={{}}>
      <CardHeader title="Italian beef with hot gardiniera sandwich" />
      <CardContent sx={{ display: "flex", p: "0px 0px 16px 16px" }}>
        <Box sx={{ flex: "35%" }}>
          <Typography component="p" variant="b1">
            Ingredients (18)
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="1/2 cup heavy cream"></ListItemText>
              <ListItemIcon></ListItemIcon>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemText primary="1/2 cup heavy cream"></ListItemText>
              <ListItemIcon></ListItemIcon>
            </ListItem>
          </List>
          <Typography component="p" variant="b1"></Typography>
        </Box>
        <Box sx={{ flex: "65%" }}>
          <RecipeImage />
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Expand />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            testing testing
          </Collapse>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;

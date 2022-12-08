import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import Recipe_Icon from "../assets/recipe_icon.png";
import React from "react";

const NavBar = () => {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Link
            color="inherit"
            display="flex"
            href="/"
            sx={{ alignItems: "center", gap: 2 }}
            title="Homepage"
            underline="none"
            variant="h6"
          >
            <img
              alt="Recipe Wars logo"
              height="48"
              src={Recipe_Icon}
              width="48"
            />
            <Typography
              color="text.dark"
              component="h1"
              fontWeight="600"
              variant="h6"
            >
              RECIPE WARS
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default NavBar;

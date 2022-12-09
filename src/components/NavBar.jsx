import {
  AppBar,
  Box,
  Button,
  Link,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";
import Recipe_Icon from "../assets/recipe_icon.png";
import React from "react";
import Bg_Pattern from "../assets/concrete_texture.png";
import { GitHub, Help, Mail } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

const NavBar = () => {
  const navButtonStyles = {
    color: "#323F4B",
    display: "flex",
    flex: "1 1 0px",
    flexDirection: "column",
    px: 2,
    "&:hover": { background: "rgb(83, 140, 0)" }
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ backgroundImage: `url(${Bg_Pattern})` }}>
        <Toolbar>
          <Box display="flex" flexGrow={1} gap={2}>
            <Link
              color="inherit"
              display="flex"
              href="/"
              sx={{ alignItems: "center", gap: 2 }}
              title="Homepage"
              underline="none"
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
                fontWeight="500"
                variant="h5"
              >
                RECIPE WARS
              </Typography>
            </Link>
          </Box>

          <Stack
            divider={<Divider flexItem orientation="vertical" />}
            direction="row"
            sx={{ alignItems: "center" }}
          >
            <Button
              component="a"
              sx={navButtonStyles}
              title="Contact Us Page"
              variant="outlined"
            >
              <Mail />
              Contact
            </Button>
            <Button
              component="a"
              sx={navButtonStyles}
              title="Frequently Asked Questions"
              variant="outlined"
            >
              <Help />
              FAQ
            </Button>

            <Button
              component="a"
              sx={navButtonStyles}
              title="Github source code"
              variant="outlined"
            >
              <GitHub />
              Github
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default NavBar;

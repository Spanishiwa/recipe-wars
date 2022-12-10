import {
  AppBar,
  Box,
  Button,
  Link,
  Stack,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import ColorModeContext from "./ColorModeContext";
import Recipe_Icon from "../assets/recipe_icon.png";
import React, { useContext } from "react";
import Bg_Pattern_Light from "../assets/Beige_Paper.png";
import Bg_Pattern_Dark from "../assets/Binding_Dark.png";
import { GitHub, Help, LightMode, Mail, Nightlight } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

const NavBar = () => {
  const colorMode = useContext(ColorModeContext);
  const mode = useTheme().palette.mode;
  const bgPattern = mode === "light" ? Bg_Pattern_Light : Bg_Pattern_Dark;
  const hoverSx =
    mode === "light" ? { "&:hover": { background: "rgb(83, 140, 0)" } } : {};

  const navButtonStyles = {
    color: mode === "light" ? "secondary.main" : "text.primary",
    display: "flex",
    flex: "1 1 0px",
    flexDirection: "column",
    px: 2,
    ...hoverSx
  };

  const colorModeIcon = mode === "light" ? <Nightlight /> : <LightMode />;

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ backgroundImage: `url(${bgPattern})` }}>
        <Toolbar
          sx={{
            flexDirection: "row",
            justifyContent: { xs: "center" },
            margin: { lg: "auto" },
            maxWidth: "lg",
            width: { lg: "100%" }
          }}
        >
          <Box display={{ xs: "none", sm: "flex" }} flexGrow={1} gap={2}>
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
                color={mode === "light" ? "text.dark" : "text.primary"}
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
              onClick={colorMode.toggleColorMode}
              sx={navButtonStyles}
              title="Toggle color theme"
            >
              {colorModeIcon}
              THEME
            </Button>
            <Button component="a" sx={navButtonStyles} title="Contact Us Page">
              <Mail />
              Contact
            </Button>
            <Button
              component="a"
              sx={navButtonStyles}
              title="Frequently Asked Questions"
            >
              <Help />
              FAQ
            </Button>
            <Button
              component="a"
              href="https://github.com/Spanishiwa/recipe-wars"
              rel="noopener"
              sx={navButtonStyles}
              target="_blank"
              title="GitHub repository"
            >
              <GitHub />
              GitHub
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default NavBar;

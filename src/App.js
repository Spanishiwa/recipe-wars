import React from "react";
import Bg_Pattern_Dark from "./assets/Graphcoders_Lil_Fiber.png";
import Bg_Pattern_Light from "./assets/Beige_Paper.png";
import Footer from "./components/Footer";
import RecipeForm from "./components/RecipeForm";
import { Box, Container, useTheme } from "@mui/material";
import NavBar from "./components/NavBar";
import RecipeCard from "./components/RecipeCard";
import MuiStepper from "./components/MuiStepper";
import { areArraysEqual } from "@mui/base";
import { RecipeCardSkeleton } from "./components/RecipeCardSkeleton";

function App() {
  const mode = useTheme().palette.mode;
  const bgPattern = mode === "light" ? Bg_Pattern_Light : Bg_Pattern_Dark;

  const appSx = {
    backgroundColor: "background.default",
    backgroundImage: `url(${bgPattern})`,
    backgroundRepeat: "repeat"
  };

  return (
    <Box className="app" sx={appSx}>
      <NavBar />
      <Container component="main" maxWidth="lg" sx={{ display: "flex", py: 2 }}>
        {/* <RecipeForm /> */}
        {/* <RecipeCard /> */}
        <MuiStepper />
        {/* <RecipeCardSkeleton /> */}
      </Container>
      <Footer />
    </Box>
  );
}

export default App;

import Bg_Pattern from "./assets/Back_Pattern.png";
import Bg_Pattern_Light from "./assets/Beige_Paper.png";
import Footer from "./components/Footer";
import RecipeForm from "./components/RecipeForm";
import { Box, Container } from "@mui/material";
import NavBar from "./components/NavBar";
import RecipeCard from "./components/RecipeCard";

function App() {
  const appSx = {
    backgroundColor: "background.default",
    backgroundImage: `url(${Bg_Pattern_Light})`,
    backgroundRepeat: "repeat"
  };

  return (
    <Box className="app" sx={appSx}>
      <NavBar />
      <Container component="main" maxWidth="lg" sx={{ display: "flex", py: 2 }}>
        <RecipeForm />
        <RecipeCard />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;

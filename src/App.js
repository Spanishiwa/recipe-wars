import "./App.css";
import Footer from "./components/Footer";
import RecipeForm from "./components/RecipeForm";
import IngredientInput from "./components/IngredientInput";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <header className="app-header"></header>
      <Container component="main" maxWidth="lg">
        <RecipeForm />
      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

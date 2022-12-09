import "./App.css";
import Footer from "./components/Footer";
import RecipeForm from "./components/RecipeForm";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <div className="app">
      <NavBar />
      <header className="app-header"></header>
      <Container component="main" maxWidth="lg" sx={{ display: "flex", py: 2 }}>
        <RecipeForm />
        <RecipeCard />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

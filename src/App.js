import "./App.css";
import Footer from "./components/Footer";
import RecipeForm from "./components/RecipeForm";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <header className="app-header"></header>
      <Container component="main" maxWidth="lg" sx={{ mb: 2 }}>
        <RecipeForm />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

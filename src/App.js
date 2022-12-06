import "./App.css";
import Footer from "./components/Footer";
import RecipeForm from "./components/RecipeForm";
import IngredientInput from "./components/IngredientInput";

function App() {
  return (
    <div className="app">
      <header className="app-header"></header>
      <RecipeForm />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

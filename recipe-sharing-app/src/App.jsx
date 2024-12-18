import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css'

function App() {

  return (
    <div>
      <h3>Recipe</h3>
      <RecipeList  />
      <AddRecipeForm  />
    </div>
  );
};

export default App;

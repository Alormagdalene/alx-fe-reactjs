import React from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipe);
  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/details/${recipe.id}`}>View Details</Link>
          <DeleteRecipeButton id={recipe.id} />
        </div>
      ))}
    </>
  );
};

export default RecipeList;

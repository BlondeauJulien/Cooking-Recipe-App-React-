import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css'
import uuidv4 from 'uuid/v4'
import RecipeEdit from './RecipeEdit';

export const RecipeContext =  React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  const [selectedRecipeID, setSelectedRecipeID] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeID)


  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem('LOCAL_STORAGE_KEY', JSON.stringify(recipes))
  }, [recipes])


  const recipeContectValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeID(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {id: uuidv4(), name: 'name', amount: '1 Tbs' }
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => {
      return recipe.id !== id;
    }))
  }

  return (
    <RecipeContext.Provider value={recipeContectValue}>
    <RecipeList recipes={recipes} />
    {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  )

  
}



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: `1. Put salt on chicken \n2. Put chicken in oven \n3. Eat chicken`,
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: `1. Put paprika on pork \n2. Put pork in oven \n3. Eat pork`,
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;

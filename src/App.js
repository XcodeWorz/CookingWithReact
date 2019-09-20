import React, {useState} from 'react';
import logo from './logo.svg';
import RecipeList from "./components/RecipeList";
import './css/App.css';
import uuidv4 from "uuid/v4";

export const ThemeContext = React.createContext();


function App() {
	const [recipes, setRecipes] = useState(sampleRecipies)
	
	function handleRecipeAdd(){
		const newRecipe = {
			id: uuidv4(),
			name: 'New',
			servings: 1,
			cookTime: "1:00",
			instructions: "instrc",
			ingredients: [
			{
				id: uuidv4(),
				name: "name",
				amount: "1 Tbs"
			}
			]
		}

		setRecipes([...recipes, newRecipe])
	}
	
	function handleRecipeDelete(id){
		setRecipes(recipes.filter(recipe => recipe.id !== id));
	}

  	return (
  		<RecipeList 
  		recipes={recipes}
  		handleRecipeDelete={handleRecipeDelete}  
  		handleRecipeAdd={handleRecipeAdd}/>
  		)

  
}




const sampleRecipies = [
	{
		id: 1,
		name: "Plain chicken",
		servings: 3,
		cookTime: "1:45",
		instructions: "1. salt\n 2. oven\n 3. eat",
		ingredients: [
		{
			id: 1,
			name: "chicken",
			amount: "2 pounds"
		},
		{
			id: 2,
			name: "Pork",
			amount: "4 pounds"
		}
		]
	},
	{
		id: 2,
		name: "tacos",
		servings: 10,
		cookTime: "4:00",
		instructions: "1. salt\n 2. oven\n 3. eat",
		ingredients: [
		{
			id: 1,
			name: "pork",
			amount: "3 pounds"
		},
		{
			id: 2,
			name: "beef",
			amount: "5 pounds"
		}
		]
	},
]

export default App;

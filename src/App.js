import React from 'react';
import logo from './logo.svg';
import RecipeList from "./components/RecipeList";
import './App.css';

export const ThemeContext = React.createContext();


function App() {
  return <RecipeList recipes={sampleRecipies} />;
}

const sampleRecipies = [
	{
		id: 1,
		name: "Plain chicken",
		servings: 3,
		cookTime: "1:45",
		instructions: "1. salt\n 2. oven\n 3. eat"
	},
	{
		id: 2,
		name: "tacos",
		servings: 10,
		cookTime: "4:00",
		instructions: "1. salt\n 2. oven\n 3. eat"
	},
]

export default App;

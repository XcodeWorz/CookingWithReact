import React from "react";
import Recipe from "./Recipe";

export default function RecipeList(props){

	const { recipes, 
			handleRecipeAdd,
			handleRecipeDelete
		} = props;

	return(
		<>
		<div className="recipe-list">
		{recipes.map(recipe => {
			return (<Recipe 
			key={recipe.id}
			handleRecipeDelete={handleRecipeDelete} 
			{...recipe} />
			)
		})}
		</div>
		<div className="recipe-list__add-recipe-btn-container">
			<button onClick={handleRecipeAdd}
			className="btn btn--primary">
			Add recipe
			</button>
		</div>
		</>
	);
}
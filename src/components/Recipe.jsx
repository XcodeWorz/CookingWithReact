import React from "react";
import IngredientsList from "./IngredientsList";

export default function Recipe(props){
	const {
		id,
		name,
		cookTime,
		servings, 
		instructions,
		ingredients,
		handleRecipeDelete
	} = props;

	return (
		<div>
			<div>
				<h3>{name}</h3>
				<button>Edit</button>
				<button onClick={() => handleRecipeDelete(id)}>delete</button>
			</div>
			<div>
				<span>Cook time </span>
				<span>{cookTime}</span>
			</div>
			<div>
				<span>Servings:</span>
				<span>{servings}</span>
			</div>
			<div>
				<span>Instructions: </span>
				<div>
					{instructions}
				</div>
			</div>
			<div>
				<span>Ingredients: </span>
				<div>
					<IngredientsList ingredients={ingredients} />
				</div>
			</div>
		</div>
		);
}
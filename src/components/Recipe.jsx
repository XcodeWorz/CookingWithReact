import React from "react";


export default function Recipe(props){
	const {

		name,
		cookTime,
		servings, 
		instructions

	} = props;

	return (
		<div>
			<div>
				<h3>{name}</h3>
				<button>Edit</button>
				<button>delete</button>
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
		</div>
		);
}
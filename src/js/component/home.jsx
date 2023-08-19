import React from "react";
import PokerCard from "./pokerCard.jsx"

//create your first component
const Home = ({ title, name }) => {
	// Seccion logica
	const numerito = 7;

	// Parte Visual
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">{ title }</h1>
			<div className="d-flex flex-wrap p-1 justify-content-center align-items-center">
				{ 
					// Array(137).fill().map( x => <PokerCard /> )
					[ <PokerCard /> , <PokerCard /> , <PokerCard />]
				}
			</div>
		</div>
	);
};

export default Home;

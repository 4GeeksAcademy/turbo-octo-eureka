import React from "react";
import PokerCard from "./pokerCard.jsx"

//create your first component
const Home = ({ title }) => {
	
	// Seccion logica
	const generateCard = () => {
		const pintas = ['♥', '♦', '♣', '♠']
		const simbols = ['Q', 'J', 'K', 'A', '2', '3', '4', '5', '6', '7', '8', '9']
		let pinta = pintas[parseInt(Math.random() * pintas.length)]
		let simbol = simbols[parseInt(Math.random() * simbols.length)]
		let colorPinta = pinta == '♥' || pinta == '♦' ? 'red' : 'black'
		return {
			pinta,
			simbol,
			colorPinta
		}	
	}

	const casa = Array(2).fill().map( x => generateCard() );
	let mano = Array(2).fill().map( x => generateCard() );

	const sumaBlack = (simbol) => {
		if( simbol == 'Q' || simbol == 'K' || simbol == 'J') return 10;
		if(simbol == 'A') return 11
		return parseInt(simbol);
	}


	const sumaJack = (counter , value ) => counter + ( counter > 20 && value.simbol == 'A' ? 1 : sumaBlack(value.simbol) )

	let total = mano.reduce(sumaJack, 0)

	const totalCasa = casa.reduce(sumaJack, 0)

	const addCard = () => {
		mano = [ ...mano, generateCard() ]
		total = mano.reduce(sumaJack, 0)
	}

	// Parte Visual
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">{ title }</h1>
			<h1>
				{"House hand\n"}
				({ totalCasa })
			</h1>
			<div className="d-flex flex-wrap p-1 my-1 justify-content-center align-items-center">
				{ 
					casa.map( (carta, key) => <PokerCard key={carta.simbol + key} pinta={carta.pinta} colorPinta={carta.colorPinta} simbol={carta.simbol} />)
				}
			</div>
			<h1>
				{"Player's hand\n"}
				({ total })
			</h1>
			<div className="d-flex flex-wrap p-1 my-1 justify-content-center align-items-center">
				{ 
					mano.map( (carta, key) => <PokerCard key={carta.simbol + key} pinta={carta.pinta} colorPinta={carta.colorPinta} simbol={carta.simbol} />)
				}
			</div>
			<button className="btn btn-danger mx-1">
				Stay
			</button>
			<button className="btn btn-primary mx-1" onClick={addCard}>
				Ask
			</button>
		</div>
	);
};

export default Home;

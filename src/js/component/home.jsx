import React, { useState, useEffect } from "react";
import PokerCard from "./pokerCard.jsx"

//create your first component
const Home = ({ title }) => {

	useEffect(() => {
		// const newTotal = mano.reduce(sumaJack, 0);
		// setTotal(newTotal);
		console.log('efecto', total)
		if ((total >= 21 || totalCasa === 21) && !gameOver) {
			setGameOver(true);
			verifyWin()
		}
	});

	const verifyWin = () => {
		if (total > 21 || totalCasa === 21) {
			setWin('Sorry try again! 🥲');
		} else if (total === 21) {
			setWin('Player Wins! 🥳');
		} else if (totalCasa >= total) {
			setWin('Sorry try again! 🥲');
		} else {
			setWin('Player Wins! 🥳');
		}
		setGameOver(true)
	}

	const playAgain = () => {
		setGameOver(false);
		const newMano = Array(2).fill().map(x => generateCard())
		setMano(newMano);
		const newManoCasa = Array(2).fill().map(x => generateCard())
		setCasa(newManoCasa);
		setWin('');
		const newTotal = newMano.reduce(sumaJack, 0)
		setTotal(newTotal);
		const newTotalCasa = newManoCasa.reduce(sumaJack, 0)
		setTotalCasa(newTotalCasa);
	};

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

	const [casa, setCasa] = useState(Array(2).fill().map(x => generateCard()))
	const [mano, setMano] = useState(Array(2).fill().map(x => generateCard()))
	const [win, setWin] = useState(null)
	const [gameOver, setGameOver] = useState(false);

	const sumaBlack = (simbol) => {
		if (simbol == 'Q' || simbol == 'K' || simbol == 'J') return 10;
		if (simbol == 'A') return 11
		return parseInt(simbol);
	}

	const sumaJack = (counter, value) => counter + (counter > 20 && value.simbol == 'A' ? 1 : sumaBlack(value.simbol))

	let [total, setTotal] = useState(mano.reduce(sumaJack, 0))

	const [totalCasa, setTotalCasa] = useState(casa.reduce(sumaJack, 0))

	const addCard = () => {
		const newMano = [...mano, generateCard()];
		setMano(newMano);
		const newTotal = newMano.reduce(sumaJack, 0);
		setTotal(newTotal);
	}


	// Parte Visual
	return (
		<div className="text-center d-flex flex-column my-auto col-12 text-white">
			<h1 className="my-1">{title}</h1>
			<h1 className="text-center">{win}</h1>
			<h1>
				{"House hand\n"}
				({totalCasa})
			</h1>
			<div className="d-flex flex-wrap col-12 p-1 my-1 justify-content-center align-items-center">
				{
					casa.map((carta, key) => <PokerCard key={carta.simbol + key} pinta={carta.pinta} colorPinta={carta.colorPinta} simbol={carta.simbol} />)
				}
			</div>
			<h1>
				{"Player's hand\n"}
				({total})
			</h1>
			<div className="d-flex flex-wrap col-12 p-1 my-1 justify-content-center align-items-center">
				{
					mano.map((carta, key) => <PokerCard key={carta.simbol + key} pinta={carta.pinta} colorPinta={carta.colorPinta} simbol={carta.simbol} />)
				}
			</div>
			{total < 21 && !win && (<div>
				<button className="btn btn-danger mx-1" onClick={() => verifyWin()}>
					Stay
				</button>
				<button className="btn btn-primary mx-1" onClick={() => addCard()}>
					Ask
				</button>
			</div>)}
			{gameOver && (
				<div>
					<button className="btn btn-primary" onClick={playAgain}>
						Play Again
					</button>
				</div>
			)}
		</div>
	);
};

export default Home;

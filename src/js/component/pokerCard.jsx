import React from "react"


const PokerCard = () => {

    const cardStyles = { width: '18rem', color: 'black' }

    const pintas = ['♥','♦','♣','♠']
    const simbols = ['Q','J','K','A', '2', '3', '4', '5', '6', '7', '8', '9']

    let pinta = pintas[parseInt(Math.random()*pintas.length)]
    let simbol = simbols[parseInt(Math.random()*simbols.length)]
    let colorPinta = pinta == '♥' || pinta == '♦' ? 'red' : 'black'

    return (<div className="card m-2" style={cardStyles}>
                <div className="card-body">
                    <p style={{ color: colorPinta  }} >{pinta}</p>
                    <h1>{simbol}</h1>
                    <p style={{ transform: "rotate(180deg)", color: colorPinta }} >{pinta}</p>
                </div> 
            </div>
        )
}

export default PokerCard;
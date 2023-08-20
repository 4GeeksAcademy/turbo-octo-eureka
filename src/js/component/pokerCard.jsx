import React from "react"


const PokerCard = ({ pinta, simbol, colorPinta }) => {

    const cardStyles = {
        // transform: "rotate(180deg)",
        color: colorPinta,
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'end'
    }

    return (<div className="col-2 px-2 text-black">
        <div className="card p-0">
            <div className="card-body">
                <p style={cardStyles} >
                    {pinta}
                </p>
                <h1 style={{ color: colorPinta }}>{simbol}</h1>
                <p style={{ ...cardStyles, transform: "rotate(180deg)" }} >
                    {pinta}
                </p>
            </div>
        </div>
    </div>
    )
}

export default PokerCard;
import React from "react"


const PokerCard = ({ pinta, simbol, colorPinta}) => {

    return (<div className="col-2 px-2">
        <div className="card p-0">
            <div className="card-body">
                <p style={{
                    color: colorPinta,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyItems: 'end'
                }} >
                    {pinta}
                </p>
                <h1 className="">{simbol}</h1>
                <p style={{
                    transform: "rotate(180deg)",
                    color: colorPinta,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyItems: 'end'
                }} >
                    {pinta}
                </p>
            </div>
        </div>
    </div>
    )
}

export default PokerCard;
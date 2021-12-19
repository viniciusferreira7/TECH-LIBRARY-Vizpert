import React from 'react'
import './Board.css'

function Board() {
    return (
        <div className='Board'>
            <h2>Sort by</h2>
            <div className="Filter-Wraper">
                <button className="Filter-Button">
                    <div className="Filter-Aphabetic"></div>
                </button>
                <button className="Filter-Button">
                    <div className="Filter-Colors"></div>
                </button>
                <button className="Filter-Button">
                    <div className="Filter-Sizes"></div>
                </button>
            </div>
            <div className='Line'></div>
            <div className='Button'></div>
        </div>
    )
}

export default Board

//Espaçamento dos Filter-Button

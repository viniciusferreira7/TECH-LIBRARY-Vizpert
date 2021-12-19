import React from 'react'
import './Board.css'

function Board() {
    return (
        <div className='Board'>
            <h2>Sort by</h2>
            <div className="Filter-Wraper">
                <div className="Fliter-Button">
                    <div className="Filter-Aphabetic"></div>
                </div>
                <div className="Fliter-Button">
                    <div className="Filter-Colors"></div>
                </div>
                <div className="Fliter-Button">
                    <div className="Filter-Sizes"></div>
                </div>
            </div>
            <div className='Line'></div>
            <div className='Button'></div>
        </div>
    )
}

export default Board

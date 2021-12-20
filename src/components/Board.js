import React from 'react'
import './Board.css'

function Board() {

    const handleClick = (e)=>{
        e.target.classList.add('Active')
        document.getElementsByClassName('Filter-Button').classList ='Filter-Button'
    }

    return (
        <div className='Board'>
            <h2>Sort by</h2>
            <div className="Filter-Wraper">
                <button className="Filter-Button" onClick={handleClick}>
                    <div className="Filter-Aphabetic"></div>
                </button>
                <button className="Filter-Button" onClick={handleClick}>
                    <div className="Filter-Colors"></div>
                </button>
                <button className="Filter-Button" onClick={handleClick}>
                    <div className="Filter-Sizes"></div>
                </button>
            </div>

            <div className='Line'></div>
            <div className='Button'></div>
        </div>
    )
}

export default Board

import React from 'react'
import $ from 'jquery'
import './Board.css'
import Bookcase from './Bookcase'

function Board({findActive}) {

    const handleClick = () =>{
        $('.Filter-Button').click(function(){
            $('.Filter-Button').removeClass('Active')
            $(this).addClass('Active')
        })
    }

    

    return (
        <div className='Board'>
            <Bookcase ></Bookcase>
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
            <div className='Button' onClick={() => findActive()}></div>
            
        </div>
    )
}

export default Board

//Componente Lady da em cima do componete Board

import React from 'react'
import $ from 'jquery'
import './Board.css'

function Board({setProps}) {


    const handleClick = () =>{
        $('.Filter-Button').click(function(){
            $('.Filter-Button').removeClass('Active')
            $(this).addClass('Active')
        })
        
    }

    

    const findActive = () =>{
        if ($('.Filter-Button').hasClass('Active')){
                if($('#aphabetic').hasClass('Active')){
                     setProps((prevAphabetic) =>{
                        return {...prevAphabetic, sort:['book-A', 'book-B','book-C','book-D','book-E','book-F','book-G','book-H','book-I']}
                    })
                    
                    $('.Button').click(() =>{
                        setProps((prevAphabeticR) =>{
                            return {...prevAphabeticR, sort:['book-A', 'book-B','book-C','book-D','book-E','book-F','book-G','book-H','book-I'].reverse()}
                        })
                       
                    })

                }
                if($('#colors').hasClass('Active')){
                    console.log('c')
                    setProps((prevColors) =>{
                        return {...prevColors, sort:['book-B', 'book-C','book-A','book-A','book-I','book-E','book-H','book-D','book-G',]}
                    })
                }
                if($('#sizes').hasClass('Active')){
                    setProps((prevSizes) =>{
                        return {...prevSizes, sort:['book-C','book-D','book-H','book-A','book-A','book-I','book-B','book-F','book-G','book-E']}

                    })
                }
        }
    }

        

    return (
        <div className='Board'>
            <h2>Sort by</h2>
            <div className="Filter-Wraper">
                <button  id='aphabetic' className="Filter-Button Aphabetic" onClick={handleClick}>
                    <div className="Filter-Aphabetic"></div>
                </button>
                <button id='colors' className="Filter-Button Colors" onClick={handleClick}>
                    <div className="Filter-Colors"></div>
                </button>
                <button id='sizes' className="Filter-Button" onClick={handleClick}>
                    <div  className="Filter-Sizes"></div>
                </button>
            </div>

            <div className='Line'></div>
            <div className='Button' onClick={ findActive}></div>
            
        </div>
    )
}

export default Board

//Componente Lady da em cima do componete Board

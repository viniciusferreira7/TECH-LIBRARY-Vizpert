import React, {useState} from 'react'
import $ from 'jquery'
import './Board.css'

function Board({setProps}) {

    const [count, setCount] = useState(0)


    const handleClick = () =>{
        $('.filter-button').click(function(){
            $('.filter-button').removeClass('active')
            $(this).addClass('active')
        })
        
    }

    

    const findActive = () =>{
       
        if ($('.filter-button').hasClass('active')){
            setCount(count + 1)
                if($('#aphabetic').hasClass('active')){
                
                    if(count >= 1){
                        setProps((prevAphabetic) =>{
                            return {...prevAphabetic, sequence:['book-A', 'book-B','book-C','book-D','book-E','book-F','book-G','book-H','book-I'].reverse()}                        
                        })
                        
                        setCount(0)
                    }else{
                        setProps((prevAphabetic) =>{
                            return {...prevAphabetic, sequence:['book-A', 'book-B','book-C','book-D','book-E','book-F','book-G','book-H','book-I']}                        
                        })

                    }
                }
                if($('#colors').hasClass('active')){
                   if(count >=1){
                    setProps((prevColors) =>{
                        return {...prevColors, sequence:['book-B', 'book-C','book-A','book-A','book-I','book-E','book-H','book-D','book-G',].reverse()}
                    })

                    setCount(0)

                   }else{
                    setProps((prevColors) =>{
                        return {...prevColors, sequence:['book-B', 'book-C','book-A','book-A','book-I','book-E','book-H','book-D','book-G',]}
                    })
                   }
                }
                if($('#sizes').hasClass('active')){
                    
                    if(count >= 1){
                        setProps((prevSizes) =>{
                            return {...prevSizes, sequence:['book-C','book-D','book-H','book-A','book-A','book-I','book-B','book-F','book-G','book-E'].reverse()}
                        })
                        
                        setCount(0)
                    
                    }else{
                        setProps((prevSizes) =>{
                        return {...prevSizes, sequence:['book-C','book-D','book-H','book-A','book-A','book-I','book-B','book-F','book-G','book-E']}
                        })  
                    }
                }

        }
        
    }
        

    return (
        <div className='board'>
            <h2>Sort by</h2>
            <div className="button-wraper">
                <button  id='aphabetic' className='filter-button' onClick={handleClick}>
                    <div className="filter-aphabetic"></div>
                </button>
                <button id='colors' className="filter-button" onClick={handleClick}>
                    <div className="filter-colors"></div>
                </button>
                <button id='sizes' className="filter-button" onClick={handleClick}>
                    <div  className="filter-sizes"></div>
                </button>
            </div>

            <div className='Line'></div>
            <div className='button-organize' onClick={findActive}></div>
            
        </div>
    )
}

export default Board

//Componente Lady da em cima do componete Board

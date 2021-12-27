import React, {useState} from 'react'
import $ from 'jquery'
import './styles/Board.css'


function Board({setProps}) {

    const [count, setCount] = useState(0)


    
    //evet not affect child element
    const handleClick = (e) =>{
            $('.filter-button').removeClass('active')
            e.target.classList.add('active')
        
        
    }
    
    const findActive = () =>{
       
        if ($('.filter-button').hasClass('active')){
            setCount(count + 1)
                if($('#aphabetic').hasClass('active')){
                
                    if(count >= 1){
                        setProps((prevAphabetic) =>{
                            return {...prevAphabetic, sequence:['book-A', 'book-B','book-C','book-D','book-E','book-F'].reverse(), sequenceTwo:['book-I', 'book-H', 'book-G'].reverse()}                        
                        })
                        
                        setCount(0)
                    }else{
                        setProps((prevAphabetic) =>{
                        return {...prevAphabetic, sequenceOne:['book-A', 'book-B','book-C','book-D','book-E','book-F'], sequenceTwo:['book-I', 'book-H', 'book-G']}                        
                        })

                    }
                }
                if($('#colors').hasClass('active')){
                   if(count >=1){
                    setProps((prevColors) =>{
                        return {...prevColors, sequenceOne:['book-B', 'book-C','book-A','book-E','book-D','book-F'].reverse()
                        , sequenceTwo:['book-I', 'book-H', 'book-G'].reverse(),
                    }
                    })

                    setCount(0)

                   }else{
                    setProps((prevColors) =>{
                        return {...prevColors, sequenceOne:['book-B', 'book-C','book-A','book-E','book-D','book-F'], 
                        sequenceTwo:['book-I', 'book-H', 'book-G']}
                    })
                   }
                }
                if($('#sizes').hasClass('active')){
                    
                    if(count >= 1){
                        setProps((prevSizes) =>{
                            return {...prevSizes, sequenceOne:['book-C','book-D','book-A','book-B','book-F','book-E'].reverse(),
                             sequenceTwo:['book-G', 'book-I', 'book-H'].reverse()}
                        })
                        
                        setCount(0)
                    
                    }else{
                        setProps((prevSizes) =>{
                        return {...prevSizes, sequenceOne:['book-C','book-D','book-A','book-B','book-F','book-E'],
                         sequenceTwo:['book-G', 'book-I', 'book-H']}
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
                    <figure className="filter-aphabetic"></figure>
                </button>
                <button id='colors' className="filter-button" onClick={handleClick}>
                    <figure className="filter-colors"></figure>
                </button>
                <button id='sizes' className="filter-button" onClick={handleClick}>
                    <figure  className="filter-sizes"></figure>
                </button>
            </div>

            <div className='Line'></div>
            <div className='button-organize' onClick={findActive}></div>
            
        </div>
    )
}

export default Board

//Componente Lady da em cima do componete Board

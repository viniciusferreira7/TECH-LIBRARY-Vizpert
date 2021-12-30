import React, {useState} from 'react'
import $ from 'jquery'
import './styles/Board.css'


function Board({setSort, sort}) {

    //Is for when clicking the second time reverses the order
    const [click, setClick] = useState(0)

    
    //Function to add Active class in the element I clicked
    const handleClick = (e) =>{
            $('.filter-button').removeClass('active')

            e.target.classList.add('active')
    }
    
    //Function to find thw button with the Active class
    const findActive = () =>{
       
        if ($('.filter-button').hasClass('active')){

            setClick(click + 1)

                if($('#aphabetic').hasClass('active')){

                        let aphabetic = ['book-A', 'book-B','book-C','book-D','book-E','book-F', 'book-G','book-H','book-I','book-J']

                        let filterOne = aphabetic.filter(item => sort.shelfOne.includes(item))
                        let filterTwo = aphabetic.filter(item => sort.shelfTwo.includes(item))

                    if(click >= 1){

                        setSort(prevAphabetic =>{
                            return{...prevAphabetic, shelfOne:filterOne.reverse(),shelfTwo:filterTwo.reverse()}
                        })
                        setClick(0)
                        
                    }else{

                        setSort(prevAphabetic =>{
                            return{...prevAphabetic, shelfOne:filterOne,
                                shelfTwo:filterTwo}
                        })
                    }
                }
                if($('#colors').hasClass('active')){

                    let colors = ['book-B', 'book-C','book-A','book-J','book-I','book-E','book-H', 'book-D', 'book-G','book-F']

                    let filterOne = colors.filter(item => sort.shelfOne.includes(item))
                    let filterTwo = colors.filter(item => sort.shelfTwo.includes(item))

                   if(click >=1){

                        setSort(prevColors =>{
                            return {...prevColors, shelfOne:filterOne.reverse(),
                                shelfTwo:filterTwo.reverse()}
                        })
                        setClick(0)

                   }else{
                       
                        setSort(prevColors =>{
                            return {...prevColors, shelfOne:filterOne,
                                shelfTwo:filterTwo}
                        })

                   }
                }
                if($('#sizes').hasClass('active')){

                    let sizes = ['book-C','book-D','book-H','book-J', 'book-A', 'book-I','book-B','book-F','book-G', 'book-E']

                    let filterOne = sizes.filter(item => sort.shelfOne.includes(item))
                    let filterTwo = sizes.filter(item => sort.shelfTwo.includes(item))

                    if(click >= 1){
                        
                        setSort(prevSizes =>{
                            return {...prevSizes, shelfOne:filterOne.reverse(),
                            shelfTwo:filterTwo.reverse()}
                        })
                        setClick(0)
                    
                    }else{
                        
                        setSort(prevSizes =>{
                            return {...prevSizes, shelfOne:filterOne,
                                shelfTwo:filterTwo}
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

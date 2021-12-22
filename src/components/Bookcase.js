import React,{useState} from "react";
import $ from 'jquery';
import Board from "./Board";
import './Bookcase.css'


function Bookcase(){
    
     const findActive = () =>{
         if ($('.Filter-Button').hasClass('Active')){
             console.log('tem')
         }
     }

    const [filter, setFilter] = useState({
        aphabeetic: ['book-A', 'book-B','book-C','book-D','book-E','book-F','book-G','book-H','book-I'],

        colors:['book-B', 'book-C','book-A','book-A','book-I','book-E','book-H','book-D','book-G',],
    
        sizes:['book-C','book-D','book-H','book-A','book-A','book-I','book-B','book-F','book-G','book-E']
    })



    return(
        <div className="Bookcase">
            <div className="Shelf">  
                {filter.colors.map((item, index) =>{
                   return( <figure id={item} key={index} className="books"></figure>)
                })}
            </div>
            <Board findActive={findActive}/>
        </div>
    )
}

export default Bookcase

//Espaçamento  entre Bookcase, logo e Clock
import React,{useState} from "react";
import Board from "./Board";
import './Bookcase.css'


function Bookcase(){
   
   
    const [sort, setSort] = useState({sequence:['book-A', 'book-B','book-C','book-D','book-E','book-F','book-G','book-H','book-I']})

    
    return(
        <div className="bookcase">
            <div className="shelf">  
                {sort.sequence.map((item, index) =>{
                   return( <figure id={item} key={index} className="books"></figure>)
                })}
            </div>
            <Board setProps={setSort}/>
        </div>
    )
}

export default Bookcase

//Espaçamento  entre Bookcase, logo e Clock
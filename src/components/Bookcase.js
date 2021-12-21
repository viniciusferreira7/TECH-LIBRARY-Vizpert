import React from "react";
import {DragDropContext , Droppable, Draggable} from 'react-beautiful-dnd';
import './Bookcase.css'


function Bookcase(){
    return(
        <div className="Bookcase">
            <DragDropContext>
                <Droppable id="books">
                    {(provided) =>(
                        <div className="Shelf" {...provided.droppableProps} ref={provided.innerRef}>
                            <Draggable>
                                {(provided) =>(
                                    <figure {...provided.draggableProps}
                                    ref={provided.innerRef}  className="book-A books"></figure>
                                )}
                            </Draggable>    
                            <Draggable>
                                <figure className="book-B books"></figure>
                            </Draggable>
                            <Draggable>
                                <figure className="book-C books"></figure>
                            </Draggable>    
                            <Draggable>
                                <figure className="book-D books"></figure>
                            </Draggable>
                            <Draggable>
                                <figure className="book-E books"></figure>
                            </Draggable>    
                            <Draggable>
                                <figure className="book-F books"></figure>
                            </Draggable>
                            <Draggable>
                                <figure className="book-G books"></figure>
                            </Draggable>    
                            <Draggable>
                                <figure className="book-H books"></figure>
                            </Draggable>
                            <Draggable>
                                <figure className="book-I books"></figure>
                            </Draggable>
                            <Draggable>
                                <figure className="book-J books"></figure>
                            </Draggable>    
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default Bookcase

//Espaçamento  entre Bookcase, logo e Clock
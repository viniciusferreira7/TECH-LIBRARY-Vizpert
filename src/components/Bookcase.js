import React,{useState} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Board from "./Board";
import './styles/Bookcase.css'




function Bookcase(){
   
    //Unable draggble wigth id
    // click not propagation for childreen
   
    const [sort, setSort] = useState({sequence:['book-A', 'book-B','book-C',
    'book-D','book-E','book-F','book-G','book-H', 'book-I']})
    
    function handleOnDragEnd (result){
        if(!result.destination) return;
        
        const items =Array.from(sort.sequence);
        const [reorderedItem] = items.splice(result.source.index, 1);
        
        items.splice(result.destination.index, 0, reorderedItem)
        
        setSort((prevSequence) => {
        return{...prevSequence, sequence:items}

        })

    console.log(sort)
    }
    

    return(
        <div className="bookcase">
            <DragDropContext onDragEnd={handleOnDragEnd}>
            
            <Droppable droppableId="droppable-1" direction="horizontal">
                {(provided, snapshot) => (
                    <div
                    className="shelf-1"
                    style={{cursor: snapshot.isDraggingOver ? 'grab' : 'grabbing' }}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                        {sort.sequence.map((item, index) =>{
                            return(
                                <Draggable index={index}  key={index} draggableId={item}>
                                    {(provided) => (
                                        <figure id={item} className="books" 
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                        </figure>
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
                </Droppable>
            </DragDropContext>

            <Board setProps={setSort}/>
        </div>
    )
}

export default Bookcase

//Espaçamento  entre Bookcase, logo e Clock
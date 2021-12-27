import React,{useState} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Board from "./Board";
import './styles/Bookcase.css'




function Bookcase(){
   
    //Unable draggble wigth id
    // click not propagation for childreen

    const [countOne, setCountOne] = useState(2)
    const [countTwo, setCountTwo] = useState(5)
   
    const [sort, setSort] = useState({
        sequenceOne:
            ['book-A', 'book-B','book-C','book-D','book-E','book-F'],

        sequenceTwo:
            ['book-I', 'book-H', 'book-G']}
    )

    const createSequenceOne = () =>{
        if(countOne >= 0){
             const item = Array.from(sort.sequenceOne)
             const reorder = item.push(`${sort.sequenceTwo[countOne]}`)
             console.log(reorder)

             setSort((prevSequence) =>{
                 return{...prevSequence, sequenceOne:item}
             })

             setCountOne(countOne - 1)
         }
         else if(sort.sequenceTwo[sort.sequenceTwo.length - 1] === undefined){
             return;
         }
 }

 const deleteSequenceOne = ()=>{
     const item = Array.from(sort.sequenceOne)
     item.splice(0, 1)

     setSort((prevSequence) =>{
         return{...prevSequence, sequenceOne:item}
     })
 

 }

    const createSequenceTwo = () =>{
           if(countTwo >= 0){
                const item = Array.from(sort.sequenceTwo)
                const reorder = item.push(`${sort.sequenceOne[countTwo]}`)
                console.log(reorder)

                setSort((prevSequence) =>{
                    return{...prevSequence, sequenceTwo:item}
                })

                setCountTwo(countTwo - 1)
            }
            else if(sort.sequenceTwo[sort.sequenceTwo.length - 1] === undefined){
                return;
            }
    }

    const deleteSequenceTwo = ()=>{
        const item = Array.from(sort.sequenceTwo)
        item.splice(sort.sequenceTwo.length - 1, 1)

        setSort((prevSequence) =>{
            return{...prevSequence, sequenceTwo:item}
        })
    

    }

    console.log(sort.sequenceTwo)

    function handleOnDragEndOne (result){
        if(!result.destination) return;
        
        const itemsOne =Array.from(sort.sequenceOne);
        const [reorderedItemOne] = itemsOne.splice(result.source.index, 1);
        
        itemsOne.splice(result.destination.index, 0, reorderedItemOne)
        console.log(itemsOne)

        setSort((prevSequence) => {
            return{...prevSequence, sequenceOne:itemsOne}
            })


    }

    function handleOnDragEndTwo (result){
        if(!result.destination) return;
        
        const itemsTwo =Array.from(sort.sequenceTwo);
        const [reorderedItemTwo] = itemsTwo.splice(result.source.index, 1);
        
        itemsTwo.splice(result.destination.index, 0, reorderedItemTwo)
        console.log(itemsTwo)

        setSort((prevSequence) => {
            return{...prevSequence, sequenceTwo:itemsTwo}
    
            })

    }
    

    return(
        <div className="bookcase">
            <button 
            onClick={createSequenceOne} className="createSequenceOne arrow"></button>

            <button onClick={deleteSequenceOne} className="deleteSequenceOne arrow">
            </button>

            <button 
            onClick={createSequenceTwo} className="createSequenceTwo arrow"></button>

            <button onClick={deleteSequenceTwo} className="deleteSequenceTwo arrow">
            </button>



            <DragDropContext onDragEnd={handleOnDragEndOne}>
            
            <Droppable droppableId="droppable-1" direction="horizontal">
                {(provided, snapshot) => (
                    <div
                    className="shelf-1"
                    style={{cursor: snapshot.isDraggingOver ? 'grab' : 'grabbing' }}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                        {sort.sequenceOne.map((item, index) =>{
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

            <DragDropContext onDragEnd={handleOnDragEndTwo}>
                <Droppable droppableId="droppable-2" direction="horizontal">
                {(provided, snapshot) => (
                    <div
                    className="shelf-2"
                    style={{cursor: snapshot.isDraggingOver ? 'grab' : 'grabbing' }}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                        {sort.sequenceTwo.map((item, index) =>{
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
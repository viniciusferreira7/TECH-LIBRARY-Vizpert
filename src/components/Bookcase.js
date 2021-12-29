import React,{useState} from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Board from "./Board";
import './styles/Bookcase.css'




function Bookcase(){

    //Control book change with click to not affect book movement.
    const [click, setClick] = useState(0)
   
    //Limit the number of book added to the shelf.
    const [countOne, setCountOne] = useState(3)
    const [countTwo, setCountTwo] = useState(5)
   
    //The order and initial quantity of books on each shelf.
    const [sort, setSort] = useState({
        shelfOne:
            ['book-A', 'book-B','book-C','book-D','book-E','book-F'],

        shelfTwo:
            ['book-J','book-I', 'book-H', 'book-G']}
    )

    //Funtion to create a new book on the first shelf.
    const createShelfOne = () =>{
        if(countOne >= 0){
             const item = Array.from(sort.shelfOne)
             const reorder = item.push(`${sort.shelfTwo[countOne]}`)
             console.log(reorder)

             setSort((prevShelf) =>{
                 return{...prevShelf, shelfOne:item}
             })

             setCountOne(countOne - 1)
         }
         else if(sort.shelfTwo[sort.shelfTwo.length - 1] === undefined){
             return;
         }
    }

    //Funtion to delete book on the first shelf.
    const deleteShelfOne = ()=>{
        const item = Array.from(sort.shelfOne)

        item.splice(0, 1)

        setSort((prevShelf) =>{
            return{...prevShelf, shelfOne:item}
        })
    }

    // Funtion to create a new book on the second shelf.
    const createShelfTwo = () =>{
           if(countTwo >= 0){
                const item = Array.from(sort.shelfTwo)
                const reorder = item.push(`${sort.shelfOne[countTwo]}`)
                console.log(reorder)

                setSort((prevShelf) =>{
                    return{...prevShelf, shelfTwo:item}
                })

                setCountTwo(countTwo - 1)
            }
            else if(sort.shelfTwo[sort.shelfTwo.length - 1] === undefined){
                return;
            }
    }

    //Funtion to delete book on the second shelf.
    const deleteShelfTwo = ()=>{
        const item = Array.from(sort.shelfTwo)
        
        item.splice(sort.shelfTwo.length - 1, 1)

        setSort((prevShelf) =>{
            return{...prevShelf, shelfTwo:item}
        })
    }

    //Funtion to update the position of the books after moving the first shelf.
    function handleOnDragEndOne (result){
        if(!result.destination) return;
        
        const itemsOne =Array.from(sort.shelfOne);
        const [reorderedItemOne] = itemsOne.splice(result.source.index, 1);
        
        itemsOne.splice(result.destination.index, 0, reorderedItemOne)

        setSort((prevShelf) => {
            return{...prevShelf, shelfOne:itemsOne}
            })
    }

    //Function to update the position of the books after moving the second shelf.
    function handleOnDragEndTwo (result){
        if(!result.destination) return;
        
        const itemsTwo =Array.from(sort.shelfTwo);
        const [reorderedItemTwo] = itemsTwo.splice(result.source.index, 1);
        
        itemsTwo.splice(result.destination.index, 0, reorderedItemTwo)

        setSort((prevShelf) => {
            return{...prevShelf, shelfTwo:itemsTwo}
    
            })

    }

    const shelfComplete = ['book-A', 'book-B','book-C','book-D','book-E','book-F','book-G', 'book-H', 'book-I','book-J']

    //Function to change books with two clicks on the first shelf
    const handleChangeOne = (e) => {
        setClick(click + 1)
        if(click === 2){
            const number = Math.round((Math.random() * (9 - 1) + 1))
            const item = Array.from(sort.shelfOne)
            const index =sort.shelfOne.indexOf(`${e.target.id}`)
            item.splice(index, 1, `${shelfComplete[number]}`)
            
           
            setSort(prevShelf =>{
                return {...prevShelf, shelfOne:item}
            })

            setClick(click - 1)
          
        }
    }

    //Function to change books with two clicks on the second shelf
    const handleChangeTwo = (e) => {
        setClick(click + 1)
        if(click === 2){
            const number = Math.round((Math.random() * (9 - 1) + 1))
            const item = Array.from(sort.shelfTwo)
            const index =sort.shelfTwo.indexOf(`${e.target.id}`)
            item.splice(index, 1, `${shelfComplete[number]}`)
            
           
            setSort(prevShelf =>{
                return {...prevShelf, shelfTwo:item}
            })

            setClick(click - 1)
          
        }
    }

    console.log(sort.shelfOne)
    

    return(
        <div className="bookcase">
            <button 
            onClick={createShelfOne} className="createShelfOne arrow"></button>

            <button onClick={deleteShelfOne} className="deleteShelfOne arrow">
            </button>

            <button 
            onClick={createShelfTwo} className="createShelfTwo arrow"></button>

            <button onClick={deleteShelfTwo} className="deleteShelfTwo arrow">
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
                        {sort.shelfOne.map((item, index) =>{
                            return(
                                <Draggable index={index}  key={index} draggableId={item}>
                                    {(provided) => (
                                        <figure id={item} className="books" 
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            onClick={handleChangeOne}
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
                    style={{cursor: snapshot.isDraggingOver ? 'grabbing' : 'grab' }}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                        {sort.shelfTwo.map((item, index) =>{
                            return(
                                <Draggable index={index}  key={index} draggableId={item}>
                                    {(provided) => (
                                        <figure id={item} className="books" 
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            onClick={handleChangeTwo}
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

           <Board setSort={setSort} sort={sort}/>
        </div>
    )
}

export default Bookcase

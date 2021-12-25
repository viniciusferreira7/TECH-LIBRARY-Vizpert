import React from 'react'
import './styles/Book.css'
import { useDrag } from 'react-dnd'

function Book() {

    const [{opacity}, dragRef] = useDrag({
        type : 'figure',
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0 : 1 
        })
    })

    return (
        <figure className='books'>
            m
        </figure>
    )
}

export default Book

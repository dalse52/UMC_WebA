import React from 'react'
import Input from './Input.jsx'
import './List.css'

function List({ props, Todos }) {
    return (
        <>
            <h3>{props.name}</h3>
            <ul>
                {Todos.map((todo) => (
                    <li key={todo.id} isDone={todo.isDone? 'true':'false'}>{todo.content}</li>
                ))}
            </ul>
        </>
    )

}

export default List
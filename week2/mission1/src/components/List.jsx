import React from 'react'
import Input from './Input.jsx'
import './List.css'

function List({ name, Todos }) {
    function click(e) {
        console.log(e.target.parentElement.key);
        if (!isDone) {
            SetTodos(e.target.value);
            SetTodos([...Todos]);
            console.log("!isDone");
        } else {
            SetTodos([...Todos]); 
            console.log("else");
        }

    }

    return (
        <>
            <h3>{name}</h3>
            <ul>
                {Todos.map((todo) => (
                    <li key={todo.id} isDone={todo.isDone? 'true':'false'}>
                    <span>{todo.content}</span>
                    <button onClick={(e) => click}>{todo.isDone? "삭제":"완료"}
                    </button>
                    <hr></hr>
                    </li>
                ))}
            </ul>
        </>
    )

}

export default List
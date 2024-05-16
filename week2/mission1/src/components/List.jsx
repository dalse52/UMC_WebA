import React, { useState } from 'react'
import Input from './Input.jsx'
import './List.css'

function List({ name, Todos, setTodos }) {
    function click(id) { //chat GPT (...)
        console.log(Todos);
        console.log(id);
        setTodos(Todos => {
            return Todos.map(todo => {
                if (todo.id === id) {
                    if (todo.isDone == false) {
                        return { ...todo, isDone: !todo.isDone };
                    }
                    else {
                        console.log("제거하기");
                        todo.filter(todo => todo.id !== todo.id) // 오류 발생?
                    }
                    // return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            });
        });


        // setTodos(Todos => {
        //     const newTodos = [...Todos];
        //     newTodos[id].isDone = !newTodos[id].isDone;
        //     return newTodos;
        // });


        // const clicked = e.target.parentElement;
        // if (e.target.parentElement.className == "willdo") {
        //     e.target.text = "삭제";
        // }
        // else if (e.target.parentElement.className == "done") {
        //     console.log(clicked.parentElement);
        //     (clicked.parentElement).removeChild(clicked);
        // } 

    }

    return (
        <>
            <h3>{name}</h3>
            <ul>
                {Todos.map((todo) => (
                    <li key={todo.id} className={todo.isDone? "done":"willdo"}>
                    <span>{todo.content}</span>
                    <button onClick={() => click(todo.id)}>{todo.isDone? "삭제":"완료"}
                    </button>
                    <hr></hr>
                    </li>
                ))}
            </ul>
        </>
    )

}

export default List
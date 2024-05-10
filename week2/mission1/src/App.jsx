import React, { useState } from 'react'
import './App.css'
import Input from './components/Input.jsx'
import List from './components/List.jsx'

function App() {
  const [Todos, setTodos] = useState([
    { id: 0, content: "Send E-mail", isDone: false },
    { id: 1, content: "Make Work-Books", isDone: false },
    { id: 2, content: "Sleeping", isDone: true },
    { id: 3, content: "Watching You-Tube", isDone: true },
  ]);

  // 왜 addTodo를 굳이 따로 함수로 만드는 거지?
  const addTodo = (newTodo) => {
    setTodos([...Todos, newTodo]);
  };

  return (
    <>
      <h1>UMC Study Plan</h1>
      <hr></hr>
      <Input addTodo={addTodo}></Input>
      <br></br>
      <div>
      <List name="해야 할 일" Todos={Todos} setTodos={setTodos}></List>
      <List name="해낸 일" Todos={Todos} setTodos={setTodos}></List>
      </div>
    </>
  )
}

export default App

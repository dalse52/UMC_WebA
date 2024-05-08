import React, { useState } from 'react'
import './App.css'
import Input from './components/Input.jsx'
import List from './components/List.jsx'

function App() {

  return (
    <>
      <h1>UMC Study Plan</h1>
      <hr></hr>
      <Input></Input>
      <br></br>
      <div>
      <List name="해야 할 일"></List>
      <List name="해낸 일"></List>
      </div>


    </>
  )
}

export default App

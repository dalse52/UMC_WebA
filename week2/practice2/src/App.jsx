// /* eslint-disable */ : warning 무시?

import React, { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Modal from './components/Modal.jsx';
import './components/Modal.css';

function App() {

  const [modal, setModal] = useState(true);

  const open = () => {
    console.log("open 클릭됨");
    setModal((modal) => (true));
    console.log(modal);
  }

  const close = () => {
    setModal((modal) => (false));
    console.log(modal);
  }

  return (
    <>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <div>
        <button onClick={open}>
          버튼 열기
        </button>
        <Modal modal={modal} close={close}></Modal>
      </div>
    </>
  )
}

export default App

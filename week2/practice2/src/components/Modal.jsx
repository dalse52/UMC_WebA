//import React, { useState } from '../App.jsx';
import React from 'react'
//import App from '../App.jsx';
import './Modal.css';
import * as App from '../App.jsx';

function Modal({ close, modal }) {

    return (
        <div className="modal-wrapper" style={{display : modal ? 'flex' : 'none'}}>
          <div className="modal">
            <h1 className="modal-title">안녕하세요</h1>
            <p>모달 내용은 어쩌고 저쩌고</p>
            <button className="close-wrapper" onClick={close}>
            닫기
            </button>
            </div>
        </div>
    )
  }
  
  export default Modal
  
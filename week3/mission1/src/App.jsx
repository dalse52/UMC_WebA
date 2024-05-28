// import { useState } from 'react'
import React from 'react'
import './App.css'

import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage.jsx'
import PopularPage from './pages/PopularPage.jsx'
import NowPlayingPage from './pages/NowPlayingPage.jsx'
import TopRatedPage from './pages/TopRatedPage.jsx'
import UpComing from './pages/UpComing.jsx'

// import './main.jsx'

// const axios = require('axios'); //오히려 이게 없어야 코드가 돌아감: node.js 코드니까;

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/authentication',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWI1ZDkwMzMyNDk0MzJmMjcwMGRiZjFmNWVkMDc4YSIsInN1YiI6IjY2NGE5YjdjZWZjYjI3NjdiMDc5NzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLzAt7LqH1OakDeqjSIRR2ZQX72ufvCyDyT37T9SVsA'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

  // axios.get()

function App() {

  return (
    <>
    <p>App입니다.</p>
    {/* <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/nowplaying" element={<NowPlayingPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComing />} />
      </Routes>
    </Router> */}
    </>
  )
}

export default App

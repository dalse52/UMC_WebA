import React, { props } from 'react'
import ReactDOM from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import Navbar from './components/Nav/Navbar.jsx'

import MainPage from './pages/MainPage.jsx'
import PopularPage from './pages/PopularPage.jsx'
import NowPlayingPage from './pages/NowPlayingPage.jsx'
import TopRatedPage from './pages/TopRatedPage.jsx'
import UpComing from './pages/UpComing.jsx'

import MovieDetailPage from './components/Movie/MovieDetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

import SignupPage from './pages/SignupPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* 문제 알아내는 도구. 화면에 영향 x.*/}
  
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<p>홈페이지입니다.</p>} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/nowplaying" element={<NowPlayingPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComing />} />
        

        <Route path="/movie/:moviename" element={<MovieDetailPage/>} />

        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/*" element={<NotFoundPage/>} />
        {/* NotFoundPage: 허접하게 만든 듯...) */}
      </Routes>
    </Router>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
);

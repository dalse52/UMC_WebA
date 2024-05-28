import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Navbar from './components/Nav/Navbar.jsx'

import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx'
import PopularPage from './pages/PopularPage.jsx'
import NowPlayingPage from './pages/NowPlayingPage.jsx'
import TopRatedPage from './pages/TopRatedPage.jsx'
import UpComing from './pages/UpComing.jsx'

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
        <Route path="/" element={<MainPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/nowplaying" element={<NowPlayingPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpComing />} />
      </Routes>
    </Router>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
);

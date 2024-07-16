import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MovieInfo from '../components/Movie/MovieInfo.jsx';

function NowPlayingPage() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWI1ZDkwMzMyNDk0MzJmMjcwMGRiZjFmNWVkMDc4YSIsInN1YiI6IjY2NGE5YjdjZWZjYjI3NjdiMDc5NzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLzAt7LqH1OakDeqjSIRR2ZQX72ufvCyDyT37T9SVsA'
    }
  };

  return (
    <MovieInfo options={options}/>
  )
}

export default NowPlayingPage

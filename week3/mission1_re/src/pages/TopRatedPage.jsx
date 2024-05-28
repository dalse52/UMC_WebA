import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MovieDetailPage from '../components/Movie/MovieDetailPage';

function TopRatedPage() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWI1ZDkwMzMyNDk0MzJmMjcwMGRiZjFmNWVkMDc4YSIsInN1YiI6IjY2NGE5YjdjZWZjYjI3NjdiMDc5NzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLzAt7LqH1OakDeqjSIRR2ZQX72ufvCyDyT37T9SVsA'
    }
  };

  return (
    <MovieDetailPage options={options}/>
  )
}

export default TopRatedPage
import React, { useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'
import MovieDetailPage from '../components/Movie/MovieDetailPage';

const base_url = "https://image.tmdb.org/t/p";
const file_size = "/w200";

const Content = styled.div`
  display: inline-block;
  position: relative;
  margin-inline: 10px;
  vertical-align: text-top;
`;

const Info = styled.div`
  position: relative;
  top: -10px;
  display: block;
  background-color: #32355F;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 180px;
  height: 80px;
  padding: 10px;
  // font-size: 0;

  justify-content: space-between;
`;

const Text = styled.p`
  display: inline-block;
  // text-align:justify;
  // justify-content: space-between;
  width: 80px;
  
  margin-block-start: 0;
`;

function PopularPage() {
  const [MovieList, setMovieList] = useState({ results: [] })

  // const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWI1ZDkwMzMyNDk0MzJmMjcwMGRiZjFmNWVkMDc4YSIsInN1YiI6IjY2NGE5YjdjZWZjYjI3NjdiMDc5NzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLzAt7LqH1OakDeqjSIRR2ZQX72ufvCyDyT37T9SVsA'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setMovieList(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <>
      {/* <MovieDetailPage></MovieDetailPage> */}
      
      {/* <div>
      {Movie && <textarea rows={30} value={JSON.stringify(Movie.results)} readOnly={true}/>}
      </div> */}

      {MovieList.results.map(movie => (
        <Content key={movie.id}>
          <img src={base_url + file_size + movie.poster_path}/>
          <Info>
            <Text className='title'>{movie.title}</Text>
            <Text className='average'>⭐{movie.vote_average}</Text>
          </Info>
        </Content>
      ))}


    </>
  )
}

export default PopularPage

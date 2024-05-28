// 일단 나중에 하기(id 가져오는 문제)

import React, { props, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const base_url = "https://image.tmdb.org/t/p";
const file_size = "/w200";

const Hover = styled.div`
  font-size: medium;
  color: white;
  background-color: rgb(0, 0, 0, 0.5);
  /* visibility: hidden; */
  position: relative;
  border-radius: 5px;
  margin-inline: 10px;
  display: inline-block;
  width: 180px;
  height: 380px;
  padding: 10px;
  vertical-align: text-top;
`;

const Overview = styled.p`
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

function MovieDetailPage() {
  const [Movie, setMovie] = useState( none );
    
  // const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/movie_id', //id->props
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWI1ZDkwMzMyNDk0MzJmMjcwMGRiZjFmNWVkMDc4YSIsInN1YiI6IjY2NGE5YjdjZWZjYjI3NjdiMDc5NzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLzAt7LqH1OakDeqjSIRR2ZQX72ufvCyDyT37T9SVsA'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setMovie(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
  <>
    <p>MovieDetailPage임.</p>
  </>

  )

}
  


export default MovieDetailPage
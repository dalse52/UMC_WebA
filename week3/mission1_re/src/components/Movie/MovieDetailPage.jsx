import React, { props, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const base_url = "https://image.tmdb.org/t/p";
const file_size = "/w200";

const Content = styled.div`
  display: inline-block;
  position: relative;
  margin-inline: 10px;
  vertical-align: text-top;

  z-index: 1;
`;

const Poster = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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

  justify-content: space-between;
`;

const Text = styled.p`
  display: inline-block;
  // text-align:justify;
  // justify-content: space-between;
  width: 80px;
  
  margin-block-start: 0;

  vertical-align: text-top;
`;

const Hover = styled.div`
  font-size: medium;
  color: white;
  background-color: rgb(0, 0, 0, 0.5);
  visibility: hidden;
  position: absolute;
  border-radius: 5px;
  // margin-inline: 10px;
  // display: inline-block;
  width: 180px;
  height: 380px;
  padding: 10px;
  vertical-align: text-top;

  z-index: 2;
  top: 0px;

  ${Content}:hover & {
    visibility: visible;
  }

`;

const Overview = styled.p`
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

function MovieDetailPage({options}) {
  // const [Movie, setMovie] = useState( none );
  const [MovieList, setMovieList] = useState({ results: [] });
   // ㄴ 코드 이모양이어도 문제가 없네?...

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
    {MovieList.results.map(movie => (
      // <>
      //   <Content key={movie.id}>
      //     <img src={base_url + file_size + movie.poster_path}/>
      //     <Info>
      //       <Text className='title'>{movie.title}</Text>
      //       <Text className='average'>⭐{movie.vote_average}</Text>
      //     </Info>
      //   </Content>
      //   <Hover>
      //     <Overview>{movie.Overview}</Overview>
      //   </Hover>
      // </>
        <Content key={movie.id}>
          <Poster src={base_url + file_size + movie.poster_path} />
          <Info>
            <Text className='title'>{movie.title}</Text>
            <Text className='average'>⭐{movie.vote_average}</Text>
          </Info>
        <Hover>
          <Overview>{movie.overview}</Overview>
        </Hover>
        </Content>
        ))}

  </>

  )

}
  
export default MovieDetailPage
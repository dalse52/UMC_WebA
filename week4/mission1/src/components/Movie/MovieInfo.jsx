import React, { props, useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { useNavigate, useLocation, useParams } from "react-router-dom";

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
  top: -5px;
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
  width: 200px;
  height: 400px;
  // padding: 10px;
  vertical-align: text-top;

  z-index: 2;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  margin: 0px;

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

  padding: 10px;
`;

function MovieInfo({options}) {
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



    
    const navigate = useNavigate();
    const detail = ( movie ) => {
      console.log("movie:" + movie);
        
        console.log("detail 함수 호출 -매핑X");
         
        // url에 띄쓰 있는데 이게 맞나?
        navigate(`/movie/${movie.title}`, { state: { key: movie } });
        //console.log(key);


    
      
      // v5 방식(구버전)
      //this.props.history.push(`/movie/${key}`);
    };
    
    const location = useLocation();
    // new URL("." + window.origin + location.pathname);

    const param = useParams(); // 흠...

    const NewId = () => {
        // let { id } = useParams();
    }

    // useEffect(detail)
    // useEffect(() => {
    //   console.log(location);
    // }, [ location ])


  return (
  <>
    {MovieList.results.map(movie => (
        <Content key={movie.id} onClick={()=>detail(movie)}>
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
  
export default MovieInfo
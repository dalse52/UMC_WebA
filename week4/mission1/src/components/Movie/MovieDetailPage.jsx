import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const base_url = 'https://image.tmdb.org/t/p';
const file_size = '/w200';
const nulltext = 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.';

// axios 통해서 데이터 가져온다면: useEffect

const data = {
  text: 'datatest',
};

const BackdropIMG = styled.img`
  opacity: 0.5;

  // 임시
  width: auto;
  height: auto;
`;

const Backdrop = styled.div``;
const Poster = styled.img`
  // 임시
  width: 100px;
  height: auto;
`;
const Info = styled.div``;
const Title = styled.p``;
const STitle = styled.p``;
const Star = styled.div`
// GPT
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
`;
const Text = styled.p``;

function NumtoStar(vote_average) {
  let str = '';
  const star = Math.ceil(vote_average);

  for (let i = 0; i < star; i++) {
    str += '⭐';
  }

  return str;
}


function MovieDetailPage({ options }) {
  const location = useLocation();
  const state = location.state || {}; // GPT: 기본값으로 null

  console.log('Location state:', state);

  // GPT
if (!Object.keys(state).length) {
  return <p>No data available</p>;  // state가 비어 있을 때 메시지를 출력합니다.
}


  return (
    <>
      {Object.keys(state).map((key) => (
        <div key={key}>
          <BackdropIMG src={base_url + file_size + state[key].backdrop_path}></BackdropIMG>
          <Backdrop></Backdrop>
          <Poster src={base_url + file_size + state[key].poster_path}></Poster>
          <Info>
            <Title>{state[key].title}</Title>
            {/* 평점 어떡할 거야... */}
            <STitle star={NumtoStar(state[key].vote_average)}>평점(⭐)
              <Star><Text>⭐</Text></Star>
            </STitle>
            <STitle>개봉일 {state[key].release_date}</STitle>
            <STitle>줄거리</STitle>
            <Text>{state[key].overview? state[key].overview : nulltext}</Text>
          </Info>
        </div>


      ))}

    </>
  );
}

export default MovieDetailPage;

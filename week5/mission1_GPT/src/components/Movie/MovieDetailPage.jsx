import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const base_url = 'https://image.tmdb.org/t/p';
const file_size = '/w200';
const nulltext = 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.';

// axios 통해서 데이터 가져온다면: useEffect

const BackdropIMG = styled.img`
  opacity: 0.2;

  // // 임시
  // width: 100%;
  // height: 100%;
  // backgroundImage: div로 바꾸고 화질 때문에 이걸로 해야 할 것 같은데... 변수 쓸 수 있나?
`;

const Backdrop = styled.div`
  // inline-block 먹는데 안 됨 !!!
  // display: inline-block;
  // 이거맞나?...

  // GPT - 이해 안 됨
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url(${props => props.backgroundimg});
  background-size: cover;
  background-position: center;
`;

const Poster = styled.img`
  width: 200px;
  height: auto;

  // display: inline-block;
`;

const Info = styled.div`
  display: inline-block;
`;

const Title = styled.p`
  font-weight: bolder;
  font-size: x-large;
`;

const STitle = styled.p`
  font-weight: bolder;
  font-size: medium;
`;

const Text = styled.p``;

function NumtoStar(vote_average) {
  let str = '⭐';
  const star = Math.floor(vote_average);
  return str.repeat(star);
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
          {/* <BackdropIMG src={base_url + file_size + state[key].backdrop_path}></BackdropIMG> */}
          {/* backgroundImage={} */}
          <Backdrop key={key} backgroundimg={base_url + file_size + state[key].backdrop_path}>
            <Info>
              <Poster src={base_url + file_size + state[key].poster_path}></Poster>
            </Info>
            <Info>
              <Title>{state[key].title}</Title>
              <STitle>평점 {NumtoStar(state[key].vote_average)}</STitle>
              <STitle>개봉일 {state[key].release_date}</STitle>
              <STitle>줄거리</STitle>
              <Text>{state[key].overview? state[key].overview : nulltext}</Text>
            </Info>
          </Backdrop>
        </div>


      ))}

    </>
  );
}

export default MovieDetailPage;

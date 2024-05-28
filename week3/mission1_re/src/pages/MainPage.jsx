import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  height: 50%;
  margin-left: 0px;
  margin-right: 0px;
  text-align: center;
`;


function MainPage() {
  return (
    <Main>
      <h2>환영합니다</h2>
    </Main>
  )

  // return (
  //   <div className='mainpage'>
  //     <h2>환영합니다</h2>
  //   </div>
  // )
}

export default MainPage

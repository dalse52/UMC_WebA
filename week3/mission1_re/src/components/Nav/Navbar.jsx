import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
    // position:absolute;
    width: 100%;
    height: 50px;
    background-color: #171A32;
    display: flex;
    justify-content: space-between;
    margin: 0;
`;

const Menu = styled.div`
    display: inline-block;
    width: 100%;
`;

const Tab = styled(Link)`
    text-decoration : none;
    color: white;

    text-align: center;

    width: 100%;
    margin: 1%;
    // margin 조정하면 두 줄 되고 난리남(...)

    &:hover{  
        // 커서 변경은 크롬에서 해 주는 것 같은데?...
        font-size: larger;
        vertical-align: text-top;
      }
`;


function Navbar() {
    return (
        <Nav>
            <Menu>
                <Tab to="/">UMC Movie</Tab>
            </Menu>
            <Menu>
                <Tab to="/">회원가입</Tab>
                <Tab to="/popular">Popular</Tab>
                <Tab to="/nowplaying">Now Playing</Tab>
                <Tab to="/toprated">Top Rated</Tab>
                <Tab to="/upcoming">Upcoming</Tab>
            </Menu>
        </Nav>

    )
}

export default Navbar
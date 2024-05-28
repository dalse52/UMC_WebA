import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
    // position:absolute;
    width: 100%;
    height: auto;
    background-color: darkblue;
    display: flex;
    justify-content: space-between;
    margin: 0;
`;

const Menu = styled.div`
    display: inline;
`;

const Tab = styled(Link)`
    text-decoration : none;
    color: white;

    width: auto;
    margin: 1%;
`


function Navbar() {
    return (
        <Nav>
            <Menu>
                <Tab to='/'>UMC Movie</Tab>
            </Menu>
            <Menu>
                <Tab to="/">회원가입</Tab>
                <Tab to="/popular">Popular</Tab>
                <Tab to="/nowplaying">Now Playing</Tab>
                <Tab to="/toprated">Top Rated</Tab>
                <Tab to="/upcoming">Upcoming</Tab>
            </Menu>
        </Nav>

        // <div className='navbar'>
        // </div>
    )
}

export default Navbar
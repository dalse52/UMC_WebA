import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

// 메인으로 이동하기: Link? useNavigate?


const Errortext = styled.div`
    text-align: center;
    font-size: large;
`;

const Gomain = styled.p`
    
`;

function NotFoundPage() {

    const navigate = useNavigate();

    const gomain = () => {
        navigate(`/main`);
    }
    
    return (
        <>
            <Errortext>
                Oops!
                <br></br>
                예상치 못한 에러가 발생했습니다;
                <br></br>
                Not Found
            </Errortext>
            <Gomain onClick={gomain}>메인으로 이동하기</Gomain>
        
        </>
    )
}

export default NotFoundPage
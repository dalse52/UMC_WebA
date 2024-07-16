import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import SignupForm from '../components/Signup/SignupForm';

const Signup = styled.div`
    // text-align: cetner;
    
    // margin: 0 auto;

    // margin: auto;

    // display: flex;
    // justify-content: center;

    display: grid;
    place-content: center;
`;

const Title = styled.p`
    text-align: center;
    font-weight: bolder;
    font-size: x-large;
`;

// 수정
const Form = styled.form`
    text-align: center;
`;

const Content = styled.div`
    margin: 5%;
`;

const Label = styled.label`

`;

// 오프라인 작성
const Input = styled.input`
    border-radius: 50px;
    border-width: 0px;
    border-color: white;

    // 가운데정렬 전
    // width: 60%;
    // height: 60px;

    width: 100%;
    height: 60px;
`;

const EMessage = styled.div`
    display: none;
    color: green;
`;

// button -> submit으로 해 봄
const Submit = styled.input`
    border-radius: 50px;
    border-width: 0px;
    border-color: white;

    // 가운데정렬 전
    // width: 60%;
    // height: 60px;

    width: 100%;
    height: 60px;

    text-align: center;
    font-weight: bolder;
    font-size: x-large;
`;

const Text = styled.p`

`;

const submit = () => {
    // 제출 버튼 클릭: 유효성 검사
    checkID();
    checkEM();
    checkAGE();
    checkPW();
    checkPWDB();

    // 전부 true: 데이터 전달(어디에?)

    //const status = useFormStatus();
    

}

const checkID = () => {

}

const checkEM = () => {

}

const checkAGE = () => {

}

const checkPW = () => {

}

const checkPWDB = () => {
    
}

function SignupPage() {

    //const { pending, data, method, action } = useFormStatus();

    return (
        <Signup>
            <Title>회원가입 페이지</Title>
            
            <SignupForm/>

            <Text>이미 아이디가 있으신가요?</Text>
            <Text>로그인 페이지로 이동하기</Text>
        </Signup>
    );

}

export default SignupPage
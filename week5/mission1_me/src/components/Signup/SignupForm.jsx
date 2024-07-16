import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

// styled component: 복붙
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
    // display: none;
    color: ${props => props.visible ? 'red' : 'green'};
    display: ${props => props.visible ? 'block' : 'none'};
`;

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

// @@page
function SignupForm() {
    const [Sub, setSub] = useState();

    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm({mode: "onChange"});

    const onSubmit = (data) => {
        setSub(true);
        console.log(data);
        console.log(errors);
      };
    
      
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Content>
                <Input type="text" name="name" id="name"
                placeholder="이름을 입력해주세요"
                {...register("name", {required: true})}></Input>
                {/* {errors.name && <EMessage>이름을 입력해주세요.</EMessage>} */}
                
                {errors.name? <EMessage visible={Sub}>이름을 입력해주세요.</EMessage> : <EMessage visible={Sub}>멋진 이름이네요!</EMessage>}
            </Content>

            <Content>
            {/* 이메일: @ 포함 어떻게 !!! */}
                <Input type="email" name="email" id="email"
                placeholder="이메일을 입력해주세요"
                {...register("email", {required: true})}></Input>
                <EMessage>올바른 이메일 형식입니다!</EMessage>
            </Content>

            <Content>
                {/* 나이: 조건 개까다로움 ㅇㄴ */}
                <Input type="text" name="age" id="age"
                placeholder="나이를 입력해주세요"
                {...register("age", {required: true, min: 19})}></Input>
                <EMessage>올바른 나이 형식입니다!</EMessage>
            </Content>

            <Content>
            {/* 길이만 해 둠 */}
                <Input type="password" name="pw" id="pw"
                placeholder="비밀번호를 입력해주세요"
                {...register("password", {required: true, minLength: 4, maxLength: 12})}></Input>
                <EMessage>올바른 비밀번호입니다!</EMessage>
            </Content>

            <Content>
                {/* 사용자 정의 로직 필요 ? pw와 일치하나?*/}
                <Input type="password" name="pwdb" id="pwdb"
                placeholder="비밀번호 확인"
                {...register("pwdb", {required: true})}></Input>
                <EMessage>비밀번호가 일치합니다.</EMessage>
            </Content>

            <Submit type="submit" value="제출하기"></Submit>
        </Form>
    );
}
export default SignupForm;
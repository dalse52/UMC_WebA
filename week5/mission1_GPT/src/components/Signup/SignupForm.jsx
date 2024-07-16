import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const Signup = styled.div`
    display: grid;
    place-content: center;
`;

const Title = styled.p`
    text-align: center;
    font-weight: bolder;
    font-size: x-large;
`;

const Form = styled.form`
    text-align: center;
`;

const Content = styled.div`
    margin: 5%;
`;

const Label = styled.label``;

const Input = styled.input`
    border-radius: 50px;
    border-width: 0px;
    width: 100%;
    height: 60px;
`;

const Message = styled.div`
    color: ${props => props.$error ? 'red' : 'green'};
    display: ${props => props.$visible ? 'block' : 'none'};
`;

const Submit = styled.input`
    background-color: ${props => props.$error ? 'white' : 'yellow'};
    border-radius: 50px;
    border-width: 0px;
    width: 100%;
    height: 60px;
    text-align: center;
    font-weight: bolder;
    font-size: x-large;
`;

const Text = styled.p``;

function SignupForm() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        // alert창
        alert("회원가입 성공! 메인페이지로 이동합니다.");
        navigate(`/main`);
    };

    const onError = (errors) => {
        console.log("제출 실패: " + errors);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <Content>
                <Input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="이름을 입력해주세요"
                    {...register("name", { required: '이름을 입력해주세요!' })}
                />
                {errors.name && <Message $error={true} $visible={true}>{errors.name.message}</Message>}
            </Content>

            <Content>
                <Input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="이메일을 입력해주세요"
                    {...register("email", { 
                        required: '이메일을 입력해주세요!', 
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]+$/,
                            message: '유효한 이메일 주소를 입력해주세요.'
                        }
                    })}
                />
                {errors.email && <Message $error={true} $visible={true}>{errors.email.message}</Message>}
            </Content>

            <Content>
                <Input
                    name="age"
                    type="text"
                    id="age"
                    placeholder="나이를 입력해주세요"
                    {...register("age", {
                        required: '나이를 입력해주세요!',
                        validate: {
                            isInteger: value => !/^[0-9]+\.[0-9]+$/.test(value) || '나이를 실수로 입력할 수 없습니다.',
                            isPositive: value => !/^-[0-9]+$/.test(value) || '나이는 양수여야 합니다.',
                            isNumber: value => /^[0-9]+$/.test(value) || '나이는 숫자로 입력해주세요!',
                            minAge: value => parseInt(value) >= 19 || '19세 이상만 사용 가능합니다!'
                        }
                    })}
                />
                {errors.age && <Message $error={true} $visible={true}>{errors.age.message}</Message>}
            </Content>

            <Content>
                <Input
                    name="pw"
                    type="password"
                    id="pw"
                    placeholder="비밀번호를 입력해주세요"
                    {...register("pw", {
                        required: '비밀번호를 입력해주세요!',
                        minLength: {
                            value: 4,
                            message: '최소 4자리 이상 입력해주세요.'
                        },
                        maxLength: {
                            value: 12,
                            message: '최대 12자리까지 입력 가능합니다.'
                        },
                        pattern: {
                            value: /(?=.*\d{1})(?=.*[~`!@#$%\^&*()-+=]{1})(?=.*[a-zA-Z]{1}).{4,12}$/,
                            message: '비밀번호는 영어, 숫자, 특수문자를 포함해주세요.'
                        }
                    })}
                />
                {errors.pw && <Message $error={true} $visible={true}>{errors.pw.message}</Message>}
            </Content>

            <Content>
                <Input
                    name="pwdb"
                    type="password"
                    id="pwdb"
                    placeholder="비밀번호 확인"
                    {...register("pwdb", {
                        required: '비밀번호 확인을 입력해주세요!',
                        validate: {
                            matchesPreviousPassword: (value) => {
                                const { pw } = getValues();
                                return pw === value || '비밀번호가 일치하지 않습니다.';
                            }
                        }
                    })}
                />
                {errors.pwdb && <Message $error={true} $visible={true}>{errors.pwdb.message}</Message>}
            </Content>

            <Submit type="submit" value="제출하기" $error={errors.name || errors.email || errors.age || errors.pw || errors.pwdb}/>
        </Form>
    );
}

export default SignupForm;

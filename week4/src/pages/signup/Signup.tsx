import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignUpInfo, signUp } from '../../api';
import { formatPhoneNumber, validatePassword } from '../../utils';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState({ id: false, password: false, nickName: false, phone: false });

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nickNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'id') {
      if (error.id) setError({ ...error, id: false });
      setId(value);
    } else if (name === 'password') {
      if (error.password) setError({ ...error, password: false });
      setPassword(value);
    } else if (name === 'nickName') {
      if (error.nickName) setError({ ...error, nickName: false });
      setNickName(value);
    } else if (name === 'phone') {
      if (error.phone) setError({ ...error, phone: false });
      setPhone(formatPhoneNumber(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError({ id: !id, password: !password, nickName: !nickName, phone: !phone });

    if (!id) {
      alert('아이디를 입력해주세요.');
      idRef.current!.focus();

      return;
    }

    if (!password) {
      alert('비밀번호를 입력해주세요.');
      passwordRef.current!.focus();

      return;
    }

    if (!nickName) {
      alert('닉네임을 입력해주세요.');
      nickNameRef.current!.focus();

      return;
    }

    if (!phone) {
      alert('전화번호를 입력해주세요.');
      phoneRef.current!.focus();

      return;
    }

    if (!validatePassword(password)) {
      alert('비밀번호는 최소 8자 이상이며, 숫자, 문자, 특수문자를 각각 최소 하나 이상 포함해야 합니다.');

      return;
    }

    const userInfo: SignUpInfo = {
      id,
      password,
      nickName,
      phone,
    };

    const data = await signUp(userInfo);

    if (data?.code === 201) {
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    }
  };

  useEffect(() => {}, [phone]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>회원가입</Title>

        <FlexContainer>
          <Label htmlFor="id">ID</Label>
          <Input
            name="id"
            placeholder="아이디"
            value={id}
            onChange={(e) => onChange(e)}
            ref={idRef}
            $isError={error.id}
          />
        </FlexContainer>

        <FlexContainer>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => onChange(e)}
            ref={passwordRef}
            $isError={error.password}
          />
        </FlexContainer>

        <Description>비밀번호 형식은 8자 이상, 소문자, 특수문자, 영어 알파벳이 포함되어야 합니다.</Description>

        <FlexContainer>
          <Label htmlFor="nickName">닉네임</Label>
          <Input
            name="nickName"
            placeholder="닉네임"
            value={nickName}
            onChange={(e) => onChange(e)}
            ref={nickNameRef}
            $isError={error.nickName}
          />
        </FlexContainer>

        <FlexContainer>
          <Label htmlFor="phone">전화번호</Label>
          <Input
            name="phone"
            placeholder="전화번호"
            value={phone}
            onChange={(e) => onChange(e)}
            ref={phoneRef}
            $isError={error.phone}
          />
        </FlexContainer>
        <Description>전화번호 형식은 010-****-****입니다.</Description>

        <ButtonContainer>
          <Button type="submit">회원가입</Button>
          <Button type="button" onClick={() => navigate(-1)}>
            뒤로가기
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  padding: 4rem 6rem;

  color: white;

  background-color: green;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Title = styled.p`
  margin-bottom: 1rem;

  color: white;
  font-size: 3rem;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Label = styled.label`
  width: 10rem;

  font-size: 1.6rem;
`;

const Input = styled.input<{ $isError: boolean }>`
  width: 15rem;
  padding: 1rem;

  border: 1px solid #ccc;
  border-radius: 5px;

  ${(props) =>
    props.$isError &&
    css`
      border-color: red;
    `}
`;

const Description = styled.p`
  width: 15rem;
  margin-left: 12rem;

  color: #d4d4d4;
  font-size: 1.2rem;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 1rem;

  color: white;

  background-color: ${({ theme }) => theme.color.blue};
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.color.deepBlue};
  }
`;

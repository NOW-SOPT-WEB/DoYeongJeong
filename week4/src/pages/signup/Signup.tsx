import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignUpInfo, signUp } from '../../api';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

  useEffect(() => {
    setPhone((prev) => {
      // TODO: util로 분리
      if ((prev.length === 4 || prev.length === 9) && prev[prev.length - 1] !== '-') {
        return prev.slice(0, prev.length - 1) + '-' + prev[prev.length - 1];
      } else if ((prev.length === 4 || prev.length === 9) && prev[prev.length - 1] === '-') {
        return prev.slice(0, prev.length - 1);
      }
      return prev;
    });
  }, [phone]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <Title>회원가입</Title>
        </div>
        <FlexContainer>
          <Label htmlFor="id">ID</Label>
          <Input name="id" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} required />
        </FlexContainer>

        <FlexContainer>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FlexContainer>

        <Description>비밀번호 형식은 8자 이상, 소문자, 특수문자, 영어 알파벳이 포함되어야 합니다.</Description>

        <FlexContainer>
          <Label htmlFor="nickName">닉네임</Label>
          <Input
            name="nickName"
            placeholder="닉네임"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            required
          />
        </FlexContainer>

        <FlexContainer>
          <Label htmlFor="phone">전화번호</Label>
          <Input
            name="phone"
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
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

const Input = styled.input`
  width: 15rem;
  padding: 1rem;

  border: 1px solid #ccc;
  border-radius: 5px;
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

  background-color: #007bff;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

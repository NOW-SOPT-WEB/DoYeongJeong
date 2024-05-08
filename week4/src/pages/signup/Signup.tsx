import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signUp } from '../../api';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userInfo = {
      id,
      password,
      nickName,
      phone,
    };

    const { data, location } = (await signUp(userInfo))!;

    if (data.code === 201) {
      navigate(`/${location}`);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Text>회원가입</Text>

        <label htmlFor="id">ID</label>
        <Input name="id" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} required />

        <label htmlFor="password">비밀번호</label>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="nickName">닉네임</label>
        <Input
          name="nickName"
          placeholder="닉네임"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          required
        />

        <label htmlFor="phone">전화번호</label>
        <Input name="phone" placeholder="전화번호" value={phone} onChange={(e) => setPhone(e.target.value)} required />
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
  gap: 2rem;
  align-items: center;
  width: 100%;
  padding: 3rem;

  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const Input = styled.input`
  width: 20rem;
  padding: 1rem;

  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
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

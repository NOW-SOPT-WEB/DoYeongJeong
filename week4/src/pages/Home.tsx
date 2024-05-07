import styled from '@emotion/styled';
import React, { useState } from 'react';

const Home = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 로그인 로직 처리

    // console.log('id:', id, 'Password:', password);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Text>Login</Text>
        <img src="public/assets/images/main.jpeg" alt="" width={'200px'} />
        <Input type="id" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} required />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 400px;
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

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

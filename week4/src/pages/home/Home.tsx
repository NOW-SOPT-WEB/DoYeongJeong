import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginInfo, login } from '../../api';

const Home = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idError, setIdError] = useState({
    open: false,
    message: 'id를 입력해주세요',
  });
  const [pwError, setPwError] = useState({
    open: false,
    message: 'password를 입력해주세요',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) {
      setIdError((prev) => {
        return { ...prev, open: true };
      });

      setTimeout(() => {
        setIdError((prev) => {
          return { ...prev, open: false };
        });
      }, 2000);
      return;
    }

    if (!password) {
      setPwError((prev) => {
        return { ...prev, open: true };
      });

      setTimeout(() => {
        setPwError((prev) => {
          return { ...prev, open: false };
        });
      }, 2000);

      return;
    }

    const loginInfo: LoginInfo = {
      id,
      password,
    };

    const { data, location } = (await login(loginInfo))!;

    if (data?.code === 200) {
      navigate(`/${location}`);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Img src={'public/assets/images/main.jpeg'} alt="" width={'20rem'} />

        <InputContainer>
          <Input type="id" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
          {idError.open && <Error>{idError.message}</Error>}
        </InputContainer>

        <InputContainer>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {pwError.open && <Error>{pwError.message}</Error>}
        </InputContainer>

        <ButtonContainer>
          <Button type="submit">로그인</Button>
          <Button type="button" onClick={() => navigate('signup')}>
            회원가입
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Home;

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
  max-width: 400px;
  padding: 4rem 10rem;

  background-color: green;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Title = styled.p`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-image: url(${(props) => props.src});
  background-size: cover;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 20rem;
  padding: 1rem;

  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Error = styled.p`
  position: absolute;
  bottom: -1.5rem;

  color: red;
  font-size: 1.2rem;
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

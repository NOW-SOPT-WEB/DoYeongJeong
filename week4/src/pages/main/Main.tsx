import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';

import video from '../../../public/assets/videos/chuu.mp4';

const Main = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Container>
      <Wrapper>
        <Title>웨비들 ❤️</Title>

        <video muted autoPlay loop preload="auto" width={'250px'}>
          <source src={video} />
        </video>

        <div>
          <Button
            onClick={() => {
              navigate(`/mypage/${id}`);
            }}>
            내 정보
          </Button>
          <Button
            onClick={() => {
              navigate('/signup');
            }}>
            회원가입
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 4rem;

  background-color: green;
  border-radius: 10px;
`;

const Title = styled.p`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const Button = styled.button`
  margin: 1rem;
  padding: 1rem;

  color: white;

  background-color: ${({ theme }) => theme.color.blue};
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.color.deepBlue};
  }
`;

import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Container>
      <Wrapper>
        <Title>웨비들 ❤️</Title>
        <Img src={'public/assets/images/web.png'} width={'60rem'} height={'40rem'} />
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

const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background-image: url(${(props) => props.src});
  background-size: cover;
`;

const Button = styled.button`
  margin: 1rem;
  padding: 1rem;

  color: white;

  background-color: #007bff;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
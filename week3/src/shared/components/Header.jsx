import styled from '@emotion/styled';

const Header = () => {
  return (
    <Wrapper>
      <Title>루피 캐릭터 맞추기</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.pink};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

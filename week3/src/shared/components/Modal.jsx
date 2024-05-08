import styled from '@emotion/styled';

const Modal = ({ isOpen, onClick }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent>
        <h2>축하합니다!</h2>
        <p>모든 루피를 맞췄어요!</p>
        <button onClick={onClick}>다시하기</button>
      </ModalContent>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 10px;

  h2 {
    text-align: center;
    margin: 1rem;
    font-size: 2.8rem;
  }

  p {
    font-size: 2rem;
  }

  button {
    display: block;
    margin: 2rem auto 0;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.darkPink};
    color: white;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.pink};
    }
  }
`;

export default Modal;

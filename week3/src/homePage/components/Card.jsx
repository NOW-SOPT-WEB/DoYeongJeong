import styled from '@emotion/styled';

import loopy_back_img from './../../../public/images/loopy_back.jpeg';

const Card = ({ card, index, handleFlip }) => {
  const handleClick = () => {
    handleFlip(index, card.id);
  };

  return (
    <CardContainer $isFlipped={card.flipped || card.matched} alt={card.alt} onClick={handleClick}>
      <CardFront backgroundImage={loopy_back_img} />
      <CardBack backgroundImage={card.img} />
    </CardContainer>
  );
};

export default Card;

export const CardContainer = styled.div`
  width: 15rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  ${(props) => props.$isFlipped && `transform: rotateY(180deg);`}
`;

const StyledCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundImage});
`;

const CardFront = styled(StyledCard)`
  z-index: 2;
  transform: rotateY(0deg);
`;

const CardBack = styled(StyledCard)`
  transform: rotateY(180deg);
`;

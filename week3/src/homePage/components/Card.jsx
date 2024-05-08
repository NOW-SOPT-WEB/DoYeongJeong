import styled from '@emotion/styled';

import loopy_back_img from './../../../public/images/loopy_back.jpeg';

const Card = ({ card, index, handleFlip }) => {
  const handleClick = () => {
    handleFlip(index, card.id);
  };

  return (
    <StyledCard
      className={`${card.flipped || card.matched ? 'flipped' : ''}`}
      backgroundImageBack={card.img}
      alt={card.alt}
      backgroundImageFront={loopy_back_img}
      onClick={handleClick}>
      <div className="card-front"></div>
      <div className="card-back"></div>
    </StyledCard>
  );
};

export default Card;

export const StyledCard = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-size: cover;
    background-position: center;
  }

  .card-front {
    background-image: url(${(props) => props.backgroundImageFront});
    z-index: 2;
    transform: rotateY(0deg);
  }

  .card-back {
    background-image: url(${(props) => props.backgroundImageBack});
    transform: rotateY(180deg);
  }
`;

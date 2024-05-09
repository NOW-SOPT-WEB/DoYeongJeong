import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

import Modal from './../../shared/components/Modal';
import { CardList } from './../../shared/constants/Card';
import { shuffleArray } from './../../shared/utils';
import Card from './Card';

const Home = () => {
  const isFirstRender = useRef(true);
  const [cards, setCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matched, setMatched] = useState(0);
  const [difficulty, setDifficulty] = useState(5);
  const [showModal, setShowModal] = useState(false);

  // 난이도에 따라 카드 초기화
  const initializeCards = (difficulty) => {
    const selectedCards = shuffleArray(CardList)
      .slice(0, difficulty)
      .flatMap((card) => [
        { ...card, flipped: false, matched: false },
        { ...card, flipped: false, matched: false },
      ]);

    setCards(shuffleArray(selectedCards));
  };

  // 카드 선택 처리
  const handleFlip = (index, id) => {
    // 선택된 카드가 2개인 경우 리턴
    if (openedCards.length === 2) {
      return;
    }

    // 같은 카드 선택 불가
    if (cards[index].flipped) {
      alert('다른 카드를 선택해주세요!');
      return;
    }

    setCards((prevCards) => prevCards.map((card, i) => (i === index ? { ...card, flipped: !card.flipped } : card)));

    setOpenedCards((prevOpenedCards) => {
      return [...prevOpenedCards, { index, id, flipped: true }];
    });
  };

  const matchCards = (preId, nowId, preIdx, nowIdx) => {
    if (nowId === preId) {
      // 같은 카드인 경우 matched 상태 변경
      setTimeout(() => {
        setCards((prevCards) => prevCards.map((card) => (card.id === nowId ? { ...card, matched: true } : card)));

        setMatched((prevMatched) => {
          if (prevMatched + 1 === difficulty) {
            setShowModal(true);
          }

          return prevMatched + 1;
        });

        setOpenedCards([]);
      }, 500);
    } else {
      // 같은 카드가 아닌 경우 flipped 상태 변경
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card, i) => (i === nowIdx || i === preIdx ? { ...card, flipped: false } : card)),
        );

        setOpenedCards([]);
      }, 500);
    }
  };

  // 난이도 변경
  const onChangeDifficulty = (difficulty) => {
    setDifficulty(difficulty);

    resetGame();
  };

  // 게임 초기화
  const resetGame = () => {
    setShowModal(false);
    setMatched(0);
    setCards(cards.map((card) => ({ ...card, flipped: false, matched: false })));

    setTimeout(() => {
      initializeCards(difficulty);
    }, 500);
  };

  useEffect(() => {
    initializeCards(5);
  }, []);

  useEffect(() => {
    // 선택된 카드가 2개인 경우
    if (openedCards.length === 2) {
      const { index: preIdx, id: preId } = openedCards[0];
      const { index: nowIdx, id: nowId } = openedCards[1];

      matchCards(preId, nowId, preIdx, nowIdx);
    }
  }, [openedCards]);

  return (
    <Container>
      <Modal isOpen={showModal} onClick={resetGame} />
      <Button className="reset" onClick={resetGame}>
        초기화
      </Button>
      <GameScore>
        맞춘 갯수 {matched}/{difficulty}
      </GameScore>
      <div>
        <Button $selected={difficulty === 5} onClick={() => onChangeDifficulty(5)}>
          쉬움
        </Button>
        <Button $selected={difficulty === 7} onClick={() => onChangeDifficulty(7)}>
          보통
        </Button>
        <Button $selected={difficulty === 9} onClick={() => onChangeDifficulty(9)}>
          어려움
        </Button>
      </div>
      <GameBoard>
        {cards.map((card, i) => (
          <Card key={`card-${i}`} card={card} index={i} handleFlip={handleFlip} />
        ))}
      </GameBoard>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const GameScore = styled.p`
  width: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.pink};
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;

const GameBoard = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  padding: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 5px;
  font-weight: 500;
  background-color: ${(props) => (props.$selected ? props.theme.colors.darkPink : props.theme.colors.pink)};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkPink};
  }

  &.reset {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background-color: ${({ theme }) => theme.colors.gray80};

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkViolet};
    }
  }
`;

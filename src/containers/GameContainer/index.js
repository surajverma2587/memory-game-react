import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Score } from "../../components/Score";
import { CardsGrid } from "../../components/CardsGrid";

const initialCards = [
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Dog",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Rat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Dog",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Eel",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Pig",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Cow",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Pig",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Cow",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Cat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Bat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Rat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Cat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Eel",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Ant",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Bat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Ant",
  },
];

export const GameContainer = () => {
  const [cards, setCards] = useState(initialCards);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [pauseGame, setPauseGame] = useState(false);
  const [numberOfFailedMatches, setNumberOfFailedMatches] = useState(0);
  const [turn, setTurn] = useState(0);
  const [firstCard, setFirstCard] = useState();
  const [secondCard, setSecondCard] = useState();

  useEffect(() => {
    let timeout;

    if (turn === 2) {
      if (firstCard.word === secondCard.word) {
        const newCards = cards.map((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            card.matched = true;
          }

          return card;
        });

        setCards(newCards);
        setTurn(0);
        setFirstCard();
        setSecondCard();
      } else {
        const resetCards = () => {
          setCards(newCards);
          setTurn(0);
          setFirstCard();
          setSecondCard();
          setNumberOfFailedMatches(numberOfFailedMatches + 1);
          // setPauseGame(false);
        };

        const newCards = cards.map((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            card.isVisible = false;
          }

          return card;
        });

        timeout = setTimeout(resetCards, 3000);
        // setPauseGame(true);
      }
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [firstCard, secondCard, cards, numberOfFailedMatches, turn]);

  const startGame = () => {
    setGameInProgress(true);
  };

  const onClick = (event) => {
    if (!pauseGame) {
      const { id } = event.currentTarget;

      const clickedCardFromState = cards.find((card) => {
        return card.id === id;
      });

      if (turn === 0) {
        setFirstCard(clickedCardFromState);
      }

      if (turn === 1) {
        setSecondCard(clickedCardFromState);
      }

      if (!clickedCardFromState.isVisible) {
        setTurn(turn + 1);
      }

      const newCards = cards.map((card) => {
        if (card.id === id) {
          card.isVisible = true;
        }

        return card;
      });

      setCards(newCards);
    }
  };

  return (
    <div>
      <div className="text-center">
        <button
          onClick={startGame}
          type="button"
          className="btn btn-success btn-lg"
        >
          Start Game
        </button>
      </div>
      {gameInProgress && (
        <>
          <Score numberOfFailedMatches={numberOfFailedMatches} />
          <CardsGrid cards={cards} dimension={4} onClick={onClick} />
        </>
      )}
    </div>
  );
};

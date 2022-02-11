import { Card } from "./Card";

export const CardsGrid = ({ dimension, cards, onClick }) => {
  const cardsToRender = cards.reduce(
    (rows, key, index) =>
      (index % dimension === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  );

  return (
    <div>
      {cardsToRender.map((row, index) => {
        return (
          <div
            className="d-flex justify-content-center flex-direction-row"
            key={index}
          >
            {row.map((card) => {
              return <Card {...card} key={card.id} onClick={onClick} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

import "../../../styles.css";

export const Card = ({ id, word, isVisible, matched, onClick }) => {
  if (isVisible) {
    return (
      <div
        id={id}
        onClick={onClick}
        className="d-flex border image-card justify-content-center align-items-center"
      >
        {word}
      </div>
    );
  }

  return (
    <div
      id={id}
      onClick={onClick}
      className="d-flex border image-card image-card-masked justify-content-center align-items-center"
    >
      <i className="fa-solid fa-triangle-exclamation"></i>
    </div>
  );
};

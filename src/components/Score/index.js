import "../../styles.css";

export const Score = ({ numberOfFailedMatches }) => {
  return (
    <div className="alert alert-light d-flex flex-wrap justify-content-center my-3">
      <div className="border px-5 py-3 score-item">Failed Matches</div>
      <div className="border px-5 py-3 score-item">{numberOfFailedMatches}</div>
    </div>
  );
};

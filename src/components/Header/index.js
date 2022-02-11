import "../../styles.css";

export const Header = () => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Memory Game</h1>
      <p className="lead">
        The objective is to find 2 matching cards by clicking on the cards. The
        player with a lowest number of attempts to find matches is the winner!!
      </p>
      <hr className="my-4" />
      <p>
        Let's get started and put your memory to the test based on our lovely
        images...
      </p>
    </div>
  );
};

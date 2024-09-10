function TicTacToe({
  handleClick,
  resetGame,
  getStatusMessage,
  board,
  boardSize,
}) {
  return (
    <div className="game" style={{ '--board-size': boardSize }}>
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b != null}
            >
              {board[index]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;

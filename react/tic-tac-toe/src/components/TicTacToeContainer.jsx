import { useState } from 'react';
import TicTacToe from './TicTacToe';

function TicTacToeContainer({ boardSize = 3 }) {
  const initializeBoard = () => Array(boardSize * boardSize).fill(null);

  const [board, setBoard] = useState(initializeBoard());
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(index) {
    // check winner
    const winner = calculateWinner(board);
    console.log(winner);
    if (winner || board[index]) return;

    const newBoard = [...board];
    console.log(newBoard);
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!`;
    return `Player ${isXNext ? 'X' : 'O'} turn`;
  };

  const resetGame = () => {
    setBoard(initializeBoard());
    setIsXNext(true);
  };

  const generateWinningPatterns = () => {
    const patterns = [];

    for (let i = 0; i < boardSize; i++) {
      const horizontal = [],
        vertical = [];
      for (let j = 0; j < boardSize; j++) {
        horizontal.push(i * boardSize + j);
        vertical.push(j * boardSize + i);
      }

      patterns.push(horizontal, vertical);
    }

    const diagonal1 = [],
      diagonal2 = [];
    for (let i = 0; i < boardSize; i++) {
      diagonal1.push(i * (boardSize + 1));
      diagonal2.push((i + 1) * (boardSize - 1));
    }

    patterns.push(diagonal1, diagonal2);
    return patterns;
  };

  const WINNING_PATTERNS = generateWinningPatterns();

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const pattern = WINNING_PATTERNS[i];
      let countX = 0;
      let count0 = 0;

      for (let j = 0; j < pattern.length; j++) {
        const cell = currentBoard[pattern[j]];

        if (cell === 'X') {
          countX++;
        } else if (cell === 'O') {
          count0++;
        }
      }

      if (countX === boardSize) return 'X';
      if (count0 === boardSize) return 'O';
    }

    return null;
  };

  return (
    <TicTacToe
      handleClick={handleClick}
      resetGame={resetGame}
      getStatusMessage={getStatusMessage}
      calculateWinner={calculateWinner}
      board={board}
      boardSize={boardSize}
    />
  );
}

export default TicTacToeContainer;

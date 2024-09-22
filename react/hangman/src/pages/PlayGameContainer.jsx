import { useLocation } from 'react-router-dom';
import PlayGame from './PlayGame';
import { useEffect, useState } from 'react';

function PlayGameContainer() {
  const { state } = useLocation();

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    handleLose();
  }, [step]);

  useEffect(() => {
    handleWin();
  }, [guessedLetters]);

  function handleLose() {
    console.log('lose');
    console.log(step);
    if (step >= 7) {
      setTimeout(() => {
        alert('You lose!');
      }, 200);
    }
  }

  function handleWin() {
    const orinalWords = state.wordSelected.toUpperCase().split('');
    if (orinalWords.every((letter) => guessedLetters.includes(letter))) {
      setTimeout(() => {
        alert('You win!');
      }, 200);
    }
  }

  function handleLetterClick(letter) {
    if (!state.wordSelected.toUpperCase().includes(letter)) {
      setStep(step + 1);
    }

    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <PlayGame
      guessedLetters={guessedLetters}
      step={step}
      handleLetterClick={handleLetterClick}
      wordSelected={state.wordSelected}
      hintSelected={state.hintSelected}
    />
  );
}

export default PlayGameContainer;

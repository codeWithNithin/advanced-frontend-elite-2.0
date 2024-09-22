import MaskedText from '../components/MaskedText/MaskedText';
import LetterButtons from '../components/LetterButtons/LetterButtons';
import HangMan from '../components/HangMan/HangMan';
import HintText from '../components/HintText/HintText';

function PlayGame({
  wordSelected,
  hintSelected,
  step,
  handleLetterClick,
  guessedLetters,
}) {
  return (
    <div>
      {hintSelected && <HintText text={hintSelected} />}

      {wordSelected && (
        <>
          <MaskedText text={wordSelected} guessedLetters={guessedLetters} />

          <div>
            <LetterButtons
              text={wordSelected}
              guessedLetters={guessedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>
        </>
      )}

      <div>
        <HangMan step={step} />
      </div>
    </div>
  );
}

export default PlayGame;

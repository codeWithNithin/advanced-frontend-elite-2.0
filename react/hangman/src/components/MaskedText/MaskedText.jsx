import { getMaskedString } from './MaskingUtility';

function MaskedText({ text, guessedLetters }) {
  console.log(guessedLetters);
  const maskedString = getMaskedString(text, guessedLetters);
  return (
    <div>
      {maskedString.map((ele, index) => {
        return (
          <span key={index} className="mx-1">
            {' '}
            {ele}{' '}
          </span>
        );
      })}
    </div>
  );
}

export default MaskedText;

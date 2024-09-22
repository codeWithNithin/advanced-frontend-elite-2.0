/*
 *
 * @param {The word which is given as input and is expected to be guessed} originalWord
 * @param { Letters which are guessed by the user already} guessedWord
 * Ex: OriginalWord: HUMBLE
 * guessedLetters: ['H', 'M' , 'E]
 *
 * return -> "H_M_E"
 */
export function getMaskedString(originalWord, guessedWord) {
  guessedWord = guessedWord.map((letter) => letter.toUpperCase());

  const guessedLetterSet = new Set(guessedWord);

  const result = originalWord
    .toUpperCase()
    .split('')
    .map((char) => {
      if (guessedLetterSet.has(char)) {
        return char;
      } else {
        return '_';
      }
    });

  return result;
}

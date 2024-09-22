import { useState } from 'react';
import TextInputForm from './TextInputForm';
import { useNavigate } from 'react-router-dom';

// all the logic related to the form goes here.
function TextInputContainer() {
  const [inputType, setInputType] = useState('password');
  const [value, setValue] = useState('');
  const [hint, setHint] = useState('');

  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(value);
    if (value) {
      navigate('/playGame', {
        state: { wordSelected: value, hintSelected: hint },
      });
    }
  }

  function handleShowHideClick() {
    setInputType(inputType == 'password' ? 'text' : 'password');
  }

  function handleTextInputChange(event) {
    setValue(event.target.value);
  }

  function handleHintInputChange(event) {
    setHint(event.target.value);
  }

  return (
    <TextInputForm
      handleFormSubmit={handleFormSubmit}
      handleShowHideClick={handleShowHideClick}
      handleTextInputChange={handleTextInputChange}
      handleHintInputChange={handleHintInputChange}
      inputType={inputType}
    />
  );
}

export default TextInputContainer;

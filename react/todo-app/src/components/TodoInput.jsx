import { useState } from 'react';

function TodoInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit?.(inputValue);
    setInputValue('');
  }

  return (
    <div className="todo-inp">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default TodoInput;

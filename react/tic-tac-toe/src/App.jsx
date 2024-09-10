import { useState } from 'react';
import './App.css';
import TicTacToeContainer from './components/TicTacToeContainer';

function App() {
  const [size, setSize] = useState(null);
  function onInputChange(event) {
    event.preventDefault();
    setSize(Number(event.target.value));
  }

  return (
    <div className="app">
      {size ? (
        <TicTacToeContainer boardSize={size} />
      ) : (
        <form>
          <label htmlFor="size"> Please enter board size: </label>
          <input
            type="text"
            name="size"
            maxLength={1}
            onChange={onInputChange}
          />
        </form>
      )}
    </div>
  );
}

export default App;

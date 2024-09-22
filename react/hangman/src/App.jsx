import { Route, Routes } from 'react-router-dom';
import './App.css';
import StartGame from './pages/StartGame';
import Home from './pages/Home';
import PlayGameContainer from './pages/PlayGameContainer';

/*
- give 2 options 
- single player
- 2 players
- if user clicks on 2 player game.
- we will be having 2 pages
- start game page
- heading
- input text box
- 2 input boxes
- 1. to enter hint
- 2. to enter actual text
- play game page
- Masked text section
- all alphabet letters button
- Hangman image that shows image of man hanging.
- link to navigate to start game page.
*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/playGame" element={<PlayGameContainer />}></Route>
      <Route path="/startGame" element={<StartGame />}></Route>
    </Routes>
  );
}

export default App;

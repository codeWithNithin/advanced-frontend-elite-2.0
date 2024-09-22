import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import { useEffect, useState } from 'react';
import mockApiData from '../mockData/mockApiData';

function Home() {
  const [apiData, setApiData] = useState({
    wordSelected: '',
    hintSelected: '',
  });

  function fetchWords() {
    const data = mockApiData.words;
    console.log(data);

    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomIndex]);

    setApiData({
      ...apiData,
      wordSelected: data[randomIndex].wordValue,
      hintSelected: data[randomIndex].wordHint,
    });
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <>
      <h1> Welcome to Hangman Game </h1>
      <p> Please choose: </p>
      <Link to="/playGame" state={apiData}>
        <Button text="Single player" />
      </Link>
      <br />
      <Link to="/startGame">
        <div className="mt-4">
          <Button text="Multi player" styleType="secondary" />
        </div>
      </Link>
    </>
  );
}

export default Home;

import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [bannerProps, setBannerProps] = useState({});

  const handleAddGuess = (guess) => {
    const nextGuessList = [...guessList];
    nextGuessList.push({
      id: Math.random(),
      label: guess,
    });
    setGuessList(nextGuessList);

    if (guess === answer) {
      setBannerProps({
        type: "happy",
        numOfGuesses: nextGuessList.length,
      });
      setIsGameOver(true);
      return;
    }

    if (nextGuessList.length >= 6) {
      setBannerProps({
        type: "sad",
        answer,
      });
      setIsGameOver(true);
    }
  };

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} disabled={isGameOver} />

      {isGameOver && <Banner {...bannerProps} />}
    </>
  );
}

export default Game;

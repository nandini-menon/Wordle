import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessList({ guessList = [], answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <p key={guessList[index]?.id ?? Math.random()} className="guess">
            <Guess guess={guessList[index]?.label} answer={answer} />
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;

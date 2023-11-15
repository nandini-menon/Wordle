import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const letterStatuses = checkGuess(guess, answer) ?? [];

  return (
    <>
      {range(5).map((index) => {
        return (
          <span
            key={index}
            className={`cell ${letterStatuses[index]?.status ?? ""}`}
          >
            {letterStatuses[index]?.letter ?? ""}
          </span>
        );
      })}
    </>
  );
}

export default Guess;

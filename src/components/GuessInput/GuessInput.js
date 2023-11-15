import React, { useState } from "react";

function GuessInput({ handleAddGuess, disabled = false }) {
  const [guess, setGuess] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    handleAddGuess(guess.toUpperCase());
    setGuess("");
  };

  const onGuessChange = (event) => {
    setGuess(event.target.value);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        required
        id="guess-input"
        type="text"
        pattern="\w{5,5}"
        value={guess}
        onChange={onGuessChange}
      />
    </form>
  );
}

export default GuessInput;

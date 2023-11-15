import React from "react";

function Banner({ type, answer, numOfGuesses }) {
  if (type === "happy") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${numOfGuesses} guesses`} </strong>.
        </p>
      </div>
    );
  }
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default Banner;

# Wordle

![Demo showing the finished product, our Wordle clone](docs/wordle-demo.gif)

In Wordle, users have 6 attempts to guess a 5-letter word. You're helped along the way by ruling out letters that aren't in the word, and being told whether the correct letters are in the correct location or not.

## Getting Started

This project is created with [Parcel](https://parceljs.org/), a modern JS build tool. It's intended to be run locally, on your computer, using Node.js and NPM.

## TODO: Stretch Goals

### Visual Keyboard

In the real Wordle game, a keyboard is shown below the guesses:

![Screenshot of the Wordle game, showing a keyboard below the game board](docs/bottom-keyboard-original.png)

This keyboard is an important game element, since it makes it easy to tell which letters have already been tested.

**Acceptance Criteria:**

- Render 3 rows of letters at the bottom of the screen
- The colors of each letter should match the colors shown in the game board:
  - Correct letters should have a green background and white text
  - Misplaced letters should have a yellow background and white text
  - Incorrect letters should have a dark gray background and white text
  - Unused letters should have a light gray background and black text
- No need to include "Enter" and "Backspace" keys.
- Don't worry too much about the styling, trying to get the alignment to look exactly like a real keyboard.

### Restart button

One of Wordle's hooks is that you can only play 1 game per day: there's a new word for all users every day. As a result, there's no "restart button", you just have to wait until the next day.

In our clone, we aren't picking a new word every day, we're picking a new word when the app first loads.

Update the game so that it can be restarted. Add a "Restart game" button to the banner shown when the user wins or loses.

_HINT:_ This will require moving the `answer` into state. You'll want to do the random word selection inside a callback function, the secondary way to initialize state described here: https://courses.joshwcomeau.com/joy-of-react/02-state/03-use-state#initial-value

**Acceptance Criteria:**

- A "Restart Game" button is shown at the end of the game. You can put this button in the `GameOverBanner`, or wherever else you'd like!
- Clicking the button should select a new correct word and reset all other state.

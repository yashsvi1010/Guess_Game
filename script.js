"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//message function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//check button function
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === randomNumber) {
    displayMessage("Correct Guess!");
    document.querySelector(".number").textContent = randomNumber;
  }
});

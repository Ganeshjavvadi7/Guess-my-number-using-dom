"use strict";
document.querySelector(".message").textContent = "Guess the Number🤔";
// document.querySelector(".number").textContent = 23;
// document.querySelector(".guess").value = 22;
let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
//document.querySelector(".number").textContent = randomNumber;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number entered⛔️";
  }

  //correct vaule
  if (guess === randomNumber) {
    document.querySelector(".message").textContent = "You won🏆🎉";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".number").style.color = "pink";

    if (score >= highScore) highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }

  //low vaule
  else if (guess < randomNumber) {
    if (score === 0) {
      document.querySelector(".message").textContent = "You lost";
    } else {
      document.querySelector(".message").textContent = " Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }

  //high value
  else {
    if (score === 0) {
      document.querySelector(".message").textContent = "You lost";
    } else {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Guess the Number🤔";
  score = 20;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.color = "#333";
});

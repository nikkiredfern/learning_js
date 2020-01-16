function $(sel) {
  return document.querySelector(sel);
}

var randomNum = Math.round(Math.random() * 10);

var guessingGameQuestionMark = $("#guessing-game-question-mark");

function isItCorrect() {
  var userGuess = Math.floor($("#num-guess-input").value);
  if (randomNum > userGuess) {
    $("#hint-text").innerText = "Hint: the number is higher than your guess.";
  } else if (randomNum < userGuess) {
    $("#hint-text").innerHTML = "Hint: the number is lower than your guess.";
  } else if (randomNum === userGuess){
    guessingGameQuestionMark.innerHTML = "<img src=\"winner.png\" alt=\"winner\">";
    $("#hint-text").innerHTML = "YOU'VE WON!";
  }
}

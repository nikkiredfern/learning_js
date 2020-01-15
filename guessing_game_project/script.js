function $(sel) {
  return document.querySelector(sel);
}

var body = $("body");

var randomNum = Math.round(Math.random() * 10);
var userGuess = $("#num-guess-input");
console.log(randomNum);

if (randomNum === userGuess) {

}













$("#background-color").addEventListener('keyup', function changeEverything(event) {
  body.style.backgroundColor = event.target.value;
});

$("#text-color").addEventListener('keyup', function changeEverything(event) {
  body.style.color = event.target.value;
});

$("#font-sizing").addEventListener('keyup', function changeEverything(event) {
  body.style.fontSize = event.target.value;
});

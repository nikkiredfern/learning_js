function $(sel) {
  return document.querySelector(sel);
}

var headingOne = $("h1").textContent;
var letters = [];

[...headingOne].forEach(x => letters.push(`<h1 class="anmiLetter">${x}</h1>`));
$(".row").innerHTML = letters.join("");

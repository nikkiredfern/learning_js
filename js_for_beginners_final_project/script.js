function $(sel) {
  return document.querySelector(sel);
}

var headingOne = $("h1").textContent;
var letters = [];

[...headingOne].forEach(x => letters.push(`<h1 class="anmiLetter" onmouseover="mouseOverFun()">${x}</h1>`));
$(".row").innerHTML = letters.join("");

$(".anmiLetter").addEventListener('mouseover', function(event) { event.target.style.color = black});

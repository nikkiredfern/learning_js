function $(sel) {
  return document.querySelector(sel);
}

var headingOne = $("h1").textContent;
var letters = [];

[...headingOne].forEach(x => letters.push(`<h1 class="anmiLetter">${x}</h1>`));
$(".row").innerHTML = letters.join("");

document.querySelectorAll(".anmiLetter").forEach(item => {
  item.addEventListener("mouseover",function() {
    this.classList.add('active');
 });
  item.addEventListener("mouseout",function() {
    this.classList.remove('active');
  });
});

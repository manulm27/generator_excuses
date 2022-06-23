import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["El perro", "Mi abuela", "Su tortuga", "Mi pajaro"];
const what = ["come", "molesta", "lo aplasta", "lo rompe"];
const when = [
  "antes de clase",
  "justo a tiempo",
  "cuando termine",
  "durante el almuerzo",
  "mientras oraba"
];

function generateWord(arr) {
  let word;
  let random = Math.floor(Math.random() * arr.length);
  for (let i = 0; i <= random; i++) {
    word = arr[i];
  }
  return word;
}

function onLoad() {
  let excuse =
    generateWord(who) + " " + generateWord(what) + " " + generateWord(when);
  let text = document.querySelector("#excuse");
  text.innerHTML = excuse;
}

document.querySelector("#generator").addEventListener("click", function() {
  onLoad();
});

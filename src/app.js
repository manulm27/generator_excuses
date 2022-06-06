window.addEventListener("load", function() {
  let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pajaro"];
  let what = ["come", "molesta", "lo aplasta", "lo rompe"];
  let when = [
    "antes de clase",
    "justo a tiempo",
    "cuando termine",
    "durante el almuerzo",
    "mientras oraba"
  ];

  function generateWord(arr) {
    var word;
    var random = Math.floor(Math.random() * arr.length);
    for (var i = 0; i <= random; i++) {
      word = arr[i];
    }
    return word;
  }

  function onLoad() {
    var excuse =
      generateWord(who) + " " + generateWord(what) + " " + generateWord(when);
    var text = document.querySelector("#excuse");
    text.innerHTML = excuse;
  }

  document.querySelector("#generator").addEventListener("click", function() {
    onLoad();
  });
});

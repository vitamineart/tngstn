var sky = document.querySelector(".stars");
for (var i = 0; i < 250; i++) {
  var starStatic =
    '<div class="star absolute w-1 h-1" style="--top: ' +
    Math.random() * window.outerHeight +
    "px; --left: " +
    Math.random() * window.outerWidth +
    "px; --width: " +
    Math.random() * 10 +
    'px;"></div>';
  sky.innerHTML += starStatic;
}
for (var i = 0; i < 25; i++) {
  var star =
    '<div class="star absolute w-1 h-1" style=" --delay: ' +
    (Math.random() * 5 + 5) +
    "s;  --duration: " +
    (Math.ceil(Math.random() * 2) + 2) +
    "s;  --top: " +
    Math.random() * window.outerHeight +
    "px; --left: " +
    Math.random() * window.outerWidth +
    "px; --width: " +
    Math.random() * 15 +
    'px;"></div>';
  sky.innerHTML += star;
}

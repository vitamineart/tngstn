var sky = document.querySelector(".stars");
for (var i = 0; i < 200; i++) {
  var starStatic =
    '<div class="star" style="--top: ' +
    Math.random() * window.outerHeight +
    "px; --left: " +
    Math.random() * window.outerWidth +
    "px; --width: " +
    Math.random() * 12 +
    'px;"></div>';
  sky.innerHTML += starStatic;
}
for (var i = 0; i < 25; i++) {
  var star =
    '<div class="star" style=" --delay: ' +
    (Math.random() * 5 + 5) +
    "s;  --duration: " +
    (Math.ceil(Math.random() * 4) + 2) +
    "s;  --top: " +
    Math.random() * window.outerHeight +
    "px; --left: " +
    Math.random() * window.outerWidth +
    "px; --width: " +
    Math.random() * 12 +
    'px;"></div>';
  sky.innerHTML += star;
}

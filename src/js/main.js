AOS.init({
  once: true,
});

// Set a variable for our button element.
const scrollToTopButton = document.getElementById("go-to-top");

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 300) {
    scrollToTopButton.classList.remove("invisible", "opacity-0");
    scrollToTopButton.classList.add("visible", "opacity-100");
  } else {
    scrollToTopButton.classList.remove("visible", "opacity-100");
    scrollToTopButton.classList.add("invisible", "opacity-0");
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 12);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};

// style="shape-outside: url(img/White_Paper/Tanker_400.png);"
window.onload = function () {
  setTimeout(() => {
    const imageShapes = document.querySelectorAll(".shape-outside");
    imageShapes.forEach(function (item) {
      item.style = `shape-outside: url(${item.getAttribute("src")})`;
    });
  }, 1000);
};

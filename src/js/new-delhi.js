// image gallery
const gallerySwiper = new Swiper(".gallery", {
  autoplay: {
    delay: 5000
  },
  spaceBetween: 10,
  breakpoints: {
    1200: {
      spaceBetween: 100
    }
  },
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 1,
  lazy: true,
  watchSlidesProgress: true,
  keyboard: {
    enabled: true
  }
});

// van animation
gsap.from("#van", {
  scrollTrigger: {
    trigger: "#van",
    start: "top 90%"
  },
  x: -50,
  scale: 1.1,
  duration: 3,
  filter: "blur(10px)",
  ease: "expo.out()"
});

// ================
// Garam Masala Game
const game = document.querySelector("#game");
const gameHeight = game.getBoundingClientRect();
const crushMessage = document.querySelector("#crushMessage");
const crushBtn = document.querySelector("#drag-line");
const spiceSliderIndex = document.querySelector("#spiceSliderIndex");
const spiceSliderName = document.querySelector("#spiceSliderName");
const spiceSliderQ = document.querySelector("#spiceSliderQ");
let draggedSpices = [];
const dropZone = document.querySelector("#StoneBowlContainerDropZone");
const cookBtn = document.querySelector("#cook-btn");
const cookGaramMasala = document.querySelector("#cook-garam-masala");
const garamMasalaSection = document.querySelector("#garam-masala-section");
cookBtn.addEventListener("click", function (e) {
  cookGaramMasala.classList.remove("closed");
  gsap.to(window, { duration: 2, scrollTo: { y: cookGaramMasala, offsetY: 0 }, ease: "power2.inOut()" });
});

// spice rotator
const spiceSwiper = new Swiper("#spiceSlider ", {
  autoplay: false,
  spaceBetween: 10,
  slidesPerView: 3,
  // slidesPerGroup: 3,
  centeredSlides: true,
  // loop: false,
  lazy: true,
  watchSlidesProgress: true,
  // touchMoveStopPropagation: true,
  allowTouchMove: false,
  simulateTouch: false,
  zoom: true,
  keyboard: {
    enabled: true
  },
  spaceBetween: 0,
  on: {
    init: function (spiceSwiper) {
      spiceSliderName.innerHTML = spiceSwiper.slides[spiceSwiper.activeIndex].dataset.name;
      spiceSliderIndex.innerHTML = spiceSwiper.slides[spiceSwiper.activeIndex].querySelector("img").dataset.index;
      spiceSliderQ.innerHTML = spiceSwiper.slides[spiceSwiper.activeIndex].querySelector("img").dataset.q;
    }
  }
});

// display status of Spice (name, quantity, number )
function displaySpiceStatus() {
  spiceSliderName.innerHTML = spiceSwiper.slides[spiceSwiper.activeIndex].dataset.name;
  spiceSliderIndex.innerHTML = spiceSwiper.slides[spiceSwiper.activeIndex].querySelector("img").dataset.index;
  spiceSliderQ.innerHTML = spiceSwiper.slides[spiceSwiper.activeIndex].querySelector("img").dataset.q;
}

const spiceImages = document.querySelectorAll("#spiceSlider img");

// define prev next actions
const spiceSliderPrev = document.querySelector(".spiceSliderPrev");
const spiceSliderNext = document.querySelector(".spiceSliderNext");
spiceSliderPrev.addEventListener("click", e => {
  spiceSwiper.slidePrev();
});
spiceSliderNext.addEventListener("click", e => {
  spiceSwiper.slideNext();
});

spiceSwiper.on("slideChange", spiceSwiper => {
  displaySpiceStatus();
  // spiceSwiper.slides[spiceSwiper.activeIndex].querySelector("img").draggable = true;
  // spiceSwiper.removeSlide[spiceSwiper.activeIndex - 1];
});

function restartGame() {
  spiceSlider.style.display = "block";
  cookGaramMasala.classList.add("closed");
  spiceSliderName.classList.remove("congratulations");
  spiceSwiper.init();
  spiceSwiper.slideTo(0);
  displaySpiceStatus();
  draggedSpices = [];
  dropZone.innerHTML = "";
  crushBtn.innerText = "drag to the stone bowl";
  crushBtn.style.color = "#000";
  crushBtn.style.background = "#ffffff99";
  crushBtn.style.cursor = "default";
  game.classList.remove("end-game");
  spiceImages.forEach(image => {
    image.draggable = true;
  });
  gsap.to(window, { duration: 2, scrollTo: { y: garamMasalaSection, offsetY: 0 }, ease: "power2.inOut()" });
}

function finishCrushing() {
  game.classList.toggle("end-game");
  spiceSliderName.classList.add("congratulations");
  spiceSliderName.innerHTML = "Congratulations!";
  spiceSliderIndex.innerHTML = 10;
  crushMessage.style.display = "none";
  crushBtn.innerText = "End Game";
  // spiceSwiper.destroy();
  crushBtn.addEventListener("click", e => restartGame(e), { once: true });
}

// drag'n'drop actions

spiceImages.forEach(image => {
  image.addEventListener("mouseenter", e => {
    if (draggedSpices.includes(e.target.id)) {
      e.target.style.cursor = "not-allowed";
      e.target.draggable = false;
      console.log(`You already added ${e.target.id}`);
    } else {
      e.target.style.cursor = "pointer";
    }
  });
  image.addEventListener("dragstart", e => {
    const data = e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.effectAllowed = "copy";
  });
});

// dropZone.addEventListener("dragenter", e => {
//   const data = e.dataTransfer.getData("text/plain");
//   console.log(e.target.id);
//   if (draggedSpices.includes(e.target.id)) {
//     console.log("You'already added this spice!");
//   }
// });

dropZone.addEventListener("dragover", e => {
  e.preventDefault();
});

dropZone.addEventListener("drop", e => {
  const data = e.dataTransfer.getData("text/plain");
  if (!draggedSpices.includes(data)) {
    const scatteredSpice = document.createElement("img");
    scatteredSpice.src = `media/new-delhi/ScatteredSpices/scattered${data}.png`;
    e.target.appendChild(scatteredSpice);
    draggedSpices.push(data);
    spiceSwiper.slideNext();
    if (draggedSpices.length == 8) {
      spiceSlider.style.display = "none";
      crushMessage.style.display = "block";
      spiceSliderName.innerHTML = "";
      spiceSliderIndex.innerHTML = 9;
      spiceSliderQ.innerHTML = "";

      crushBtn.innerText = "Click to crush the spices";
      crushBtn.style.background = "#fff";
      crushBtn.style.color = "#000";
      crushBtn.style.cursor = "pointer";

      crushBtn.addEventListener("click", e => finishCrushing(e), { once: true });
    }
  } else {
    console.log("You'already added this spice!");
  }
});

const gameTitle = document.querySelector("#garam-masala-section h2");
const gameP = document.querySelectorAll("#garam-masala-section p");

const garamAppearanceTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#garamMasala"
  },
  defaults: { y: 20, duration: 1, ease: "power3.out()" }
});
garamAppearanceTL.from(gameTitle, { opacity: 0 }).from(gameP, { opacity: 0 }, "<50%").from(cookGaramMasala, { opacity: 0 }, "<50%");

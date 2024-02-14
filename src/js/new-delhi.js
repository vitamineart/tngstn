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

const spiceSliderIndex = document.querySelector("#spiceSliderIndex");
const spiceSliderName = document.querySelector("#spiceSliderName");
const spiceSliderQ = document.querySelector("#spiceSliderQ");
const dropZone = document.querySelector("#StoneBowlContainerDropZone");
const cookBtn = document.querySelector("#cook-btn");
const cookGaramMasala = document.querySelector("#cook-garam-masala");
cookBtn.addEventListener("click", function (e) {
  cookGaramMasala.classList.toggle("closed");
});

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
  // keyboard: {
  //   enabled: true
  // },
  spaceBetween: 0,
  on: {
    init: function (spiceSwiper) {
      spiceSliderIndex.innerHTML = spiceSwiper.activeIndex + 1;
      spiceSliderName.innerHTML = spiceSwiper.slides[spiceSwiper.activeIndex].dataset.name;
      console.log(spiceSwiper.slides[spiceSwiper.activeIndex].querySelector("img"));
      // activeSlideImage.draggable = true;
    }
  }
});

const spiceImages = document.querySelectorAll("#spiceSlider img");

const spiceSliderPrev = document.querySelector(".spiceSliderPrev");
const spiceSliderNext = document.querySelector(".spiceSliderNext");
spiceSliderPrev.addEventListener("click", e => {
  spiceSwiper.slidePrev();
});
spiceSliderNext.addEventListener("click", e => {
  spiceSwiper.slideNext();
});

spiceSwiper.on("slideChange", spiceSwiper => {
  let spiceName = spiceSwiper.slides[spiceSwiper.activeIndex].dataset.name;
  spiceSliderName.innerHTML = spiceName;
  spiceSliderIndex.innerHTML = spiceSwiper.activeIndex + 1;
  // spiceSwiper.slides[spiceSwiper.activeIndex].querySelector("img").draggable = true;
  spiceSwiper.removeSlide[spiceSwiper.activeIndex - 1];
});

const draggedSpices = [];
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

dropZone.addEventListener("dragenter", e => {
  const data = e.dataTransfer.getData("text/plain");
  console.log(e.target.id);
  if (draggedSpices.includes(e.target.id)) {
    console.log("You'already added this spice!");
  }
});
dropZone.addEventListener("dragover", e => {
  e.preventDefault();
});
dropZone.addEventListener("drop", e => {
  const data = e.dataTransfer.getData("text/plain");
  if (!draggedSpices.includes(data)) {
    const scatteredSpice = document.createElement("img");
    scatteredSpice.src = `../media/new-delhi/ScatteredSpices/scattered${data}.png`;
    e.target.appendChild(scatteredSpice);
    draggedSpices.push(data);
    if (draggedSpices.length == 8) {
      console.log("Crush them!");

      const crushBtn = document.querySelector("#drag-line");
      crushBtn.innerText = "Click to crush the spices";
      crushBtn.style.background = "#fff";
      crushBtn.style.color = "#000";
      crushBtn.style.cursor = "pointer";
    }
  } else {
    console.log("You'already added this spice!");
  }
  spiceSwiper.slideNext();
  console.log(draggedSpices);
});

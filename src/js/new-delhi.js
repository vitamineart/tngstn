const swiper = new Swiper(".gallery", {
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
  // simulateTouch: false,
  zoom: true,
  // keyboard: {
  //   enabled: true
  // },
  spaceBetween: 0,
  on: {
    init: function (spiceSwiper) {
      spiceSliderIndex.innerHTML = swiper.activeIndex + 1;
      spiceSliderName.innerHTML = swiper.slides[swiper.activeIndex].dataset.name;
      console.log(spiceSwiper.slides[swiper.activeIndex].querySelector("img"));
      // activeSlideImage.draggable = true;
    }
  }
});

const activeSlideImage = spiceSwiper.slides[swiper.activeIndex].querySelector("img");

const spiceSliderPrev = document.querySelector(".spiceSliderPrev");
const spiceSliderNext = document.querySelector(".spiceSliderNext");
spiceSliderPrev.addEventListener("click", e => {
  spiceSwiper.slidePrev();
});
spiceSliderNext.addEventListener("click", e => {
  spiceSwiper.slideNext();
});

spiceSwiper.on("slideChange", swiper => {
  let spiceName = swiper.slides[swiper.activeIndex].dataset.name;
  spiceSliderName.innerHTML = spiceName;
  spiceSliderIndex.innerHTML = swiper.activeIndex + 1;

  swiper.slides.forEach(slide => {});
});

const spiceImages = document.querySelectorAll("#spiceSlider .swiper-slide img");
const draggedSpices = [];
spiceImages.forEach(image => {
  image.addEventListener("dragstart", e => {
    const data = e.dataTransfer.setData("text/plain", e.target.id);
    if (draggedSpices.includes(e.target.id)) {
      console.log("You already add the spice");
      // e.dataTransfer.effectAllowed = "none";
    } else {
      // e.dataTransfer.effectAllowed = "move";
    }
  });
});

dropZone.addEventListener("dragenter", e => {
  const data = e.dataTransfer.getData("text/plain");
  console.log(data);
  if (draggedSpices.includes(e.target.id)) {
    console.log("You'already added this spice!");
  }
});
dropZone.addEventListener("dragover", e => {
  e.preventDefault();
});
dropZone.addEventListener("drop", e => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  if (!draggedSpices.includes(data)) {
    const crushedSpice = document.createElement("img");
    crushedSpice.src = `../media/new-delhi/CrushedSpices/crushed${data}.png`;
    e.target.appendChild(crushedSpice);
    draggedSpices.push(data);
  } else {
    console.log("You'already added this spice!");
  }
  spiceSwiper.slideNext();
  console.log(draggedSpices);
});

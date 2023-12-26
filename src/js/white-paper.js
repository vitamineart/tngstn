let thumbsSwiper = new Swiper(".pdf-slider-thumbs", {
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 4,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  spaceBetween: 1,
  preloadImages: false,
  lazy: true
});
let swiper = new Swiper(".pdf-slider-main", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false
  },
  thumbs: {
    swiper: thumbsSwiper
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 1,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preloadImages: false,
  lazy: true
});

scrollEntranceAnimate("#sea-tel-antenna, #roll-pitch-yaw-graph, #roll-pitch-yaw-graph3", {
  opacity: 0,
  y: 10,
  filter: "blur(2px) hue-rotate(95deg)"
});

const whytePapersTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#whyte-papers",
    start: "50% bottom"
  }
});
whytePapersTl
  .from("#whyte-papers", {
    opacity: 0,
    rotateY: 5,
    scale: 1.1
  })
  .from(
    "#whyte-papers > div",
    {
      opacity: 0,
      scale: 0.9,
      stagger: 0.1
    },
    "<0.3"
  );

gsap.from(".pdf-slider-thumbs img.thumb", {
  scrollTrigger: {
    trigger: ".pdf-slider-thumbs"
  },
  opacity: 0,
  y: 10,
  stagger: 0.1,
  filter: "blur(2px)"
});

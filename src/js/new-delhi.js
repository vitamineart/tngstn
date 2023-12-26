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

const cookBtn = document.querySelector("#cook-btn");
const cookGaramMasala = document.querySelector("#cook-garam-masala");
cookBtn.addEventListener("click", function (e) {
  cookGaramMasala.classList.toggle("closed");
});

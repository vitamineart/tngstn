let swiper = new Swiper('.pdf-slider-main', {
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchSlidesProgress: true,
    slidesPerView: 3,
    centeredSlides: true
});

const datasheetsList = gsap.timeline({
    scrollTrigger: {
      trigger: '#datasheets-list',
      start: '50% bottom',
    },
})
.from('#datasheets-list', {
    x: 30,
    opacity: 0,
    duration: 2,
    ease: 'power3.out'
}).from('#datasheets-list > div:not(:first-child)',{
    x: "random(-30, 30, 2)",
    filter: 'blur(2px)',
    opacity: 0,
    duration: 1.5,
    stagger: .1,
    ease: 'expo.out'
}, "<0.3")

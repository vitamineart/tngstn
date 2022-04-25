const parallaxItems = document.querySelectorAll('.parallax');


window.addEventListener('scroll', ()=>{


    let scroll = window.scrollY;

    parallaxItems.forEach(item=>{
        let speed = item.dataset.speed;
        item.style.transform = `translateY(${scroll * speed}px)`
    })
})


// let thumbsSwiper = new Swiper('.pdf-slider-thumbs', {
//     centeredSlides: true,
//     centeredSlidesBounds: true,
//     slidesPerView: 4,
//     watchOverflow: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     spaceBetween: 1,
//     preloadImages: false,
//     lazy: true,
// });
let swiper = new Swiper('.pdf-slider-main', {
    // effect: 'creative',
    // thumbs: {
    //     swiper: thumbsSwiper
    // },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchSlidesProgress: true,
    slidesPerView: 3,
    centeredSlides: true,
    firstSlide: 2
    // spaceBetween: 30,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    // preloadImages: false,
    // lazy: true,
});

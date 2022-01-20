let thumbsSwiper = new Swiper('.pdf-slider-thumbs', {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 4,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 1,
    preloadImages: false,
    lazy: true,
});
let swiper = new Swiper('.pdf-slider-main', {
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
    thumbs: {
        swiper: thumbsSwiper
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preloadImages: false,
    lazy: true,
});

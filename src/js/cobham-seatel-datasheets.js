const parallaxItems = document.querySelectorAll('.parallax');
window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;
    parallaxItems.forEach(item=>{
        let speed = item.dataset.speed;
        item.style.transform = `translateY(${scroll * speed}px)`
    })
})


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

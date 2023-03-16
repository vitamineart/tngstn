new BeerSlider(document.getElementById('slider'));


scrollEntranceAnimate('#heart', {
    filter: 'blur(4px)',
    scale: .9,
    opacity: 0,
    duration: 2,
    ease: 'circ.out'
})
scrollEntranceAnimate('#postcard-front', {
    opacity: 0,
    x: -100,
    duration: 2,
    ease: 'circ.out'
})
scrollEntranceAnimate('#postcard-back', {
    opacity: 0,
    x: 100,
    duration: 2,
    ease: 'circ.out'
})

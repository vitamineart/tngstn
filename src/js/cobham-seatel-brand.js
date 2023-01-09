const ships = document.querySelectorAll('#circleShips [data-id]')

ships.forEach(ship => {
    const id = ship.dataset.id;
    const shipText = document.querySelector(`#${id}`);
    ship.addEventListener('mouseenter', (e) => {
        shipText.classList.add('highlighted')
    })
    ship.addEventListener('mouseleave', (e) => {
        shipText.classList.remove('highlighted')
    })
})

gsap.registerPlugin(ScrollTrigger);

const circleTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.circleShip',
    }
  })
circleTl.from('.circleShip', {
    opacity: 0,
    scale: 2,
    duration: 1,
    ease: 'expo.out',
    stagger: -0.2
}).from('.circleShip-image', {
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: 'expo.out',
    stagger: -0.2
}, "<10%")


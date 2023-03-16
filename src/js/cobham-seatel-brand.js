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

const windroseTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#windrose'
    }
}).from('#windrose',{
    filter: 'blur(5px)',
    scale: 0.9,
    opacity: 0,
    duration: 2,
    ease: 'circ.out'
}).from('#ST4012', {
    opacity: 0,
    filter: 'blur(5px)',
    y: 20
}, "<50%")

const circleTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.circleShip',
      start: '40% bottom'
    }
  })
circleTl.from('#domeAntennaImage', {
    opacity: 0,
    duration: 1,
}).from('.circleShip', {
    opacity: 0,
    scale: 2,
    duration: 1,
    ease: 'expo.out',
    stagger: -0.2
})



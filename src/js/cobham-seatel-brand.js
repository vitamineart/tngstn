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



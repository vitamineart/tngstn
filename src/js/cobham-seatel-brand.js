
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



const video = document.querySelector('video')
// Позже, после выполнения некоторых условий, устанавливаем в качестве
// источника URL-адрес предварительно загруженного видео.
video.src = 'img/cobham-brand/cobham-brand-hero-bg.mp4';
video.play().then(() => {
    // Если URL предварительно загруженного видео уже кэширован, воспроизведение начинается сразу же.
});

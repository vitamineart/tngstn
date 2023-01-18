gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '#dropcap',
    start: 'bottom 100%',
    toggleClass: 'animate__wobble',
    once: true
})


gsap.from("#pen", {
    scrollTrigger: {
       trigger: '#pen',
       start: 'top 100%',
    },
    opacity: 0,
    y: -200,
    duration: 1,
    delay: .2,
    ease: 'bounce.out()'
})

ScrollTrigger.matchMedia({
    "(max-width:479px)": function () {
        const items = gsap.utils.toArray('.imagesGrid .item');

        items.forEach((item, i) => {
        const anim = gsap.from(item, {opacity: 0, y: 50, duration: .6, delay: i * 0.1, ease: 'circ.Out()'});
            ScrollTrigger.create({
                trigger: item,
                animation: anim,
                toggleActions: 'play none none none',
                once: true,
            });
        });
    },
    "(min-width:480px)": function () {
        gsap.from('.imagesGrid .item', {
            scrollTrigger: {
                trigger: '.imagesGrid',
            },
            opacity:0,
            y: 50,
            duration: 1.4,
            ease: 'power4.out()',
            stagger: 0.3
        })
    }
})


const hero = document.querySelector('#hero');
const turnOn = document.querySelector('#turnOn');
const turnOff = document.querySelector('#turnOff');




setTimeout(() => {
    document.querySelector('.header').click();
    document.querySelector('.hero').classList.add('light-on');
    turnOn.preload = 'auto';
    turnOff.preload = 'auto';
    turnOn.muted = false;
    turnOff.muted = false;

    hero.addEventListener('mouseleave', ({target}) => {
        if (target.classList.contains('light-on')) {
            target.classList.remove('light-on')
            turnOff.play()
        }
    })
    hero.addEventListener('mouseenter', ({target}) => {
        if (!target.classList.contains('light-on')) {
            target.classList.add('light-on')
            turnOn.play()
        }
    })
}, 1000);


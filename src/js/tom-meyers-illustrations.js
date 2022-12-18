gsap.registerPlugin(ScrollTrigger);

gsap.from("#tom-photo", {
    scrollTrigger: {
        trigger: '#tom-photo',
        top: 'top 100%',
        once: true
    },
    opacity: 0,
    y: 50,
    duration: 2,
    delay: .1,
    ease: 'circ.out()'
})

ScrollTrigger.create({
    trigger: '#dropcap',
    start: 'bottom 100%',
    toggleClass: 'animate__wobble',
    once: true
})


gsap.from("#pep_logo", {
    scrollTrigger: {
        trigger: '#pep_logo',
        top: 'top 110%',
    },
    opacity: 0,
    x: -30,
    duration: 2,
    ease: 'pow3.out()'
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


const sketchTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#sketch-container",
        start: '0% 80%',
        end: '40% 30%',
        toggleActions: 'restart none reverse none',
        // scrub: true,
    },
});

sketchTL
    .fromTo('.sketch', {
        clipPath: 'circle(0% at 20% 20%)',
    }, {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 3,
    }).to(".pencil", {
        scale: 1,
        opacity: 1,
        duration: .7,
        delay: .2,
        ease: 'bounce.out()'
    }, "<")





gsap.from('.meyer-color', {
    scrollTrigger: {
        trigger: '#meyer-gradient',
    },
    xPercent: -100,
    duration: 1,
    filter: 'hue-rotate(-50deg)',
    ease: 'power4.out()',
    stagger: -0.1
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

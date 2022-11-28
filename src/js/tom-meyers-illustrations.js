gsap.registerPlugin(ScrollTrigger);

gsap.from("#tom-photo", {
    scrollTrigger: {
        trigger: '#tom-photo',
        top: 'top 100%',
        toggleActions: 'restart none reverse none'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'circ.out()'
})
ScrollTrigger.create({
    trigger: '#dropcap',
    start: 'bottom 100%',
    markers: true,
    toggleActions: 'restart none reverse none',
    toggleClass: 'animate__wobble'
})
gsap.from("#tngstn-ruins", {
    scrollTrigger: {
        trigger: '#tngstn-ruins',
        top: 'top 100%',
        toggleActions: 'restart none reverse none'
    },
    opacity: 0,
    x: 50,
    duration: 1.5,
    ease: 'pow3.out()'
})
gsap.from("#pep_logo", {
    scrollTrigger: {
        trigger: '#pep_logo',
        top: 'top 110%',
        toggleActions: 'restart none reverse none'
    },
    opacity: 0,
    x: -30,
    duration: 2,
    ease: 'pow3.out()'
})
gsap.from("#pen", {
    scrollTrigger: {
       trigger: '#pen',
       top: 'top 100%',
       toggleActions: 'restart none reverse none'
    },
    opacity: 0,
    y: -200,
    duration: 1,
    ease: 'bounce.out()'
})

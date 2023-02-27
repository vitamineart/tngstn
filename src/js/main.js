gsap.registerPlugin(ScrollToPlugin);


// Set a variable for our button element.
const scrollToTopButton = document.getElementById("go-to-top");

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 300) {
    scrollToTopButton.classList.remove("invisible", "opacity-0");
    scrollToTopButton.classList.add("visible", "opacity-100");
  } else {
    scrollToTopButton.classList.remove("visible", "opacity-100");
    scrollToTopButton.classList.add("invisible", "opacity-0");
  }
};

window.addEventListener("scroll", scrollFunc);
scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  gsap.to(window, {
    duration: 2,
    ease: 'power3.inOut',
    scrollTo: {
        y: 0,
        autoKill: true,
    }
  })
};

// style="shape-outside: url(img/White_Paper/Tanker_400.png);"
window.onload = function () {
  setTimeout(() => {
    const imageShapes = document.querySelectorAll(".shape-outside");
    imageShapes.forEach(function (item) {
      item.style.shapeOutside = `url(${item.getAttribute("src")})`;
    });
  }, 1000);
};


AOS.init({
  once: true
});



// random appear of works-clients grid
const projects = Array.from(document.querySelectorAll('.projects-grid .item'));
const randomProjects = projects.sort(randomizeFunc);

function randomizeFunc(a, b) {
  return 0.5 - Math.random();
}

document.querySelector('.projects-grid').innerHTML = '';
randomProjects.forEach((item, index)=>{
    document.querySelector('.projects-grid').appendChild(item)
    // item.classList.add(`item-${index+1}`)
})

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(max-width:861px)": function () {
      projects.forEach((project, i) => {
        const anim = gsap.fromTo(project, {
          opacity: 0,
          y: 50,
          scale:0,
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: .5,
          delay: i * 0.15,
          ease: 'circ.out()'
        });
        ScrollTrigger.create({
            trigger: project,
            animation: anim,
            once: true,
        });
      });
    },
    "(min-width:862px)": function () {
        const anim = gsap.fromTo(projects, {
          opacity: 0,
          scale: 0,
        },{
            opacity: 1,
            scale: 1,
            duration: 1.8,
            ease: 'expo.out()',
            stagger: {
                amount: .7,
                from:"random",
                grid:"auto"
            },
        })
        ScrollTrigger.create({
            trigger: '.projects-grid',
            start: '0% 90%',
            animation: anim
        })
    }
})

if(document.querySelector('#team')){
  gsap.from('#team .team-member', {
    scrollTrigger: {
      trigger: '#team',
      start: 'top 90%'
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: .2,
    ease: 'expo.out()',
    stagger: .1
  })
}

if (document.querySelector('#audio-wave')) {
  const audioWave = document.querySelector('#audio-wave');
  const audioBtn = document.querySelector('.btn-audio');

  const animateAudio = gsap.to('#audio-wave .bar', {
    opacity: 'random(0.4, 1)',
    transformOrigin: "center center",
    scaleY: 0.7,
    duration: .1,
    repeat: -1,
    yoyo: true,
    yoyoEase: 'power1.inOut',
    paused: true,
    ease: 'power1.out',
    stagger: {
      amount: 0.2,
      grid: 'auto',
      from: 'random'
    }
  })

  audioBtn.addEventListener('mouseenter', ()=>{
    animateAudio.play()
  })
  audioBtn.addEventListener('mouseleave', ()=>{
    animateAudio.pause(0, false)
  })
}

// common entrance animations
if(document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down, .fade-in, .blur-in')){
  let commonEase = 'circ.out';
  let commonX = 50;
  let commonY = 50;
  let animStart = '20% 80%';
  let commonDelayQ = 0.2;
  let fadeInLeft = gsap.utils.toArray('.fade-in-left');
  let fadeInRight = gsap.utils.toArray('.fade-in-right');
  let fadeInUp = gsap.utils.toArray('.fade-in-up');
  let fadeInDown = gsap.utils.toArray('.fade-in-down');
  let fadeIn = gsap.utils.toArray('.fade-in');
  let blurIn = gsap.utils.toArray('.blur-in');

fadeIn.forEach((item, i) => {
  const anim = gsap.from(item, {
    opacity: 0,
    duration: 1,
    delay: i * commonDelayQ,
    ease: commonEase
  });
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    once: true,
  });
});
fadeInLeft.forEach((item, i) => {
  const anim = gsap.from(item, {
    opacity: 0,
    x: commonX,
    duration: 1,
    delay: i * commonDelayQ,
    ease: commonEase
  });
  ScrollTrigger.create({
    trigger: item,
    start: animStart,
    animation: anim,
    once: true,
  });
});
fadeInRight.forEach((item, i) => {
  const anim = gsap.from(item, {
    opacity: 0,
    x: -commonX,
    duration: 1,
    delay: i * commonDelayQ,
    ease: commonEase
  });
  ScrollTrigger.create({
    trigger: item,
    start: animStart,
    animation: anim,
    once: true,
  });
});
fadeInUp.forEach((item, i) => {
  const anim = gsap.from(item, {
    opacity: 0,
    y: commonY,
    duration: 1,
    delay: i * commonDelayQ,
    ease: commonEase
  });
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    start: animStart,
    once: true,
  });
});
  fadeInDown.forEach((item, i) => {
    const anim = gsap.from(item, {opacity: 0, y: -commonY, duration: 1, delay: i * commonDelayQ, ease: commonEase});
    ScrollTrigger.create({
        trigger: item,
        animation: anim,
        start: animStart,
        once: true,
    });
  });
  blurIn.forEach((item, i) => {
    const anim = gsap.from(item, {opacity: 0, scale: 0.8, filter: 'blur(10px)', duration: 1, delay: i * commonDelayQ, ease: commonEase});
    ScrollTrigger.create({
        trigger: item,
        animation: anim,
        start: animStart,
        once: true,
    });
  });
}





gsap.to('.logo-svg .rainbow .ray', {
    keyframes: {
      "0%": {scale: 1,filter:'brightness(100%) saturate(100%)'},
      "50%": {scale: 1.3, filter:'brightness(120%) saturate(120%)'},
      "100%": {scale: 1,filter:'brightness(100%) saturate(100%)'}
    },
    ease: 'power1.out',
    transformOrigin: 'center',
    duration: .7,
    stagger: -0.08,
    repeat: -1,
    repeatDelay: 20,
    delay: 20
})
gsap.to('.logo-svg .rainbow .ray', {
    keyframes: {
      "0%": {filter:'brightness(100%) saturate(100%)'},
      "50%": {filter:'brightness(130%) saturate(110%)'},
      "100%": {filter:'brightness(100%) saturate(100%)'}
    },
    ease: 'circ.out',
    transformOrigin: 'center',
    duration: .5,
    stagger: .05,
    repeat: -1,
    repeatDelay: 10,
    delay: 30
})

const logoText = document.querySelector('.logo-svg .text');
if(logoText) {
  const logoTextTl = gsap.timeline()
  logoTextTl.to('.logo-svg .text', {
    opacity: 1,
    duration: 7,
    delay: 10
  })
  .fromTo('.logo-svg .text .letter', {
    transformOrigin: 'center',
    opacity: 0,
    scale: .5,
    x: -15,
  }, {
    opacity: 1,
    scale: 1,
    x: 0,
    ease: 'expo.out',
    duration: 2,
    stagger: .1
  }, "<50%")
}




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

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 12);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
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
const projects = Array.from(document.querySelectorAll('.works-grid .item'));
const randomProjects = projects.sort(randomizeFunc);

function randomizeFunc(a, b) {
  return 0.5 - Math.random();
}

document.querySelector('.works-grid').innerHTML = '';
randomProjects.forEach((item, index)=>{
    document.querySelector('.works-grid').appendChild(item)
    // item.classList.add(`item-${index+1}`)
})

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(max-width:861px)": function () {
        const items = gsap.utils.toArray('.works-grid .item');

        items.forEach((item, i) => {
        const anim = gsap.from(item, {opacity: 0, y: 50, scale:.8, duration: .5, delay: i * 0.1, ease: 'expo.out()'});
            ScrollTrigger.create({
                trigger: item,
                animation: anim,
                toggleActions: 'play none none none',
                once: true,
            });
        });
    },
    "(min-width:862px)": function () {

        gsap.from(".works-grid .item", {
            scrollTrigger: {
                trigger: '.works-grid',
                start: '5% 80%',
                once: true
            },
            opacity: 0,
            scale: 0,
            duration: 1.8,
            stagger: {
                amount: .7,
                from:"random",
                grid:"auto"
            },
            ease: 'expo.out()'

        })
    }
})

if(document.querySelector('#team')){
  gsap.from('#team .team-member', {
    scrollTrigger: {
      trigger: '#team'
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
let commonEase = 'circ.out';
let commonX = 50;
let commonY = 50;
let commonDelayQ = 0.2;
let fadeInLeft = gsap.utils.toArray('.fade-in-left');
let fadeInRight = gsap.utils.toArray('.fade-in-right');
let fadeInUp = gsap.utils.toArray('.fade-in-up');
let fadeInDown = gsap.utils.toArray('.fade-in-down');
let fadeIn = gsap.utils.toArray('.fade-in');
let blurIn = gsap.utils.toArray('.blur-in');

fadeIn.forEach((item, i) => {
    const anim = gsap.from(item, {opacity: 0, duration: 1, delay: i * commonDelayQ, ease: commonEase});
    ScrollTrigger.create({
        trigger: item,
        animation: anim,
        once: true,
    });
});
fadeInLeft.forEach((item, i) => {
    const anim = gsap.from(item, {opacity: 0, x: commonX, duration: 1, delay: i * commonDelayQ, ease: commonEase});
    ScrollTrigger.create({
        trigger: item,
        start: 'bottom 100%',
        animation: anim,
        once: true,
    });
});
fadeInRight.forEach((item, i) => {
    const anim = gsap.from(item, {opacity: 0, x: -commonX, duration: 1, delay: i * commonDelayQ, ease: commonEase});
    ScrollTrigger.create({
        trigger: item,
        start: 'bottom 100%',
        animation: anim,
        once: true,
    });
});
fadeInUp.forEach((item, i) => {
    const anim = gsap.from(item, {opacity: 0, y: commonY, duration: 1, delay: i * commonDelayQ, ease: commonEase});
    ScrollTrigger.create({
        trigger: item,
        animation: anim,
        once: true,
    });
});
fadeInDown.forEach((item, i) => {
    const anim = gsap.from(item, {opacity: 0, y: -commonY, duration: 1, delay: i * commonDelayQ, ease: commonEase});
    ScrollTrigger.create({
        trigger: item,
        animation: anim,
        once: true,
    });
});
blurIn.forEach((item, i) => {
    const anim = gsap.from(item, {opacity: 0, scale: 0.8, filter: 'blur(10px)', duration: 1, delay: i * commonDelayQ, ease: commonEase});
    ScrollTrigger.create({
        trigger: item,
        animation: anim,
        once: true,
    });
});





var sky = document.querySelector(".stars");
for (var i = 0; i < 250; i++) {
  var starStatic =
    '<div class="star absolute w-1 h-1" style="--top: ' +
    Math.random() * window.outerHeight +
    "px; --left: " +
    Math.random() * window.outerWidth +
    "px; --width: " +
    Math.random() * 10 +
    'px;"></div>';
  sky.innerHTML += starStatic;
}
for (var i = 0; i < 25; i++) {
  var star =
    '<div class="star absolute w-1 h-1" style=" --delay: ' +
    (Math.random() * 5 + 5) +
    "s;  --duration: " +
    (Math.ceil(Math.random() * 2) + 2) +
    "s;  --top: " +
    Math.random() * window.outerHeight +
    "px; --left: " +
    Math.random() * window.outerWidth +
    "px; --width: " +
    Math.random() * 15 +
    'px;"></div>';
  sky.innerHTML += star;
}



const blueCircleParallaxInit = () => {
  const circles = document.querySelector('.blue-circle-circles')
  const parallaxCircles = new Parallax(circles);

  const stars = document.querySelector('.blue-circle-stars')
  const parallaxStars = new Parallax(stars);
}

const newspapersParallaxInit = () => {
  const newspapers = document.querySelector('#news-paper-ad')
  const parallaxNewspapers = new Parallax(newspapers, {
    selector: '#paper-plane, #ad-clouds'
  });

}


const blueCircleTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#blue-circle-stars-message',
    start: '30% 90%',
  },
  onComplete: blueCircleParallaxInit,
  defaults : {
    transformOrigin: '50% 50%',
  }
})

const newspapersEntranceTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#news-paper-ad-bear',
    start: '80% bottom'
  },
  onComplete: newspapersParallaxInit,
  defaults: {
    transformOrigin: '50% 50%',
  }
}).from('#news-paper-ad-bear', {
  opacity: 0,
  x: 200,
  scale: 2,
  rotate: 360,
  duration: 1,
  ease: 'expo.inOut'
})
.from('#news-paper-ad-butterfly', {
  opacity: 0,
  scale: 2,
  x: -200,
  rotate: 360,
  duration: 1,
  ease: 'expo.inOut'
})
.from('#paper-plane', {
  x: -200,
  opacity: 0,
  scaleX: 0.7,
  rotate: 25,
  duration: 1,
  ease: 'circ.out'
}, "<")


blueCircleTl.from('#blue-circle-stars-message', {
  opacity: 0,
  scale: 0.7,
  duration: .8,
  ease: 'power2.out'
}).from('#blue-circle-stars-message .message span', {
  filter: 'blur(10px)',
  opacity: 0,
  scale: .5,
  duration: 1,
  ease: 'expo.out'
}, "<50%").from('.blue-circle-circle', {
  xPercent: 20,
  yPercent: 20,
  scale: 0.5,
  duration: 1,
  stagger: 0.1,
  ease: 'back.out(2)'
}, "<50%").from('.blue-circle-star', {
  fill: 'red',
  scale: 0,
  opacity: 0,
  duration: .7,
  rotate: 30,
  stagger: .2,
  ease: 'back.out(2)'
}, "<10%")


const pinguinTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#pinguin'
  },
})
pinguinTl.to('#pinguin', {
  rotate: 2,
  duration: .2,
  yoyo: true,
  repeat: 7,
}).from('#pinguin', {
  opacity:0,
  x: 100,
  duration: 2,
}, "<")


gsap.from('.toys-works-grid > a', {
  scrollTrigger: {
    trigger: '.toys-works-grid'
  },
  opacity:0,
  scale: 0,
  x: 'random(-100, 100, 10)',
  y: 'random(-100, 100, 10)',
  rotateX: 'random(-90, 90, 15)',
  rotateY: 'random(-90, 90, 15)',
  duration: 1,
  stagger: .1,
  ease: 'expo.out'
})

scrollEntranceAnimate('#red-car', {
  opacity: 0,
  x: -20,
  scale: 0.7,
  duration: 1
})


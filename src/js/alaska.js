const sealTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#alaska-state-seal',
    start: 'top 50%',
  },
})
sealTl.from('#alaska-state-seal', {
  scale: 2,
  opacity: 0,
  duration: .6,
  ease: 'back.out(1.4)'
}).from('#alaska-state-seal', {
  rotate: 20,
  duration: 0.4
}, "<")


  document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }

            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });

      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });


gsap.fromTo('.hero-ship', {
  xPercent: -50
}, {
  xPercent: 300,
  duration: 50,
  ease: 'linear',
  repeat: -1
})





const alaskaTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#alaska-map',
    start: 'top 90%',
  },
})
alaskaTl.from('#alaska-map', {
  opacity: 0,
  duration: 3
})
.from('#alaska-map .cities > g > circle', {
  transformOrigin: 'center',
  opacity: 0,
  duration: .5,
  scale: 0,
  ease: 'circ.out',
  stagger: .02
}, "<50%")
.from('#alaska-map .cities > g > path', {
  scale: 1.2,
  transformOrigin: 'center',
  opacity: 0,
  duration: 1,
  ease: 'power1.out',
  stagger: .02
}, "<50%")
.from('#alaska-map .cities-labels > .label', {
  y: 20,
  opacity: 0,
  duration: 1,
  stagger: .1
}, "0.7")
.from('#alaska-map .lines > path', {
  opacity: 0,
  duration: 2,
  ease: 'expo.out',
  stagger: .2
}, "3")
.from('#alaska-map .routes .route', {
  opacity: 0,
  scale: .8,
  transformOrigin: 'center',
  duration: .5,
  stagger: {
    amount: 0.4,
    grid: 'auto',
    from: 'random',
  }
}, "<")








// routes, cities filtering
const mapLabels = document.querySelectorAll('#alaska-map .cities-labels .label');
const alaskaRoutes = document.querySelectorAll('#alaska-map .route');
const routeLines = document.querySelectorAll('#alaska-map .lines path');
const cities = document.querySelectorAll('#alaska-map .cities .city');


mapLabels.forEach(item=>{
  item.addEventListener('mouseenter', ({target})=>{

    gsap.to(mapLabels, {opacity: 0.2, duration: 0.7, ease: 'circ.in'})
    gsap.to(target, {opacity: 1, duration: 0.7, ease: 'circ.out'})
    gsap.to(alaskaRoutes, {opacity:0.2, duration: .15});

    const labelRoutes = target.dataset.route.split(' ');

    routeLines.forEach( line => {

      if(labelRoutes.includes(line.dataset.route)) {
        line.style.setProperty("transition", ".9s ease-out");
        gsap.set(line, {
          'stroke-dashoffset':1,
          opacity: 0,
          onComplete: ()=>{
            gsap.set(line, {
              'stroke-dashoffset':0,
              opacity: 1
            })
          }
        })
      } else {
        gsap.set(line, {
          'stroke-dashoffset':1,
          opacity: 0
        })
      }
    })

    alaskaRoutes.forEach( route => {
      if(labelRoutes.includes(route.id)){
        gsap.to(route, {opacity:1, duration: .7, ease: 'circ.out'})
      } else {
        gsap.to(route, {opacity:0.2, duration: .7, ease: 'circ.out'})
      }
    })


  })
  item.addEventListener('mouseleave', ()=>{
    gsap.set(routeLines, {'stroke-dashoffset':0, opacity: 1})
    alaskaRoutes.forEach(route=>gsap.to(route, {opacity: 1, duration: .7, ease: 'circ.out'}))
    gsap.to(mapLabels, {opacity: 1, duration: 0.7, ease: 'circ.out'})
  })
})


alaskaRoutes.forEach(route=>{

  route.addEventListener('mouseenter', ({target})=>{
    const filtreredLine = Array.from(routeLines).filter((line) => line.dataset.route === target.id)[0]

    filtreredLine.style.setProperty("transition", ".9s ease-out");

    gsap.set(routeLines,{
      'stroke-dashoffset':1,
      opacity: 0
    })
    gsap.set(filtreredLine, {
      'stroke-dashoffset':0,
      opacity: 1
  })

    mapLabels.forEach(label=>gsap.to(label, {opacity:0.2, duration: 0.7, ease: 'circ.in'}))
    const routeCities = target.dataset.cities.split(" ");
    mapLabels.forEach(label=>{
      if(routeCities.includes(label.id)) {
        gsap.to(label, {opacity: 1,  duration: .7, ease: 'circ.out'})
      }
    })

  })

  route.addEventListener('mouseleave', ({target})=>{
    gsap.to(mapLabels, {opacity: 1,  duration: .7})
    gsap.set(routeLines, {'stroke-dashoffset':0, opacity: 1})
  })


})




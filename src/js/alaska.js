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



// alaska-blue-bg
gsap.from('#alaska-blue-bg', {
  scrollTrigger: {
    trigger: '.website-role-section',
    scrub: 5,
    start: '20% 90%',
    end: '80% 0%',
  },
  opacity: 0,
  y: -200,
})

const saveFerryTrigger = gsap.timeline({
  scrollTrigger: {
    trigger: '#save-ferry-laptop',
    scrub: true,
    end: '90% 90%',
  },
}).from('#save-ferry-laptop', {
  scale: 0.9
}).from('#save-ferry-page1', {
  scale: .8,
  xPercent: -60,
  ease: 'circ.out()'
}, "<").from('#save-ferry-page2', {
  scale: .8,
  xPercent: 60,
  ease: 'circ.out()'
}, "<")



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
.from('#alaska-map .lines > path', {
  opacity: 0,
  duration: 2,
  ease: 'expo.out',
  stagger: .2
}, "3")
.from('#ferry-routes .route', {
  opacity: 0,
  scale: .9,
  transformOrigin: 'center',
  duration: 1,
  stagger: {
    amount: 0.2,
    grid: 'auto',
    from: 'random',
  }
}, "<")








// routes, cities filtering
const map = document.querySelector('#alaska-map');
const initialMapViewBox = map.getAttribute('viewBox');
const mapLabels = document.querySelectorAll('#cities-labels .label');
const alaskaRoutes = document.querySelectorAll('#ferry-routes .route');
const routeLines = document.querySelectorAll('#alaska-map .lines path');
const cities = document.querySelectorAll('#alaska-map .cities .city');


mapLabels.forEach(item=>{
  item.addEventListener('mouseenter', ({target})=>{

    target.classList.add('active');
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

    if (window.innerWidth < 1024) {
      gsap.to(map, {
        attr:{viewBox: target.dataset.viewbox},
        duration: 1,
        ease: 'circ.inOut',
      })
    }


  })
  item.addEventListener('mouseleave', ()=>{
    gsap.set(routeLines, {'stroke-dashoffset':0, opacity: 1})
    alaskaRoutes.forEach(route=>gsap.to(route, {opacity: 1, duration: .7, ease: 'circ.out'}))
    mapLabels.forEach(label=>label.classList.remove('active'))
    // map.setAttribute("viewBox", `300 0 1939 1179`);
    if (window.innerWidth < 1024) {
      gsap.to(map, {
        attr:{ viewBox: initialMapViewBox },
        duration: 1,
        ease: 'circ.inOut',
      });
    }
  })
})


alaskaRoutes.forEach( route => {

  route.addEventListener('mouseenter', ({ target })=>{
    const filtreredLine = Array.from(routeLines).filter(( line ) => line.dataset.route === target.id)[0]

    filtreredLine.style.setProperty("transition", ".9s ease-out");

    gsap.set(routeLines,{
      'stroke-dashoffset':1,
      opacity: 0
    })
    gsap.set(filtreredLine, {
      'stroke-dashoffset':0,
      opacity: 1
  })

    mapLabels.forEach(label=>label.classList.remove('active'))
    const routeCities = target.dataset.cities.split(" ");
    mapLabels.forEach(label=>{
      if(routeCities.includes(label.id)) {
        label.classList.add('active')
      }
    })
    if (window.innerWidth < 1024) {
      gsap.to(map, {
        attr:{viewBox: target.dataset.viewbox},
        duration: 1,
        ease: 'circ.inOut',
      })
    }
  })

  route.addEventListener('mouseleave', ({target})=>{
    mapLabels.forEach(label=>label.classList.remove('active'))
    gsap.set(routeLines, {'stroke-dashoffset':0, opacity: 1})
    if (window.innerWidth < 1024) {
      gsap.to(map, {
        attr:{ viewBox: initialMapViewBox },
        duration: 1,
        ease: 'circ.inOut',
      });
    }
  })


})






// console.log(originalWidth, originalHeight);
// svgElement.addEventListener("mouseenter", (event) => {
//   const {top, left, width, height} = svgElement.getBoundingClientRect();

//   const eventTop = event.clientY - top;
//   const eventLeft = event.clientX - left;

//   svgElement.setAttribute("viewBox", `${eventLeft / width * originalWidth - originalWidth / 4} ${eventTop / height * originalHeight - originalHeight / 4} ${originalWidth / 2} ${originalHeight / 2}`)
// });
// svgElement.addEventListener("mouseleave", () => {
//   svgElement.setAttribute("viewBox", `0 0 ${originalWidth} ${originalHeight}`);
// });


gsap.from('#alaska-logo', {
    scrollTrigger: {
      trigger: '#alaska-logo',
    },
    rotate: 360,
    filter: 'blur(10px)',
    scale: 0,
    opacity: 0,
    duration: 2,
    ease: 'expo.out()'
  })


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
  'stroke-width': 10,
  opacity: 0,
  duration: 1,
  stagger: .2
}, "3")
.from('#alaska-map .routes .route', {
  opacity: 0,
  scale: .7,
  transformOrigin: 'center',
  duration: 1,
  stagger: .1
}, "<")








// routes, cities filtering
const mapLabels = document.querySelectorAll('#alaska-map .cities-labels .label');
const alaskaRoutes = document.querySelectorAll('#alaska-map .route');
const routeLines = document.querySelectorAll('#alaska-map .lines path');

mapLabels.forEach(item=>{
  item.addEventListener('mouseenter', ({target})=>{
    routeLines.forEach(line=>gsap.set(line, {'stroke-width':2, filter: 'blur(0)', opacity: 0}))
    alaskaRoutes.forEach(route=>gsap.set(route, {opacity:0.2}))

    const labelRoutes = target.dataset.route.split(' ');
    routeLines.forEach(line=>{
      if(labelRoutes.includes(line.dataset.route)) {
        line.style.opacity = 1;
        gsap.from(line, {'stroke-width':20, filter: 'blur(5px)', duration: 1, ease: 'expo.out'})
      }
    })
    alaskaRoutes.forEach(route=>{
      if(labelRoutes.includes(route.id)){
        route.style.opacity = 1;
      }
    })

  })
  item.addEventListener('mouseleave', ({target})=>{
    routeLines.forEach(line=>gsap.set(line, {opacity: 1}))
    alaskaRoutes.forEach(route=>gsap.set(route, {opacity: 1}))
  })
})
alaskaRoutes.forEach(route=>{
  route.addEventListener('mouseenter', ({target})=>{
    routeLines.forEach(line=>gsap.set(line, {'stroke-width':2, filter: 'blur(0)', opacity: 0}))
    const filtreredLine = Array.from(routeLines).filter((line) => line.dataset.route === target.id)[0]
    filtreredLine.style.opacity = 1;
    gsap.from(filtreredLine, {'stroke-width':20, filter: 'blur(5px)', duration: 1, ease: 'expo.out'})


    const routeCities = target.dataset.cities.split(" ");
    mapLabels.forEach(label=>gsap.set(label, {opacity:0.2}))


    mapLabels.forEach(label=>{
      if(routeCities.includes(label.id)) {
        label.style.opacity = 1;
      }
    })

  })

  route.addEventListener('mouseleave', ({target})=>{
    mapLabels.forEach(label=>label.style.opacity = 1)
    routeLines.forEach(line=>line.style.opacity = 1)
  })


})

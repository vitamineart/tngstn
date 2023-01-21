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




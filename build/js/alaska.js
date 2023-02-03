const sealTl=gsap.timeline({scrollTrigger:{trigger:"#alaska-state-seal",start:"top 50%"}});sealTl.from("#alaska-state-seal",{scale:2,opacity:0,duration:.6,ease:"back.out(1.4)"}).from("#alaska-state-seal",{rotate:20,duration:.4},"<"),document.addEventListener("DOMContentLoaded",(function(){var a=[].slice.call(document.querySelectorAll("video.lazy"));if("IntersectionObserver"in window){var t=new IntersectionObserver((function(a,e){a.forEach((function(a){if(a.isIntersecting){for(var e in a.target.children){var s=a.target.children[e];"string"==typeof s.tagName&&"SOURCE"===s.tagName&&(s.src=s.dataset.src)}a.target.load(),a.target.classList.remove("lazy"),t.unobserve(a.target)}}))}));a.forEach((function(a){t.observe(a)}))}})),gsap.fromTo(".hero-ship",{xPercent:-50},{xPercent:300,duration:50,ease:"linear",repeat:-1});const alaskaTl=gsap.timeline({scrollTrigger:{trigger:"#alaska-map",start:"top 90%"}});alaskaTl.from("#alaska-map",{opacity:0,duration:3}).from("#alaska-map .cities > g > circle",{transformOrigin:"center",opacity:0,duration:.5,scale:0,ease:"circ.out",stagger:.02},"<50%").from("#alaska-map .cities > g > path",{scale:1.2,transformOrigin:"center",opacity:0,duration:1,ease:"power1.out",stagger:.02},"<50%").from("#alaska-map .cities-labels > .label",{y:20,opacity:0,duration:1,stagger:.1},"0.7").from("#alaska-map .lines > path",{opacity:0,duration:2,ease:"expo.out",stagger:.2},"3").from("#alaska-map .routes .route",{opacity:0,scale:.7,transformOrigin:"center",duration:1,stagger:.1},"<");const mapLabels=document.querySelectorAll("#alaska-map .cities-labels .label"),alaskaRoutes=document.querySelectorAll("#alaska-map .route"),routeLines=document.querySelectorAll("#alaska-map .lines path");mapLabels.forEach((a=>{a.addEventListener("mouseenter",(({target:a})=>{gsap.to(mapLabels,{opacity:.2,duration:.7}),gsap.to(a,{opacity:1,duration:.7}),gsap.to(alaskaRoutes,{opacity:.2,duration:.15});const t=a.dataset.route.split(" ");routeLines.forEach((a=>{t.includes(a.dataset.route)?(a.style.setProperty("transition",".9s ease-out"),gsap.set(a,{"stroke-dashoffset":1,opacity:0,onComplete:()=>{gsap.set(a,{"stroke-dashoffset":0,opacity:1})}})):gsap.set(a,{"stroke-dashoffset":1,opacity:0})})),alaskaRoutes.forEach((a=>{t.includes(a.id)?gsap.to(a,{opacity:1,duration:.7,ease:"circ.out"}):gsap.to(a,{opacity:.2,duration:.7,ease:"circ.out"})}))})),a.addEventListener("mouseleave",(()=>{gsap.set(routeLines,{"stroke-dashoffset":0,opacity:1}),alaskaRoutes.forEach((a=>gsap.to(a,{opacity:1,duration:.7,ease:"circ.out"}))),gsap.to(mapLabels,{opacity:1,duration:.7,ease:"circ.out"})}))})),alaskaRoutes.forEach((a=>{a.addEventListener("mouseenter",(({target:a})=>{const t=Array.from(routeLines).filter((t=>t.dataset.route===a.id))[0];t.style.setProperty("transition",".9s ease-out"),gsap.set(routeLines,{"stroke-dashoffset":1,opacity:0}),gsap.set(t,{"stroke-dashoffset":0,opacity:1}),mapLabels.forEach((a=>gsap.to(a,{opacity:.2})));const e=a.dataset.cities.split(" ");mapLabels.forEach((a=>{e.includes(a.id)&&gsap.to(a,{opacity:1,duration:.7})}))})),a.addEventListener("mouseleave",(({target:a})=>{gsap.to(mapLabels,{opacity:1,duration:.7}),gsap.set(routeLines,{"stroke-dashoffset":0,opacity:1})}))}));
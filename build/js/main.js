const scrollToTopButton=document.getElementById("go-to-top"),scrollFunc=()=>{window.scrollY>300?(scrollToTopButton.classList.remove("invisible","opacity-0"),scrollToTopButton.classList.add("visible","opacity-100")):(scrollToTopButton.classList.remove("visible","opacity-100"),scrollToTopButton.classList.add("invisible","opacity-0"))};window.addEventListener("scroll",scrollFunc);const scrollToTop=()=>{const o=document.documentElement.scrollTop||document.body.scrollTop;o>0&&(window.requestAnimationFrame(scrollToTop),window.scrollTo(0,o-o/12))};scrollToTopButton.onclick=function(o){o.preventDefault(),scrollToTop()},window.onload=function(){setTimeout((()=>{document.querySelectorAll(".shape-outside").forEach((function(o){o.style.shapeOutside=`url(${o.getAttribute("src")})`}))}),1e3)},AOS.init({once:!0});const projects=Array.from(document.querySelectorAll(".works-grid .item")),randomProjects=projects.sort(randomizeFunc);function randomizeFunc(o,e){return.5-Math.random()}document.querySelector(".works-grid").innerHTML="",randomProjects.forEach(((o,e)=>{document.querySelector(".works-grid").appendChild(o)})),gsap.registerPlugin(ScrollTrigger);const portfolioItems=gsap.utils.toArray(".works-grid .item");if(ScrollTrigger.matchMedia({"(max-width:861px)":function(){portfolioItems.forEach(((o,e)=>{const t=gsap.from(o,{opacity:0,y:50,scale:.8,duration:.5,delay:.15*e,ease:"expo.out()"});ScrollTrigger.create({trigger:o,animation:t,toggleActions:"play none none none",once:!0})}))},"(min-width:862px)":function(){gsap.from(".works-grid .item",{scrollTrigger:{trigger:".works-grid",start:"40% 50%"},opacity:0,scale:0,duration:1.8,stagger:{amount:.7,from:"random",grid:"auto"},ease:"expo.out()"})}}),document.querySelector("#team")&&gsap.from("#team .team-member",{scrollTrigger:{trigger:"#team",start:"top 90%"},scale:.8,opacity:0,duration:1,delay:.2,ease:"expo.out()",stagger:.1}),document.querySelector("#audio-wave")){document.querySelector("#audio-wave");const o=document.querySelector(".btn-audio"),e=gsap.to("#audio-wave .bar",{opacity:"random(0.4, 1)",transformOrigin:"center center",scaleY:.7,duration:.1,repeat:-1,yoyo:!0,yoyoEase:"power1.inOut",paused:!0,ease:"power1.out",stagger:{amount:.2,grid:"auto",from:"random"}});o.addEventListener("mouseenter",(()=>{e.play()})),o.addEventListener("mouseleave",(()=>{e.pause(0,!1)}))}let commonEase="circ.out",commonX=50,commonY=50,animStart="20% 80%",commonDelayQ=.2,fadeInLeft=gsap.utils.toArray(".fade-in-left"),fadeInRight=gsap.utils.toArray(".fade-in-right"),fadeInUp=gsap.utils.toArray(".fade-in-up"),fadeInDown=gsap.utils.toArray(".fade-in-down"),fadeIn=gsap.utils.toArray(".fade-in"),blurIn=gsap.utils.toArray(".blur-in");fadeIn.forEach(((o,e)=>{const t=gsap.from(o,{opacity:0,duration:1,delay:e*commonDelayQ,ease:commonEase});ScrollTrigger.create({trigger:o,animation:t,once:!0})})),fadeInLeft.forEach(((o,e)=>{const t=gsap.from(o,{opacity:0,x:commonX,duration:1,delay:e*commonDelayQ,ease:commonEase});ScrollTrigger.create({trigger:o,start:animStart,animation:t,once:!0})})),fadeInRight.forEach(((o,e)=>{const t=gsap.from(o,{opacity:0,x:-commonX,duration:1,delay:e*commonDelayQ,ease:commonEase});ScrollTrigger.create({trigger:o,start:animStart,animation:t,once:!0})})),fadeInUp.forEach(((o,e)=>{const t=gsap.from(o,{opacity:0,y:commonY,duration:1,delay:e*commonDelayQ,ease:commonEase});ScrollTrigger.create({trigger:o,animation:t,start:animStart,once:!0})})),fadeInDown.forEach(((o,e)=>{const t=gsap.from(o,{opacity:0,y:-commonY,duration:1,delay:e*commonDelayQ,ease:commonEase});ScrollTrigger.create({trigger:o,animation:t,start:animStart,once:!0})})),blurIn.forEach(((o,e)=>{const t=gsap.from(o,{opacity:0,scale:.8,filter:"blur(10px)",duration:1,delay:e*commonDelayQ,ease:commonEase});ScrollTrigger.create({trigger:o,animation:t,start:animStart,once:!0})}));
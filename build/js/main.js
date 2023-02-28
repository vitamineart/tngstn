gsap.registerPlugin(ScrollToPlugin,ScrollTrigger);const scrollToTopButton=document.getElementById("go-to-top"),scrollFunc=()=>{window.scrollY>300?(scrollToTopButton.classList.remove("invisible","opacity-0"),scrollToTopButton.classList.add("visible","opacity-100")):(scrollToTopButton.classList.remove("visible","opacity-100"),scrollToTopButton.classList.add("invisible","opacity-0"))};window.addEventListener("scroll",scrollFunc),scrollToTopButton.onclick=function(e){e.preventDefault(),gsap.to(window,{duration:2,ease:"power3.inOut",scrollTo:{y:0}})},window.onload=function(){setTimeout((()=>{document.querySelectorAll(".shape-outside").forEach((function(e){e.style.shapeOutside=`url(${e.getAttribute("src")})`}))}),1e3)},AOS.init({once:!0});const projects=Array.from(document.querySelectorAll(".projects-grid .item")),randomProjects=projects.sort(randomizeFunc);function randomizeFunc(e,t){return.5-Math.random()}if(document.querySelector(".projects-grid").innerHTML="",randomProjects.forEach(((e,t)=>{document.querySelector(".projects-grid").appendChild(e)})),ScrollTrigger.matchMedia({"(max-width:861px)":function(){projects.forEach(((e,t)=>{const r=gsap.fromTo(e,{opacity:0,y:50,scale:0},{opacity:1,y:0,scale:1,duration:.5,delay:.15*t,ease:"circ.out()"});ScrollTrigger.create({trigger:e,animation:r,once:!0})}))},"(min-width:862px)":function(){const e=gsap.fromTo(projects,{opacity:0,scale:0},{opacity:1,scale:1,duration:1.8,ease:"expo.out()",stagger:{amount:.7,from:"random",grid:"auto"}});ScrollTrigger.create({trigger:".projects-grid",start:"0% 90%",animation:e})}}),document.querySelector("#team")&&gsap.from("#team .team-member",{scrollTrigger:{trigger:"#team",start:"top 90%"},scale:.8,opacity:0,duration:1,delay:.2,ease:"expo.out()",stagger:.1}),document.querySelector("#audio-wave")){document.querySelector("#audio-wave");const e=document.querySelector(".btn-audio"),t=gsap.to("#audio-wave .bar",{opacity:"random(0.4, 1)",transformOrigin:"center center",scaleY:.7,duration:.1,repeat:-1,yoyo:!0,yoyoEase:"power1.inOut",paused:!0,ease:"power1.out",stagger:{amount:.2,grid:"auto",from:"random"}});e.addEventListener("mouseenter",(()=>{t.play()})),e.addEventListener("mouseleave",(()=>{t.pause(0,!1)}))}if(document.querySelectorAll(".fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down, .fade-in, .blur-in")){let e="circ.out",t=50,r=50,o="20% 80%",a=.2,i=gsap.utils.toArray(".fade-in-left"),s=gsap.utils.toArray(".fade-in-right"),n=gsap.utils.toArray(".fade-in-up"),c=gsap.utils.toArray(".fade-in-down"),l=gsap.utils.toArray(".fade-in"),g=gsap.utils.toArray(".blur-in");l.forEach(((t,r)=>{const o=gsap.from(t,{opacity:0,duration:1,delay:r*a,ease:e});ScrollTrigger.create({trigger:t,animation:o,once:!0})})),i.forEach(((r,i)=>{const s=gsap.from(r,{opacity:0,x:t,duration:1,delay:i*a,ease:e});ScrollTrigger.create({trigger:r,start:o,animation:s,once:!0})})),s.forEach(((r,i)=>{const s=gsap.from(r,{opacity:0,x:-t,duration:1,delay:i*a,ease:e});ScrollTrigger.create({trigger:r,start:o,animation:s,once:!0})})),n.forEach(((t,i)=>{const s=gsap.from(t,{opacity:0,y:r,duration:1,delay:i*a,ease:e});ScrollTrigger.create({trigger:t,animation:s,start:o,once:!0})})),c.forEach(((t,i)=>{const s=gsap.from(t,{opacity:0,y:-r,duration:1,delay:i*a,ease:e});ScrollTrigger.create({trigger:t,animation:s,start:o,once:!0})})),g.forEach(((t,r)=>{const i=gsap.from(t,{opacity:0,scale:.8,filter:"blur(10px)",duration:1,delay:r*a,ease:e});ScrollTrigger.create({trigger:t,animation:i,start:o,once:!0})}))}gsap.to(".logo-svg .rainbow .ray",{keyframes:{"0%":{scale:1,filter:"brightness(100%) saturate(100%)"},"50%":{scale:1.3,filter:"brightness(120%) saturate(120%)"},"100%":{scale:1,filter:"brightness(100%) saturate(100%)"}},ease:"power1.out",transformOrigin:"center",duration:.7,stagger:-.08,repeat:-1,repeatDelay:20,delay:20}),gsap.to(".logo-svg .rainbow .ray",{keyframes:{"0%":{filter:"brightness(100%) saturate(100%)"},"50%":{filter:"brightness(130%) saturate(110%)"},"100%":{filter:"brightness(100%) saturate(100%)"}},ease:"circ.out",transformOrigin:"center",duration:.5,stagger:.05,repeat:-1,repeatDelay:10,delay:30});const logoText=document.querySelector(".logo-svg .text");if(logoText){gsap.timeline().to(".logo-svg .text",{opacity:1,duration:7,delay:10}).fromTo(".logo-svg .text .letter",{transformOrigin:"center",opacity:0,scale:.5,x:-15},{opacity:1,scale:1,x:0,ease:"expo.out",duration:2,stagger:.1},"<50%")}
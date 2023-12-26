gsap.registerPlugin(ScrollTrigger),ScrollTrigger.create({trigger:".dropcap-path-1",start:"bottom 100%",toggleClass:"dropcap-path-animate",once:!0}),ScrollTrigger.create({trigger:".dropcap-path-2",start:"bottom 70%",toggleClass:"dropcap-path-animate",once:!0}),gsap.from("#pen",{scrollTrigger:{trigger:"#pen",start:"top 100%"},opacity:0,y:-200,duration:1,delay:.2,ease:"bounce.out()"}),ScrollTrigger.matchMedia({"(max-width:479px)":function(){gsap.utils.toArray(".imagesGrid .item").forEach(((e,t)=>{const r=gsap.from(e,{opacity:0,y:50,duration:.6,delay:.1*t,ease:"circ.Out()"});ScrollTrigger.create({trigger:e,animation:r,toggleActions:"play none none none",once:!0})}))},"(min-width:480px)":function(){gsap.from(".imagesGrid .item",{scrollTrigger:{trigger:".imagesGrid"},opacity:0,y:50,duration:1.4,ease:"power4.out()",stagger:.3})}});const hero=document.querySelector("#hero"),turnOn=document.querySelector("#turnOn"),turnOff=document.querySelector("#turnOff");setTimeout((()=>{document.querySelector(".header").click(),document.querySelector(".hero").classList.add("light-on"),turnOn.preload="auto",turnOff.preload="auto",turnOn.muted=!1,turnOff.muted=!1,hero.addEventListener("mouseleave",(({target:e})=>{e.classList.contains("light-on")&&(e.classList.remove("light-on"),turnOff.play())})),hero.addEventListener("mouseenter",(({target:e})=>{e.classList.contains("light-on")||(e.classList.add("light-on"),turnOn.play())}))}),1e3),scrollEntranceAnimate("#tom-meyer",{opacity:0,rotateY:-90}),scrollEntranceAnimate(".tom-meyer-info",{opacity:0,scale:.9,delay:.3,duration:1});
const ships=document.querySelectorAll("#circleShips [data-id]");ships.forEach((e=>{const i=e.dataset.id,r=document.querySelector(`#${i}`);e.addEventListener("mouseenter",(e=>{r.classList.add("highlighted")})),e.addEventListener("mouseleave",(e=>{r.classList.remove("highlighted")}))})),gsap.registerPlugin(ScrollTrigger);const circleTl=gsap.timeline({scrollTrigger:{trigger:".circleShip"}});circleTl.from(".circleShip",{opacity:0,scale:2,duration:1,ease:"expo.out",stagger:-.1}).from(".circleShip-image",{opacity:0,scale:0,y:-100,duration:1,ease:"expo.out",stagger:-.1},"<10%");
const parallaxItems=document.querySelectorAll(".parallax");window.addEventListener("scroll",(()=>{let l=window.scrollY;parallaxItems.forEach((a=>{let e=a.dataset.speed;a.style.transform=`translateY(${l*e}px)`}))}));
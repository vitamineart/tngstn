const scrollToTopButton=document.getElementById("go-to-top"),scrollFunc=()=>{window.scrollY>300?(scrollToTopButton.classList.remove("invisible","opacity-0"),scrollToTopButton.classList.add("visible","opacity-100")):(scrollToTopButton.classList.remove("visible","opacity-100"),scrollToTopButton.classList.add("invisible","opacity-0"))};window.addEventListener("scroll",scrollFunc);const scrollToTop=()=>{const o=document.documentElement.scrollTop||document.body.scrollTop;o>0&&(window.requestAnimationFrame(scrollToTop),window.scrollTo(0,o-o/12))};scrollToTopButton.onclick=function(o){o.preventDefault(),scrollToTop()};const worksgridItems=document.querySelectorAll(".works-grid .item"),timeNums=[50,100,150,200,250,300,350,400,450,500,550,600];worksgridItems.forEach((o=>{o.setAttribute("data-aos-delay",`${timeNums[Math.round(Math.random()*timeNums.length)]}`)})),AOS.init(),window.onload=function(){document.querySelectorAll(".shape-outside").forEach((function(o){o.style=`shape-outside: url(${o.getAttribute("src")})`}))};
const ships=document.querySelectorAll("#circleShips [data-id]");ships.forEach((e=>{const s=e.dataset.id,t=document.querySelector(`#${s}`);e.addEventListener("mouseenter",(e=>{t.classList.add("highlighted")})),e.addEventListener("mouseleave",(e=>{t.classList.remove("highlighted")}))}));
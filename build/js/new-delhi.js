const swiper=new Swiper(".gallery",{autoplay:{delay:5e3},spaceBetween:10,breakpoints:{1200:{spaceBetween:100}},slidesPerView:"auto",centeredSlides:!0,loop:!0,slidesPerGroup:1,slidesPerGroupSkip:1,lazy:!0,watchSlidesProgress:!0,keyboard:{enabled:!0}});gsap.from("#van",{scrollTrigger:{trigger:"#van",start:"top 90%"},x:-50,scale:1.1,duration:3,filter:"blur(10px)",ease:"expo.out()"});const spiceSliderIndex=document.querySelector("#spiceSliderIndex"),spiceSliderName=document.querySelector("#spiceSliderName"),spiceSliderQ=document.querySelector("#spiceSliderQ"),dropZone=document.querySelector("#StoneBowlContainerDropZone"),cookBtn=document.querySelector("#cook-btn"),cookGaramMasala=document.querySelector("#cook-garam-masala");cookBtn.addEventListener("click",(function(e){cookGaramMasala.classList.toggle("closed")}));const spiceSwiper=new Swiper("#spiceSlider ",{autoplay:!1,spaceBetween:10,slidesPerView:3,centeredSlides:!0,lazy:!0,watchSlidesProgress:!0,allowTouchMove:!1,zoom:!0,spaceBetween:0,on:{init:function(e){spiceSliderIndex.innerHTML=swiper.activeIndex+1,spiceSliderName.innerHTML=swiper.slides[swiper.activeIndex].dataset.name,console.log(e.slides[swiper.activeIndex].querySelector("img"))}}}),activeSlideImage=spiceSwiper.slides[swiper.activeIndex].querySelector("img"),spiceSliderPrev=document.querySelector(".spiceSliderPrev"),spiceSliderNext=document.querySelector(".spiceSliderNext");spiceSliderPrev.addEventListener("click",(e=>{spiceSwiper.slidePrev()})),spiceSliderNext.addEventListener("click",(e=>{spiceSwiper.slideNext()})),spiceSwiper.on("slideChange",(e=>{let i=e.slides[e.activeIndex].dataset.name;spiceSliderName.innerHTML=i,spiceSliderIndex.innerHTML=e.activeIndex+1,e.slides.forEach((e=>{}))}));const spiceImages=document.querySelectorAll("#spiceSlider .swiper-slide img"),draggedSpices=[];spiceImages.forEach((e=>{e.addEventListener("dragstart",(e=>{e.dataTransfer.setData("text/plain",e.target.id);draggedSpices.includes(e.target.id)&&console.log("You already add the spice")}))})),dropZone.addEventListener("dragenter",(e=>{const i=e.dataTransfer.getData("text/plain");console.log(i),draggedSpices.includes(e.target.id)&&console.log("You'already added this spice!")})),dropZone.addEventListener("dragover",(e=>{e.preventDefault()})),dropZone.addEventListener("drop",(e=>{e.preventDefault();const i=e.dataTransfer.getData("text/plain");if(draggedSpices.includes(i))console.log("You'already added this spice!");else{const r=document.createElement("img");r.src=`../media/new-delhi/CrushedSpices/crushed${i}.png`,e.target.appendChild(r),draggedSpices.push(i)}spiceSwiper.slideNext(),console.log(draggedSpices)}));
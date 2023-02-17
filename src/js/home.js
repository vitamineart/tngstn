const content = document.querySelector(".page-content");
const contentItems = content.querySelectorAll('.expander > .container > *');
const readMoreButton = document.getElementById("read-more-button");

readMoreButton.addEventListener("click", function ({target}) {
    readMoreButton.classList.toggle('opened');
    if(content.clientHeight == 0) {
        content.style.height = `${content.scrollHeight}px`;
        gsap.from(contentItems, {y:10, scale: 0.9, opacity: 0, duration: .6, stagger: .1, });

        readMoreButton.scrollIntoView({behavior: "smooth"});

    } else {
        content.style.height = 0
    }

});

window.addEventListener('resize', ()=>{
    if(!content.clientHeight == 0) {
        readMoreButton.classList.remove('opened');
        content.style.height = 0
    }

})

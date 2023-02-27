const content = document.querySelector(".page-content");
const contentItems = content.querySelectorAll('.expander .container > *');
const readMoreButton = document.getElementById("read-more-button");
const readMoreButtonText = document.querySelector("#read-more-button span.text");


readMoreButton.addEventListener("click", function ({target}) {
    readMoreButton.classList.toggle('opened');
    if(content.clientHeight == 0) {
        content.style.height = `${content.scrollHeight}px`;
        gsap.from(contentItems, {y:10, scale: 0.9, opacity: 0, duration: 2, stagger: .1, });


        // readMoreButton.scrollIntoView({behavior: "smooth"});
        // gsap.to(window, {
        //     duration: 2,
        //     ease: 'power2.inOut',
        //     scrollTo: {
        //         y: readMoreButton,
        //         offsetY: 15,
        //         autoKill: true,
        //     }
        // })

        // var scrollButton = readMoreButton.offsetTop;
        // window.scrollTo({ top: scrollButton, behavior: 'smooth',  });

        readMoreButtonText.textContent = 'See Our Work';
    } else {
        content.style.height = 0
        readMoreButtonText.textContent = 'Discover Tungsten';
    }

});

window.addEventListener('resize', () => {
    if(!content.clientHeight == 0) {
        readMoreButtonText.textContent = 'Discover Tungsten';
        content.style.height = 0;
        readMoreButton.classList.remove('opened');
    }

})



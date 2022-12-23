const content = document.querySelector(".page-content");
const contentTitle = content.querySelectorAll('.expander > .page-title');
const contentItems = content.querySelectorAll('.expander > .container > *');
document.getElementById("read-more-button").addEventListener("click", function () {
    document.querySelector('#read-more').classList.toggle('opened');
    if(content.clientHeight == 0) {
        content.style.height = `${content.scrollHeight}px`;
        gsap.from([contentTitle, contentItems], {scale: .9, opacity: 0, duration: .5, stagger: .1});
    } else {
        content.style.height = 0
    }

});

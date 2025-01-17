// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 200,
    speedAsDuration: true,
    easing: "easeInOutCubic",
    updateURL: false,
});

document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        scroll.animateScroll(targetElement, null, {
            callback: () => {
                history.replaceState(null, null, " ");
            },
        });
    });
});

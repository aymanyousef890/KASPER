
$('.skitter-large').skitter(
    {

        dots: true,
        navigation: true

    }
);
// init controller
var controller = new ScrollMagic.Controller();

// loop through all elements
$('.fade-in').each(function () {

    // build a tween
    var tween = TweenMax.from($(this), 0.3, { autoAlpha: 0, scale: 0.5, y: '+=0', ease: Linear.easeNone });

    // build a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: .9,
        reverse: false,
    })
        .setTween(tween) // trigger a TweenMax.to tween
        .addTo(controller);


});
var cotroller = new ScrollMagic.Controller();
var efx = new ScrollMagic.Scene({
    triggerElement: '.stats',
    triggerHook: 1,
    duration: '100%'
})
    .setTween(TweenMax.from('.bcg2', 1, { y: '-50%', ease: Power0.easeNone }))
    .addTo(cotroller)
var cotroller2 = new ScrollMagic.Controller();
var efx2 = new ScrollMagic.Scene({
    triggerElement: '.quote',
    triggerHook: 1,
    duration: '100%'
})
    .setTween(TweenMax.from('.bcg3', 1, { y: '-70%', ease: Power0.easeNone }))
    .addTo(cotroller2)

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({

        items: 1,
        dots: true,
        nav: true,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    })
});
let nums = document.querySelectorAll(".num-container .num");
let section = document.querySelector(".num-section");
let started = false; // Function Started ? No
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 100) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 1000 / goal);
}
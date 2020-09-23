// Global Variables
var textWrapper = document.querySelector('.name .letters');
var footerTxtWrap = document.querySelector('.foot-txt .f-ltrs')

// Parralax Scrolling Animation
var rellax = new Rellax('.rellax');

// Header & Footer Animation
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");
footerTxtWrap.innerHTML = footerTxtWrap.textContent.replace(/\S/g, "<span class='f-ltrs'>$&</span>");

// Button Animation - Fade In
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('.up-arw').fadeIn();
    } else {
        $('.up-arw').fadeOut();
    }
});

// Main Body / Header Animation
var tl = anime.timeline()
.add ({
    targets: '.name .letters',
    translateY: ["-1.1em", 0],
    translateX: ["-2em", 0],
    opacity: 1,
    translateZ: 0,
    rotateZ: [330, 360],
    duration: 750,
    easing: "easeInExpo",
    delay: (el, i) => 65 * i * Math.random()
});

anime.timeline()
.add ({
    targets: '.list .a-elm',
    translateY: 800,
    translateX: ["-2em", 0],
    opacity: 1,
    translateZ: 0,
    rotateZ: [20, 0],
    duration: 1500,
    delay: anime.stagger(200, {direction: 'reverse'})
}, 1000);

anime.timeline()
.add ({
    targets: '.section-wrapper',
    rotateZ: [40, 0],
    translateZ: 0,
    duration: 1000,
    opacity: 1,
}, 1200);

// Header Section Animation
anime.timeline()
.add ({
    targets: '.hd-1',
    rotateZ: [-5],
    translateY: 8,
    translateZ: 1,
    opacity: 1,
}, 2800);

// SVG Morphing Animation
var timeline = anime.timeline({
    autoplay: true,
    direction: "alternate",
    loop: true
});
  
timeline
.add({
    targets: ".path-shape",
    d: {
    value: [
        "M 7.7423617,6.5524041 C 0.14213171,13.241204 -0.28352929,25.218399 6.5488487,32.446038 13.237649,40.04627 24.578354,40.568996 32.442483,33.639553 39.813699,26.434583 40.216105,14.96193 33.635997,7.7459191 26.935569,0.39795815 15.101951,-0.40029585 7.7423617,6.5524041 Z",
        "M 1.4639006,1.6816009 C 1.4129866,11.374999 1.1386316,31.038516 1.2037966,39.132841 10.361482,39.005187 29.91693,39.467197 38.833611,39.035804 39.621131,30.764045 38.910573,9.4542879 39.093715,1.2274189 30.247144,1.2462399 8.8125376,1.8724369 1.4639006,1.6816009 Z"
    ],
    duration: 1500,
    easing: "easeInOutQuad",
    },
    offset: 0
})
.add({
    targets: ".shape1",
    fill: {
    value: ["#2095F2", "#4BAF4F"],
    duration: 1500,
    easing: "easeInOutQuad"
    },
    offset: 0
})
.add({
    targets: ".path-shape",
    d: {
    value: [
        "M 1.4639006,1.6816009 C 1.4129866,11.374999 1.1386316,31.038516 1.2037966,39.132841 10.361482,39.005187 29.91693,39.467197 38.833611,39.035804 39.621131,30.764045 38.910573,9.4542879 39.093715,1.2274189 30.247144,1.2462399 8.8125376,1.8724369 1.4639006,1.6816009 Z",
        "M 19.499615,1.5030295 C 15.341558,11.017856 5.4243459,31.217087 1.2037966,39.132841 10.361482,39.005187 29.91693,39.467197 38.833611,39.035804 34.978274,30.942616 24.624859,11.418574 20.165144,1.5845618 18.73688,1.6665173 20.913606,1.4728946 19.499615,1.5030295 Z"
    ],
    duration: 1500,
    easing: "easeInOutQuad"
    },
    offset: 1500
})
.add({
    targets: ".shape1",
    fill: {
    value: ["#4BAF4F", "#F44236"],
    duration: 1500,
    easing: "easeInOutQuad"
    },
    offset: 1500
})
.add({
    targets: ".path-shape",
    d: {
    value: [
        "M 19.499615,1.5030295 C 15.341558,11.017856 5.4243459,31.217087 1.2037966,39.132841 10.361482,39.005187 29.91693,39.467197 38.833611,39.035804 34.978274,30.942616 24.624859,11.418574 20.165144,1.5845618 18.73688,1.6665173 20.913606,1.4728946 19.499615,1.5030295 Z",
        "M 7.7423617,6.5524041 C 0.14213171,13.241204 -0.28352929,25.218399 6.5488487,32.446038 13.237649,40.04627 24.578354,40.568996 32.442483,33.639553 39.813699,26.434583 40.216105,14.96193 33.635997,7.7459191 26.935569,0.39795815 15.101951,-0.40029585 7.7423617,6.5524041 Z"
    ],
    duration: 1500,
    easing: "easeInOutQuad"
    },
    offset: 3000
})
.add({
    targets: ".shape1",
    fill: {
    value: ["#F44236", "#2095F2"],
    duration: 1500,
    easing: "easeInOutQuad"
    },
    offset: 3000
});

var tl2 = anime.timeline({loop: true})
.add ({
    targets: '.foot-txt .f-ltrs',
    translateY: ["0.012em", -0.08],
    translateZ: 0,
    duration: 1200,
    delay: (el, i) => 50 * i
}).add ({
    targets: '.foot-txt .f-ltrs',
    translateY: ["0.013em"],
    translateZ: 0,
    duration: 1000,
    delay: anime.stagger(200, {direction: 'reverse'})
});
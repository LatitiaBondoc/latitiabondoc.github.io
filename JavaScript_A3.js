const carousel = document.querySelector(".carousel"); //getting carousel from HTML DOM
let carouselWidth = carousel.offsetWidth; //Gets total width of carousel

let amountToScroll = carouselWidth - window.innerWidth;
/* subtracting window width from carousel's 
width to horizontal scroll amount */


gsap.registerPlugin(ScrollTrigger); // GSAP scroll trigger plugin 

//assigning scroll animation for carousel
gsap.to(".cards", { //given to cards in "algSect" under carousel div

    scrollTrigger: { 
        trigger: ".algSect", /* GSAP plugin/ animation is 
                            triggered once user reaches the 
                            'algorithm' section' */
                            
        start: "center center", // Sets the starting position of scroll trigger
        pin: true, //pins the animation/ trigger to the element until finished
        end: "+=3300", //the ending position of gallery
        scrub: 1, //animation speed/ progress of scroll 

    },
    x: -3500, //the width of carousel
});


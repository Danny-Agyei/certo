const slideUp1 = document.querySelectorAll(".js-slide-up1");
const slideUp2 = document.querySelectorAll(".js-slide-up2");
const slideUp3 = document.querySelectorAll(".js-slide-up3");
const fadeRight = document.querySelector(".js-fade-right");
const slideRight = document.querySelector(".js-slide-right");
const slideLeft = document.querySelector(".js-slide-left");
const heroBanner = document.querySelector(".js-hero-banner");

ScrollReveal().reveal(slideUp1, {
  distance: "50%",
  easing: "ease",
  delay: 350,
  duration: 650,
});

ScrollReveal().reveal(slideUp2, {
  distance: "50%",
  easing: "ease",
  delay: 400,
  duration: 650,
});

ScrollReveal().reveal(slideUp3, {
  distance: "50%",
  easing: "ease",
  delay: 450,
  duration: 650,
});

ScrollReveal().reveal(heroBanner, {
  delay: 400,
  duration: 550,
  origin: "right",
  mobile: false,
});

ScrollReveal().reveal(slideRight, {
  distance: "30%",
  easing: "ease",
  delay: 350,
  duration: 800,
  origin: "right",
});

ScrollReveal().reveal(slideLeft, {
  distance: "30%",
  easing: "ease",
  delay: 350,
  duration: 800,
  origin: "left",
});

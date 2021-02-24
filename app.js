gsap.registerPlugin(ScrollTrigger);

// Animate nav links
gsap.from("nav li", {
  duration: 1,
  opacity: 0,
  y: 100,
  ease: "power2",
  stagger: {
    amount: 1,
  },
});

// Animate brand name from center screen to next to logo
// gsap.from("#brand", {
//   scrollTrigger: {
//     trigger: "header",
//     start: "top top",
//     toggleActions: "play none none reverse",
//   },
//   duration: 0.5,
// });

gsap.to("#brand", {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    scrub: 1,
  },
  y: -500,
  opacity: 0,
  duration: 1,
});

// Animate sub heading
gsap.to("#sub", {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    scrub: 1,
  },
  y: -300,
  opacity: 0,
  duration: 1,
});

// Animate tagline
gsap.to("#tag", {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    scrub: 1,
  },
  y: -200,
  opacity: 0,
  duration: 1,
});

// Tree
gsap.to(".tree", {
  scrollTrigger: {
    trigger: "#section1",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    pin: "#section1",
  },
  scale: 1.7,
});

gsap.to("#bare", {
  scrollTrigger: {
    trigger: "#section1",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    pin: "#section1",
  },
  opacity: 0,
});

gsap.to("#leaves", {
  scrollTrigger: {
    trigger: "#section1",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    pin: "#section1",
  },
  opacity: 0.3,
});

gsap.to("#leaves", {
  scrollTrigger: {
    trigger: "#section2",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    pin: "#section2",
  },
  scale: 1,
  immediateRender: false,
});

gsap.to(".tree", {
  scrollTrigger: {
    trigger: "#section3",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    pin: "#section3",
  },
  opacity: 0,
  immediateRender: false,
});

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
gsap.from(".brand h1", {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    toggleActions: "play none none reverse",
  },
  duration: 0.5,
  scale: 4,
  ease: "none",
  x: () =>
    window.innerWidth / 2 - document.querySelector(".brand h1").clientWidth,
  y: () =>
    window.innerHeight / 2 - document.querySelector(".brand h1").clientHeight,
  xPercent: -50,
  yPercent: -50,
});

// Animate tagline
gsap.to(".sub", {
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    scrub: 1,
    // markers: true,
    // pin: "header",
  },
  scale: 0,
  ease: "circ",
  y: 200,
  opacity: 0,
});

// Tree

gsap.fromTo(
  ".tree",
  { scale: 1.7 },
  {
    scrollTrigger: {
      trigger: "#section2",
      start: "top top",
      end: "bottom center",
      scrub: 1,
      pin: "#section2",
    },
    scale: 1,
  }
);

gsap.fromTo(
  ".tree",
  { scale: 1 },
  {
    scrollTrigger: {
      trigger: "#section1",
      start: "top top",
      end: "bottom center",
      scrub: 1,
      pin: "#section1",
    },
    scale: 1.7,
  }
);

gsap.to(".tree", {
  scrollTrigger: {
    trigger: "#section3",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    pin: "#section3",
  },
  opacity: 0,
});
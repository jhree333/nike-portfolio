export default function updateStudio() {
  let motion04 = gsap.timeline({});
  motion04.fromTo(".slide02", { xPercent: 0 }, { xPercent: -20 });

  ScrollTrigger.create({
    animation: motion04,
    trigger: ".slide02",
    start: "top 50%",
    end: "bottom top",
    // markers: true,
    scrub: 1,
  });
}

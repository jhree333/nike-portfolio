export default function updateStory() {
  let motion02 = gsap.timeline({});
  motion02
    .addLabel("label01")
    .fromTo(".story_text01", { xPercent: -20 }, { xPercent: 10 }, "label01")
    .fromTo(".story_text02", { xPercent: 20 }, { xPercent: -10 }, "label01");

  ScrollTrigger.create({
    animation: motion02,
    trigger: ".story_title",
    start: "top 100%",
    end: "bottom top",
    // markers: true,
    scrub: 1,
  });
}

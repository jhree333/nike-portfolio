// sc_connect 스크롤 이벤트
export default function updateConnect() {
  let motion03 = gsap.timeline({});
  motion03.fromTo(".connect_title", { yPercent: 0 }, { yPercent: 180 });

  ScrollTrigger.create({
    animation: motion03,
    trigger: ".connect_title",
    start: "top 50%",
    end: "bottom top",
    // markers: true,
    scrub: 1,
    onLeave: () => {
      $(".connect_title span").removeClass("on");
    },
    onLeaveBack: () => {
      $(".connect_title span").removeClass("on");
    },
    onEnter: () => {
      $(".connect_title span").addClass("on");
    },
    onEnterBack: () => {
      $(".connect_title span").addClass("on");
    },
  });
}

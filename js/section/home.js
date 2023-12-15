export default function updateHome() {
  new Swiper(".slide01", {
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
  });
}

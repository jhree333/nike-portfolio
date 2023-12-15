export default function updateHeader() {
  // header 백그라운드 색상 이벤트
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").css("background-color", "#000000");
    } else {
      $("header").css("background-color", "transparent");
    }
  });

  // cursor 위치 조정
  $("body").mousemove(function (e) {
    let xVal = e.clientX - $(".cursor").width() / 2;
    let yVal = e.clientY - $(".cursor").height() / 2;
    gsap.to(".cursor", {
      x: xVal,
      y: yVal,
    });
  });

  $("a").mouseover(function () {
    gsap.to(".cursor", {
      scale: 3,
      duration: 0.2,
    });
  });

  $("a").mouseleave(function () {
    gsap.to(".cursor", {
      scale: 1,
    });
  });

  // 클릭시 메뉴 보임
  $(".dept1").click(function (e) {
    e.preventDefault();
    $(this).parent("li").toggleClass("on");
  });

  $(".curr_lang").click(function (e) {
    e.preventDefault();
    $(this).parent(".lang").toggleClass("on");
  });
}

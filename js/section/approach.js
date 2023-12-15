export default function updateApproach() {
  $(".approach_item").mousemove(function (e) {
    let x = e.offsetX;
    let y = e.offsetY;
    const width = $(this).width();
    const height = $(this).height();

    // 마우스 위치에 따라 x, y값을 동적으로 계산
    x = (x / width - 0.5) * 20; // x 값을 -10에서 10 사이로 조정
    y = (y / height - 0.5) * 20; // y 값을 -10에서 10 사이로 조정

    gsap.to($(this), {
      rotateX: y,
      rotateY: x,
    });
  });

  $(".approach_item").mouseleave(function (e) {
    gsap.to($(this), {
      rotateX: 0,
      rotateY: 0,
    });
  });
}

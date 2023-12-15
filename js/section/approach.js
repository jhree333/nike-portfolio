export default function updateApproach() {
  $(".approach_item").mousemove(function (e) {
    let x = e.offsetX;
    let y = e.offsetY;

    if (x < 214 && y < 133) {
      x = 10;
      y = 10;
    } else if (x < 214 && y > 133) {
      x = -10;
      y = -10;
    } else if (x > 314 && y > 233) {
      x = -10;
      y = 10;
    } else if (x > 314 && y < 233) {
      x = 10;
      y = -10;
    } else {
      x = 0;
      y = 0;
    }
    gsap.to($(this), {
      rotateX: x,
      rotateY: y,
    });
  });

  $(".approach_item").mouseleave(function (e) {
    gsap.to($(this), {
      rotateX: 0,
      rotateY: 0,
    });
  });
}

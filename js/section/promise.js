export default function updatePromise() {
  let motion01 = gsap.timeline({});
  // 초기 위치에서 아래로 5%만큼 이동시킨 후, 최종적으로 위로 70%만큼 이동시키는 효과
  motion01.fromTo(".promise_items", { yPercent: 5 }, { yPercent: -70 });

  ScrollTrigger.create({
    animation: motion01,
    trigger: ".sc_promise",
    start: "top top", // 트리거 요소가 뷰포트의 상단에 닿으면 스크롤 트리거가 시작
    end: "+=250%", // 트리거 요소의 높이를 250%만큼 스크롤한 지점에서 트리거가 비활성화
    // markers: true, // 트리거와 애니메이션의 경계를 시각적으로 확인할 수 있는 마커
    scrub: 1, // 애니메이션을 부드럽게 진행시키는 효과
    pin: true, // 애니메이션이 실행되는 동안 해당 요소를 고정시켜 놓는 효과
  });

  $(".promise_item").each(function (_, item) {
    ScrollTrigger.create({
      trigger: item,
      start: "top 50%", // 뷰포트의 상단에서 아이템의 상단이 50% 정도 위치일 때 트리거가 활성화
      end: "bottom 70%", // 뷰포트의 하단에서 아이템의 하단이 70% 정도 위치일 때 트리거가 비활성화,
      // markers: true,

      onLeave: () => {
        $(this).removeClass("on");
        $(".promise_link_item").removeClass("on");
      },

      onLeaveBack: () => {
        $(this).removeClass("on");
      },

      onEnter: () => {
        $(this).addClass("on");
        // 현재 반복되는 .promise_item 요소의 인덱스를 가져오고,
        // 그 인덱스에 해당하는 .promise_link_item 요소를 선택하여 클래스 'on'을 추가.
        // 이것은 각 .promise_item이 스크롤 영역에 들어올 때
        // 해당하는 링크에 'on' 클래스를 추가하여 특별한 스타일이나 동작을 적용하는 용도로 사용.
        let idx = $(this).index();
        $(".promise_link_item").removeClass("on");
        $(".promise_link_item").eq(idx).addClass("on");
      },

      onEnterBack: () => {
        $(this).addClass("on");
        let idx = $(this).index();
        $(".promise_link_item").removeClass("on");
        $(".promise_link_item").eq(idx).addClass("on");
      },
    });
  });
}

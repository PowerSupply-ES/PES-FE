import React from "react";
import img0 from "assets/images/backImg.png";
import img0_0 from "assets/images/backImg_right.png";
import MovingImagesHook from "hooks/home/MovingImagesHook";


// 홈화면 첫번째 슬라이딩 이미지 애니메이션
const MovingImage = () => {

  const { animationFinished } = MovingImagesHook(); // 슬라이딩 HOOK
  const status = sessionStorage.getItem("status");

  return (
    <div className="content0">
      {/* 바탕이미지 */}
      <img src={img0} className="bg-img" alt="" />
      {/* 오른쪽이미지 */}
      <img
        src={img0_0}
        className="moving-img"
        alt="Moving graphic showing animation"
        style={{
          opacity: `${animationFinished ? 1 : 0}`,
          transition: "opacity 1s ease-in-out",
        }}
      />

      {/* 하단버튼 */}
      <div
        className="main_btn"
        style={{
          opacity: `${animationFinished ? 1 : 0}`,
          transition: "opacity 1s ease-in-out",
        }}
      >
        {/* status 값이 있으면 btn1만 렌더링, 없으면 btn1과 btn2 모두 렌더링 */}
        {status ? (
          <>
            <a href="/list" className="btn1">바로가기</a>
            <a href="/menual" className="btn3">소개보기</a>
          </>
        ) : (
          <>
            <a href="/list" className="btn1">바로가기</a>
            <a href="/signin" className="btn2">로그인</a>
          </>
        )}
      </div>
    </div>
  );
};

export default MovingImage;

import React from "react";
import {img_backImage, img_backImage_right} from "assets/images";
import useMovingImages from "hooks/home/useMovingImages";
import { useSelector } from "react-redux";
import { RootState } from "stores/store"; // RootState 임포트

// 홈화면 첫번째 슬라이딩 이미지 애니메이션
const MovingImage: React.FC = () => {
  const { animationFinished } = useMovingImages(); // 슬라이딩 HOOK
  const { status } = useSelector((state: RootState) => state.sign); // redux에서 가져오기

  return (
    <div className="content0">
      {/* 바탕이미지 */}
      <img src={img_backImage} className="bg-img" alt="" />
      {/* 오른쪽이미지 */}
      <img
        src={img_backImage_right}
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
            <a href="/list" className="btn1">
              바로가기
            </a>
            {/* TODO : 소개페이지 추가하기 */}
            {/* <a href="/menual" className="btn3">
              소개보기
            </a> */}
          </>
        ) : (
          <>
            <a href="/list" className="btn1">
              바로가기
            </a>
            <a href="/signin" className="btn2">
              로그인
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default MovingImage;

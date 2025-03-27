import React from "react";
import {img_main_2, img_main_3, img_main_4} from "assets/images";
import useScrollImages from "hooks/home/useScrollImages";

// 스크롤에 따른 홈화면 애니메이션 효과
const ScrollImage: React.FC = () => {
  const { opacity2, opacity3, opacity4 } = useScrollImages();

  return (
    <div className="scroll_container">
      <div className="content2">
        <img
          src={img_main_2}
          alt="introduce Image1"
          className="scroll-img"
          style={{ opacity: opacity2, transition: "opacity 2s ease" }}
        />
      </div>
      <div className="content3">
        <img
          src={img_main_3}
          alt="introduce Image2"
          className="scroll-img"
          style={{ opacity: opacity3, transition: "opacity 3s ease" }}
        />
      </div>
      <div className="content4">
        <img
          src={img_main_4}
          alt="introduce Image3"
          className="scroll-img"
          style={{ opacity: opacity4, transition: "opacity 4s ease" }}
        />
      </div>
    </div>
  );
};

export default ScrollImage;

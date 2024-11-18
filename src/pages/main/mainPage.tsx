import React from "react";
import {MovingImage, ScrollImage} from "components/main";
import "styles/css/App.css";
import "styles/css/mainAnimation.css";
import { useSelector } from "react-redux";
import { UserState } from "model/userType";

const MainPage: React.FC = () => {
  const { status } = useSelector(
    (state: UserState) => state.user
  );
  console.log(status);
  return (
    <div className="mainPage">
      <div className="content">
        {/* 상단 이미지 애니메이션*/}
        <MovingImage />

        {/* 하단 이미지 스크롤 애니메이션*/}
        <ScrollImage />
      </div>
    </div>
  );
}

export default MainPage;

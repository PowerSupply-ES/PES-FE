import MovingImage from "components/main/MovingImage";
import ScrollImage from "components/main/ScrollImage";
import "styles/css/App.css";
import "styles/css/mainAnimation.css";

function Main() {
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

export default Main;

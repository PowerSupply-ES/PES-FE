import MyFeedList from "components/mypage/MyFeedList";
import MyInfo from "components/mypage/MyInfo";
import MyProbList from "components/mypage/MyProbList";
import "styles/css/App.css";
import "styles/css/mypage.css";

const MyPage = () => {
  return (
    <div className="content_mypage">
      <div className="mypage_content">
        {/* 왼쪽 내 정보 */}
        <MyInfo />

        <div className="right">
          {/* 내가 푼 문제 */}
          <MyProbList />

          {/* 내 피드백 */}
          <MyFeedList />
        </div>
      </div>
    </div>
  );
};

export default MyPage;

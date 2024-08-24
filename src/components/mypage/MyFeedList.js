import MyFeed from "./MyFeed";
import useMypage from "hooks/mypage/useMypage";

// 내 피드백 list
const MyFeedList = () => {
  const { myFeedback } = useMypage();

  return (
    // TODO : 신입생,재학생에 따라 feedback 띄워주기
    <div className="bottom">
      <div className="feed_top">
        <div className="mypage_btn">my feedback</div>
        <div className="feedNum">{myFeedback.length}개</div>
      </div>

      <div className="myFeedback">
        <MyFeed myFeedback={myFeedback}></MyFeed>
      </div>
    </div>
  );
};

export default MyFeedList;

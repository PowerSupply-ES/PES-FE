import React from 'react'
import MyFeed from "./MyFeed";
import { MyFeedProps } from 'model/userType';

// 사용자 작성 피드백 목록 컴포넌트
const MemberFeed: React.FC<MyFeedProps> = ({myFeedback, navigate}) => {
  return (
    <div className="bottom">
      <div className="feed_top">
        <div className="mypage_btn">my feedback</div>
        <div className="feedNum">{myFeedback.length}개</div>
      </div>

      <div className="myFeedback">
        <MyFeed myFeedback={myFeedback} navigate={navigate}></MyFeed>
      </div>
    </div>
  )
}

export default MemberFeed

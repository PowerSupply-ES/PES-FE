// 마이페이지
import React from "react";
import "styles/css/App.css";
import "styles/css/mypage.css";
import {MyFeedList, MyInfo, MyProbList} from "components/mypage";
import { useNavigate } from "react-router-dom";
import useMypage from "hooks/mypage/useMypage";

// MyPage 컴포넌트 Props 타입
interface MyPageProps {}

const MyPage:React.FC<MyPageProps> = () => {
  const navigate = useNavigate();
  const memberStatus = sessionStorage.getItem('memberStatus');
  console.log('memberStatus = ', memberStatus);

  // useMypage HOOK 호출
  const { memberData, myProb, myFeedback } = useMypage();

  if (!memberData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content_mypage">
      <div className="mypage_content">
        {/* 왼쪽 내 정보 */}
        <div className="left">
          <MyInfo memberData={memberData}/>
          
          {/* 관리자 등급이면 버튼표시 */}
          {memberStatus==="관리자" ? (
            <button className="btn_goto_manage" onClick={() => navigate('/manageUser')}>관리자모드</button>
            ) : (
            <></>
            )
          }
        </div>

        <div className="right">
          {/* 내가 푼 문제 */}
          <MyProbList myProb={myProb}/>

          {/* 내 피드백 */}
          <MyFeedList myFeedback={myFeedback}/>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

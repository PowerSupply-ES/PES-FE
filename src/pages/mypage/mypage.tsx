import React from "react";
import "styles/css/App.css";
import "styles/css/mypage.css";
import {MyFeedList, MyInfo, MyProbList} from "components/mypage";
import { useNavigate } from "react-router-dom";

// MyPage 컴포넌트 Props 타입
interface MyPageProps {}

const MyPage:React.FC<MyPageProps> = () => {
  const navigate = useNavigate();
  const memberStatus = sessionStorage.getItem('memberStatus');
  console.log('memberStatus = ', memberStatus);

  return (
    <div className="content_mypage">
      <div className="mypage_content">
        {/* 왼쪽 내 정보 */}
        <div className="left">
          <MyInfo />
          
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
          <MyProbList />

          {/* 내 피드백 */}
          <MyFeedList />
        </div>
      </div>
    </div>
  );
};

export default MyPage;

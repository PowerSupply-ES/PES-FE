// 회원상세페이지
// TODO : 관리자모드에서 수정할 예정
import React from "react";
import "styles/css/manage.css";
import "styles/css/mypage.css";
import useUserDetail from "hooks/manage/useUserDetail";
import MemberInfo from "components/mypage/MemberInfo";
import MemberProb from "components/mypage/MemberProb";
import { useNavigate } from "react-router-dom";
import MemberFeed from "components/mypage/MemberFeed";


const UserDetail: React.FC = () => {
  const { userData } = useUserDetail();
  const navigate = useNavigate;

  return (
    // TODO: 템플릿 적용 
    <div className="content_container">
      {/* 본문 */}
      <div className="manageuser_container">

        {/* 유저 정보 */}
        <div className="userlist_wrapper">
          {/* <div className="list_container"> */}

          {!userData ? (
            <div>Loading...</div>
          ) : (
            <div className="mypage_content">

              {/* 유저 정보 컴포넌트 */}
              <div className="userinfo_container">
                <MemberInfo
                  memberName={userData.memberName}
                  memberId={userData.memberId}
                  memberEmail={userData.memberEmail}
                  memberGen={userData.memberGen}
                  memberStatus={userData.memberStatus}
                  memberMajor={userData.memberMajor}
                  memberPhone={userData.memberPhone}
                />
                <div className="manage_btn_container">
                  <button className="btn_editmem">회원 수정</button>
                  <button className="btn_deletemem">회원 삭제</button>
                </div>
              </div>


              {/* 우측 컴포넌트 */}
              <div className="right">

                {/* 내가 푼 문제 */}
                <MemberProb myProb={userData.mySolveResponse} navigate={navigate}/>

                {/* 내 피드백 */}
                <MemberFeed myFeedback={userData.myFeedbackResponse} navigate={navigate}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetail;

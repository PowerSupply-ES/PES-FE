// 회원상세페이지
import React from "react";
import "styles/css/manage.css";
import useUserDetail from "hooks/manage/useUserDetail";
import MemberInfo from "components/mypage/MemberInfo";
import MemberProb from "components/mypage/MemberProb";
import { useNavigate } from "react-router-dom";
import MemberFeed from "components/mypage/MemberFeed";
import deleteMem from "apis/manage/deleteMem";
import fetchMem from "apis/manage/fetchMem";


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

              {/* 좌측 컴포넌트 - 유저 정보 */}
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
                  {/* TODO : 추후 필요시 추가 */}
                  {/* <button className="btn_editmem">회원 수정</button> */}
                  <button className="levelup_btn" onClick={() => fetchMem(navigate)} >등업</button>
                  <button className="btn_deletemem" onClick={() => deleteMem(navigate)}>회원 삭제</button>
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

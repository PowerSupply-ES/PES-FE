// 관리자_회원목록 페이지
import "styles/css/manageUser.css";
import { UserList } from "components/manage";
import useUserList from "hooks/manage/useUserList";
import React from "react";

const UserListPage: React.FC = () => {
  // 사용자 리스트 get HOOK
  const memberData = useUserList();

  return (
    <>
      <div className="content_container">
        {/* 본문 */}
        <div className="manageuser_container">

          {/* 우측 유저 목록 */}
          <div className="userlist_wrapper">
            <div className="list_container">
              {/* 제목 */}
              {/* TODO : 이것도 UserList컴포넌트로 제작하기 */}
              <div className="title_wrapper">
                <div className="title_state">상태</div>
                <div className="title_name">이름</div>
                <div className="title_stunum">학번</div>
                <div className="title_studep">학과</div>
                <div className="title_none"> </div>
              </div>

              {/* 회원목록 */}
              <UserList memberData={memberData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserListPage;

import "styles/css/manage.css";
import SideTab from "components/manage/SideTab";
import UserList from "components/manage/UserList";
import useUserList from "hooks/manage/useUserList";

function ManageUser() {
  // 사용자 리스트 get HOOK
  const memberData = useUserList();

  return (
    <div className="content_container">
      {/* 본문 */}
      <div className="manageuser_container">
        {/* 좌측 메뉴탭 */}
        <SideTab></SideTab>

        {/* 우측 유저 목록 */}
        <div className="userlist_wrapper">
          <div className="list_container">
            {/* 제목 */}
            {/* 이것도 UserList컴포넌트로 제작하기 */}
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
  );
}

export default ManageUser;

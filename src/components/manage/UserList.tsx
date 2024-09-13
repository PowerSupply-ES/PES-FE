import React from "react";
import { useNavigate } from "react-router-dom";
import "styles/css/manage.css";
import { UserListProps } from "model/userType";
// 회원목록 컴포넌트
const UserList: React.FC<UserListProps> = ({ memberData }) => {
  const navigate = useNavigate();

  // 페이지 이동
  const gotoDetail = (memberId: string) => {
    sessionStorage.setItem("memberId", memberId);
    navigate(`/manageUser/${memberId}`);
  };

  return (
    <>
      {memberData.map((mem) => (
        <ul className="list_wrapper" key={mem.memberId}>
          {/* memberStatus에 따라 색상부여 */}
          <li
            className={
              mem.memberStatus === "신입생"
                ? "title_state_new"
                : mem.memberStatus === "재학생"
                ? "title_state_old"
                : mem.memberStatus === "관리자"
                ? "title_state_manage"
                : ""
            }
          >
            {mem.memberStatus}
          </li>
          <li className="title_name">{mem.memberName}</li>
          <li className="title_stunum">{mem.memberId}</li>
          <li className="title_studep">{mem.memberMajor}</li>
          <li className="title_none">
            <button
              className="info_btn"
              onClick={() => gotoDetail(mem.memberId)}
            >
              정보
            </button>
          </li>
        </ul>
      ))}
    </>
  );
};

export default UserList;

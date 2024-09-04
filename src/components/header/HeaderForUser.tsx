import MenuBar from "components/header/MenuBar";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import postLogout from "apis/common/postLogout";
import getUserInfo from "apis/navbar/getUserInfo";
import { UserInfo } from "model/Store";

// 로그인o 경우 넷바
const HeaderForUser: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // user 정보 관리
  const [memberData, setMemberData] = useState<UserInfo>({
    memberName: "",
    memberScore: 0,
    memberStatus: "",
    memberGen: 0,
    hasNewNotices: false,
  });

  // 상단바 드롭다운 클릭
  const toggleDropdown = () => {
    setIsDropdownOpen((state) => !state);
  };

  // 넷바 사용자 정보 요청
  useEffect(() => {
    getUserInfo({ navigate, setMemberData });
  }, [navigate]);

  // 로그아웃 호출 함수
  const handleLogoutClick = () => {
    console.log("로그아웃");
    postLogout(navigate);
  };

  return (
    //토글버튼 클릭 시
    <div className="container">
      <div className="btns">
        {/* <div className='userLevel'>level</div> */}
        <button className="userId" onClick={toggleDropdown}>
          {memberData.memberName}님
          {isDropdownOpen && (
            <div className="dropdown-content">
              <FaCircleUser
                size={60}
                style={{ color: "lightgray" }}
              ></FaCircleUser>

              <div className="memberName">{memberData.memberName}님</div>

              <div className="navbarInfo">
                <div className="memberStatus">{memberData.memberStatus}</div>
                <div className="memberGen">{memberData.memberGen}기</div>
                <div className="memberScore">
                  현재<p>{memberData.memberScore}</p>점
                </div>
              </div>
              <div className="navbar_bottom">
                <a className="btn_mypage" href="/mypage">
                  마이페이지
                </a>
                {/* TODO : button으로 수정 */}
                <a onClick={handleLogoutClick} className="btn_top_logout">
                  로그아웃
                </a>
              </div>
            </div>
          )}
        </button>
      </div>

      <div className="navbar">
        <p className="logo" onClick={() => navigate("/")}>
          PES
        </p>
        <MenuBar />

        {/* TODO : 새로운 공지사항 있을때 아이콘 표시 */}
        {/* {memberData.hasNewNotices ? 
        (<button className='noticeAlertBtn' onClick={()=>navigate('/notice')}>N</button>) 
        : (<></>)
        } */}
      </div>
    </div>
  );
}

export default HeaderForUser;

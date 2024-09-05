import React from "react";
import { useNavigate } from "react-router-dom";
import "styles/css/manage.css";
import postLogout from "apis/common/postLogout";

const SideTab: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="tab_wrapper">
      <div className="tab_btn_wrapper">
        <button>회원 관리</button>
        <button>문제 관리</button>
        <button>피드백 관리</button>
      </div>
      {/* TODO : href 부분 중복확인 요함 */}
      <a className="btn_mng_logout" onClick={() => postLogout(navigate)} href="/">
        로그아웃
      </a>
    </div>
  );
};

export default SideTab;

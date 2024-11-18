import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderForAny, HeaderForUser } from "components/header";
import { useSelector } from "react-redux";
import { UserState } from "model/userType";
import Footer from "components/footer/Footer";
import "styles/css/topDropdown.css";
import "styles/css/footer.css";
import "styles/css/navbar.css";

// Header props 타입 정의
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => { // sessionStorage에서 redux 사용으로 변경
  const { status } = useSelector(
    (state: UserState) => state.user
  );

  return (
    <div>
      {/* 로그인이 완료되었는지에 따라 다른 Header를 렌더링 */}
      {status ? <HeaderForUser /> : <HeaderForAny />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;

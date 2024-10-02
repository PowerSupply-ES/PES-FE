import React from "react";
import { Outlet } from "react-router-dom";
import {HeaderForAny, HeaderForUser} from "components/header";
import Footer from "components/footer/Footer";
import "styles/css/topDropdown.css";
import "styles/css/footer.css";
import "styles/css/navbar.css";

// Header props 타입 정의
interface HeaderProps {};

const Header: React.FC<HeaderProps> = () => {
  const status = sessionStorage.getItem("status");

  return (
    <div>
      {/* 로그인이 완료되었는지에 따라 다른 Header를 렌더링 */}
      {status ? <HeaderForUser /> : <HeaderForAny />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Header;

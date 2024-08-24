import React from "react";
import "styles/css/topDropdown.css";
import "styles/css/navbar.css";
import "styles/css/footer.css";
import { Outlet } from "react-router-dom";
import HeaderForAny from "components/header/HeaderForAny";
import HeaderForUser from "components/header/HeaderForUser";
import Footer from "components/footer/Footer";

function Header() {
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

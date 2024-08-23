import React from "react";
import "styles/css/topDropdown.css";
import "styles/css/navbar.css";
import "styles/css/footer.css";
import { Outlet} from "react-router-dom";
import Footer from "layouts/footer/Footer";
import HeaderForAny from "components/header/HeaderForAny";
import HeaderForUser from "components/header/HeaderForUser";

function Header() {
  const status = sessionStorage.getItem("status");

  return (
    <div>
      {/* 로그인이 완료되었는지에 따라 다른 Header를 렌더링 */}
      {status ? <HeaderForUser/> : <HeaderForAny />}
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default Header;
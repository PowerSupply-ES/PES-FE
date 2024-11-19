import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderForAny, HeaderForUser } from "components/header";
import { useSelector } from "react-redux";
import { RootState } from "stores/store"; // RootState 임포트
import Footer from "components/footer/Footer";
import "styles/css/topDropdown.css";
import "styles/css/footer.css";
import "styles/css/navbar.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  // useSelector에서 RootState를 사용하여 sign 상태의 status를 가져옴
  const { status } = useSelector((state: RootState) => state.sign);

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

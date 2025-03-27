import React from "react";
import TemplateFrame from "./TemplateFrame";
import { Outlet } from "react-router-dom";

// ManageMenu props 타입 정의
interface ManageMenuProps {};

// 관리자모드 사이드바 공통컴포넌트 
const ManageMenu: React.FC<ManageMenuProps> = () => {
  return (
    // MUI 템플릿 적용
    <TemplateFrame>
      <Outlet />
    </TemplateFrame>
  );
};

export default ManageMenu;

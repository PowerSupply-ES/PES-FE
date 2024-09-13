// 관리자 이외 접근 보호용 컴포넌트
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const isAdmin = sessionStorage.getItem('memberStatus') === '관리자';
  const navigate = useNavigate();

  useEffect(() => {
    // 관리자가 아닐 경우 이전 페이지로 이동
    if (!isAdmin) {
      alert("권한이 없습니다!");
      navigate(-1);
    }
  }, [isAdmin, navigate]);

  // 관리자인 경우 children 컴포넌트 그대로 렌더링
  return isAdmin ? children : null;
};

export default AdminRoute;

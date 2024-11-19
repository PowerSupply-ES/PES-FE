// 관리자 이외 접근 보호용 컴포넌트
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { memberStatus } = useSelector((state: RootState) => state.user); // redux에서 가져오기

  const isAdmin = memberStatus === '관리자';
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

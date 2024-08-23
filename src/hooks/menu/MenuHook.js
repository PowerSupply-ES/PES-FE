import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// 메뉴바 페이지 이동 HOOK
const MenuHook = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 현재 경로에 따라 초기 탭 인덱스 설정
  const getInitialIndex = () => {
    if (location.pathname === '/list') return 0;
    if (location.pathname === '/notice') return 1;
    return null; // 홈이나 기타 경로인 경우 탭이 선택되지 않도록
  };

  const [index, setIndex] = useState(getInitialIndex());

  // 탭 이동
  const toggleTab = (value) => {
    setIndex(value);
    if (value === 0) {
      navigate('/list');
    } else if (value === 1) {
      navigate('/notice');
    }
  };

  useEffect(() => {
    // 경로가 '/'일 때 아무 탭도 선택되지 않도록 설정
    if (location.pathname === '/' && index !== null) {
      setIndex(null);
    } else if (location.pathname === '/list' && index !== 0) {
      setIndex(0);
    } else if (location.pathname === '/notice' && index !== 1) {
      setIndex(1);
    }
  }, [location.pathname, index]);
    
  return { index, toggleTab };
}

export default MenuHook;
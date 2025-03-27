import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// 메뉴바 페이지 이동 HOOK
const useMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [index, setIndex] = useState<number | false>(false); // 탭 value값

  // 탭 이동
  const toggleTab = (value: number) => {
    setIndex(value);

    if (value === 1) {
      navigate("/list");
    } else if (value === 2) {
      navigate("/notice");
    }
  };

  // 탭 이동 훅
  useEffect(() => {
    // 경로가 '/'일 때 아무 탭도 선택되지 않도록 설정
    if (location.pathname === "/") {
      setIndex(false);
    } else if (location.pathname === "/list") {
      setIndex(1);
    } else if (location.pathname === "/notice") {
      setIndex(2);
    } else {
      setIndex(false); // 기타 경로일 경우 기본값으로 설정
    }
  }, [location.pathname, index]);

  return { index, toggleTab };
};

export default useMenu;

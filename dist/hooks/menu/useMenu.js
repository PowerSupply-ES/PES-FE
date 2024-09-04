import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// 메뉴바 페이지 이동 HOOK
const useMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // 현재 경로에 따라 초기 탭 인덱스 설정
    // const getInitialIndex = (): number | null => {
    //   if (location.pathname === "/list")
    //     return 1;
    //   else if (location.pathname === "/notice") 
    //     return 2;
    //   else
    //     return null; // 홈이나 기타 경로인 경우 탭이 선택되지 않도록
    // };
    // 탭 구분위한 index state
    const [index, setIndex] = useState(0);
    // 탭 이동
    const toggleTab = (value) => {
        setIndex(value);
        console.log("value = ", value);
        if (value === 1) {
            navigate("/list");
        }
        else if (value === 2) {
            navigate("/notice");
        }
    };
    useEffect(() => {
        // 경로가 '/'일 때 아무 탭도 선택되지 않도록 설정
        if (location.pathname === "/") {
            setIndex(0);
        }
        else if (location.pathname === "/list") {
            setIndex(1);
        }
        else if (location.pathname === "/notice") {
            setIndex(2);
        }
        else {
            setIndex(0); // 기타 경로일 경우 기본값으로 설정
        }
    }, [location.pathname, index]);
    return { index, toggleTab };
};
export default useMenu;

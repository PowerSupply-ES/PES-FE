// 로그아웃 함수

import { useNavigate } from "react-router-dom";

const Logout = () =>{
    const navigate = useNavigate();

    // 과거의 날짜로 설정하여 쿠키를 즉시 만료
    document.cookie = "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=pes23.com";  
    // 로컬 스토리지 클리어
    sessionStorage.clear();
    localStorage.clear();
    alert('로그아웃되었습니다.');
    navigate('/');
}

export default Logout;
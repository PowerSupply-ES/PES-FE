import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MenuBar from "components/header/MenuBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import postLogout from "apis/common/postLogout";
import getUserInfo from "apis/navbar/getUserInfo";
// 로그인o 경우 넷바
const HeaderForUser = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // user 정보 관리
    const [memberData, setMemberData] = useState({
        memberName: "",
        memberScore: 0,
        memberStatus: "",
        memberGen: 0,
        hasNewNotices: false,
    });
    // 상단바 드롭다운 클릭
    const toggleDropdown = () => {
        setIsDropdownOpen((state) => !state);
    };
    // 넷바 사용자 정보 요청
    useEffect(() => {
        getUserInfo({ navigate, setMemberData });
    }, [navigate]);
    // 로그아웃 호출 함수
    const handleLogoutClick = () => {
        console.log("로그아웃");
        postLogout(navigate);
    };
    return (
    //토글버튼 클릭 시
    _jsxs("div", { className: "container", children: [_jsx("div", { className: "btns", children: _jsxs("button", { className: "userId", onClick: toggleDropdown, children: [memberData.memberName, "\uB2D8", isDropdownOpen && (_jsxs("div", { className: "dropdown-content", children: [_jsx(FaCircleUser, { size: 60, style: { color: "lightgray" } }), _jsxs("div", { className: "memberName", children: [memberData.memberName, "\uB2D8"] }), _jsxs("div", { className: "navbarInfo", children: [_jsx("div", { className: "memberStatus", children: memberData.memberStatus }), _jsxs("div", { className: "memberGen", children: [memberData.memberGen, "\uAE30"] }), _jsxs("div", { className: "memberScore", children: ["\uD604\uC7AC", _jsx("p", { children: memberData.memberScore }), "\uC810"] })] }), _jsxs("div", { className: "navbar_bottom", children: [_jsx("a", { className: "btn_mypage", href: "/mypage", children: "\uB9C8\uC774\uD398\uC774\uC9C0" }), _jsx("a", { onClick: handleLogoutClick, className: "btn_top_logout", children: "\uB85C\uADF8\uC544\uC6C3" })] })] }))] }) }), _jsxs("div", { className: "navbar", children: [_jsx("p", { className: "logo", onClick: () => navigate("/"), children: "PES" }), _jsx(MenuBar, {})] })] }));
};
export default HeaderForUser;

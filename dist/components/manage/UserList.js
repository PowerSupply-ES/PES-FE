import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import "styles/css/manage.css";
// 회원목록 컴포넌트
const UserList = ({ memberData }) => {
    const navigate = useNavigate();
    // 페이지 이동
    const gotoDetail = (memberId) => {
        sessionStorage.setItem("memberId", memberId);
        navigate(`/manageUser/${memberId}`);
    };
    return (_jsx(_Fragment, { children: memberData.map((mem) => (_jsxs("ul", { className: "list_wrapper", children: [_jsx("li", { className: mem.memberStatus === "신입생"
                        ? "title_state_new"
                        : mem.memberStatus === "재학생"
                            ? "title_state_old"
                            : mem.memberStatus === "관리자"
                                ? "title_state_manage"
                                : "", children: mem.memberStatus }), _jsx("li", { className: "title_name", children: mem.memberName }), _jsx("li", { className: "title_stunum", children: mem.memberId }), _jsx("li", { className: "title_studep", children: mem.memberMajor }), _jsxs("li", { className: "title_none", children: [_jsx("button", { className: "levelup_btn", children: "\uB4F1\uC5C5" }), _jsx("button", { className: "info_btn", onClick: () => gotoDetail(mem.memberId), children: "\uC815\uBCF4" })] })] }, mem.memberId))) }));
};
export default UserList;

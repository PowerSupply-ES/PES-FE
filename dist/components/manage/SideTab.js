import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import postLogout from "apis/common/postLogout";
import "styles/css/manage.css";
const SideTab = () => {
    return (_jsxs("div", { className: "tab_wrapper", children: [_jsxs("div", { className: "tab_btn_wrapper", children: [_jsx("button", { children: "\uD68C\uC6D0 \uAD00\uB9AC" }), _jsx("button", { children: "\uBB38\uC81C \uAD00\uB9AC" }), _jsx("button", { children: "\uD53C\uB4DC\uBC31 \uAD00\uB9AC" })] }), _jsx("a", { className: "btn_mng_logout", onClick: postLogout, href: "/", children: "\uB85C\uADF8\uC544\uC6C3" })] }));
};
export default SideTab;

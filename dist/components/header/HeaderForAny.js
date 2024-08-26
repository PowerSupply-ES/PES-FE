import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MenuBar from "components/header/MenuBar";
import { useNavigate } from "react-router-dom";
// 로그인x 경우 넷바
const HeaderForAny = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "container", children: [_jsx("a", { className: "logout", href: "/signin", children: "\uB85C\uADF8\uC778" }), _jsxs("div", { className: "navbar", children: [_jsx("p", { className: "logo", onClick: () => navigate("/"), children: "PES" }), _jsx(MenuBar, {})] })] }));
};
export default HeaderForAny;

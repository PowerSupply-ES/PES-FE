import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "styles/css/topDropdown.css";
import "styles/css/navbar.css";
import "styles/css/footer.css";
import { Outlet } from "react-router-dom";
import HeaderForAny from "components/header/HeaderForAny";
import HeaderForUser from "components/header/HeaderForUser";
import Footer from "components/footer/Footer";
;
const Header = () => {
    const status = sessionStorage.getItem("status");
    return (_jsxs("div", { children: [status ? _jsx(HeaderForUser, {}) : _jsx(HeaderForAny, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }));
};
export default Header;

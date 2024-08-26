import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import postLogout from "apis/common/postLogout";
const Footer = () => {
    const status = sessionStorage.getItem("status");
    return (_jsxs("div", { className: "footer", children: [_jsxs("div", { className: "footer_left", children: [_jsx("p", { className: "logo", children: "PES" }), _jsxs("div", { className: "info", children: [_jsxs("div", { className: "phone", children: [_jsx(IoIosMail, { size: 24 }), " ", _jsx("p", { children: "123qpq@naver.com" })] }), _jsxs("div", { className: "address", children: [_jsx(FaMapMarkerAlt, { size: 20 }), _jsx("p", { children: "\uACBD\uBD81 \uACBD\uC0B0\uC2DC \uB300\uD559\uB85C 280 \uC0DD\uC0B0\uAE30\uC220\uC5F0\uAD6C\uC6D0 G15 213\uD638" })] })] })] }), _jsxs("div", { className: "footer_right", children: [_jsx("p", { className: "about", children: "About The Club" }), _jsx("p", { className: "info1", children: "\uC601\uB0A8\uB300\uD559\uAD50 \uB85C\uBD07\uACF5\uD559\uACFC \uB3D9\uC544\uB9AC PowerSupply\uC758" }), _jsx("p", { className: "info2", children: "\uAD50\uC721\uC2DC\uC2A4\uD15C \uAC1C\uBC1C\uD300 PES" }), _jsxs("div", { className: "sns", children: [_jsx("a", { href: "https://www.instagram.com/team.pes23/", target: "_blank", rel: "noopener noreferrer", children: _jsx(BiLogoInstagramAlt, { size: 36 }) }), _jsx("a", { href: "https://github.com/PowerSupply-ES", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaGithub, { size: 30 }) })] }), status ? (_jsx("div", { onClick: postLogout, className: "footer_logout", children: "\uB85C\uADF8\uC544\uC6C3" })) : (_jsx(_Fragment, {}))] })] }));
};
export default Footer;

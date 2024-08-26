import { jsx as _jsx } from "react/jsx-runtime";
import "styles/css/intro.css";
import LoginTemp from "components/sign/LoginTemp";
const Signin = () => {
    return (_jsx("div", { className: "sign-wrapper", children: _jsx(LoginTemp, {}) }));
};
export default Signin;

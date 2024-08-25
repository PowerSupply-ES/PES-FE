import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MovingImage from "components/main/MovingImage";
import ScrollImage from "components/main/ScrollImage";
import "styles/css/App.css";
import "styles/css/mainAnimation.css";
function Main() {
    return (_jsx("div", { className: "mainPage", children: _jsxs("div", { className: "content", children: [_jsx(MovingImage, {}), _jsx(ScrollImage, {})] }) }));
}
export default Main;

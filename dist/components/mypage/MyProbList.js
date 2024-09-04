import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useMypage from "hooks/mypage/useMypage";
import MyProb from "./MyProb";
import { useNavigate } from "react-router-dom";
;
// 내가 푼 문제 list
const MyProbList = () => {
    const navigate = useNavigate();
    const { myProb } = useMypage();
    return (_jsxs("div", { className: "top", children: [_jsxs("div", { className: "prob_top", children: [_jsx("div", { className: "mypage_btn", children: "\uB0B4\uAC00 \uD47C \uBB38\uC81C" }), _jsxs("div", { className: "probNum", children: [myProb.length, "\uAC1C"] })] }), _jsx("div", { className: "myProblem", children: _jsx(MyProb, { myProb: myProb, navigate: navigate }) })] }));
};
export default MyProbList;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { StyledListItem } from "styles/styledComponent/ListItem-styled";
import Button from "@mui/joy/Button";
const ProblemItem = (props) => {
    const navigate = useNavigate();
    const memberStatus = sessionStorage.getItem("memberStatus");
    const goToProb = (answerId) => {
        if (answerId) {
            sessionStorage.setItem("problemId", props.pid);
            navigate(`/question/${props.answerId}`);
        }
        else {
            navigate(`/problem/${props.pid}`);
        }
    };
    //추가 by성임
    // status가 "재학생"일 때는 props.state 값을 "pass"로 설정,
    //그 외에는 props.state 값 그대로 사용
    const state = memberStatus === "재학생" || "관리자" ? "success" : props.state;
    return (_jsx(StyledListItem, { state: state, children: _jsxs("div", { className: "container", state: state, children: [_jsx("div", { className: "problem_id", state: state, onClick: () => {
                        goToProb(props.answerId);
                    }, children: props.pid }), _jsx("div", { className: "problem_title", onClick: () => {
                        goToProb(props.answerId);
                    }, children: props.ptitle }), _jsxs("div", { className: "grade", children: ["\uC810\uC218 ", props.grade] }), _jsx("button", { className: "button", state: state, onClick: () => navigate(`/solution/${props.pid}`), children: "\uD480\uC774\uBCF4\uAE30" })] }) }));
};
export default ProblemItem;

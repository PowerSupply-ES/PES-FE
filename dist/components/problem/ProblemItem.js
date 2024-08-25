import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { Container, ProblemId, ProblemTitle, Grade, Button, } from "styles/styledComponent/ProblemItem-styled";
const ProblemItem = (props) => {
    const navigate = useNavigate();
    return (_jsxs(Container, { state: props.state, children: [_jsx(ProblemId, { state: props.state, onClick: () => {
                    navigate(`/question/${props.pid}`);
                }, children: props.pid }), _jsx(ProblemTitle, { onClick: () => {
                    navigate(`/question/${props.pid}`);
                }, children: props.ptitle }), _jsxs(Grade, { children: ["\uC810\uC218 ", props.grade] }), _jsx(Button, { state: props.state, onClick: () => navigate(`/solution/${props.pid}`), children: props.state === "retry" ? "RE TRY" : "풀이보기" })] }));
};
export default ProblemItem;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
// 풀이list 컴포넌트
const SolvingList = ({ solveData }) => {
    const navigate = useNavigate();
    // 해당 풀이로 이동
    const gotoProblem = (answerId) => {
        console.log("answerId: ", answerId);
        navigate(`/question/${answerId}`);
    };
    return (_jsx("div", { className: "solving_list", children: solveData.map((it) => 
        // answerId가 "question"과 일치하지 않을 때에만 렌더링
        it.answerId !== "question" && (_jsxs("div", { className: "solving", children: [_jsxs("div", { className: "left", children: [_jsxs("div", { className: "userGen", children: [it.memberGen, _jsx("p", { children: "\uAE30 " })] }), _jsx("div", { className: "userName", children: it.memberName })] }), _jsxs("div", { className: "right", children: [_jsxs("div", { className: "process_num", children: [it.commentCount, "/2"] }), _jsx("div", { className: `${it.answerState === "success"
                                ? "btn_success"
                                : it.answerState === "fail"
                                    ? "btn_fail"
                                    : "btn_state"}`, children: it.answerState }), _jsx("button", { className: "btn_goto_challenge", onClick: () => gotoProblem(it.answerId), children: "\uD480\uC774\uBCF4\uAE30" })] })] }, it.answerId))) }));
};
export default SolvingList;

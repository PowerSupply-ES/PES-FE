import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// 내가 푼 문제 컴포넌트
const MyProb = ({ myProb, navigate }) => {
    const gotoProb = (problemId) => {
        console.log("problemId: ", problemId);
        navigate(`question/${problemId}`);
        // question/answerid
    };
    return (_jsx("div", { className: "problemList", children: myProb.length === 0 ? (_jsx("div", { className: "noProblems", children: "\uC544\uC9C1 \uD47C \uBB38\uC81C\uAC00 \uC5C6\uC5B4\uC694!" })) : (myProb.map((it) => (_jsxs("div", { className: "problems", children: [_jsx("p", { className: "problemId", children: it.problemId }), _jsx("p", { className: "problemTitle", onClick: () => gotoProb(it.answerId), children: it.problemTitle }), _jsxs("p", { className: "finalScore", children: [it.finalScore, "\uC810"] }), _jsx("p", { className: "dash", children: "/" }), _jsxs("p", { className: "problemScore", children: [it.problemScore, "\uC810"] }), _jsx("div", { className: `${it.answerState === "success"
                        ? "btn_success"
                        : it.answerState === "fail"
                            ? "btn_fail"
                            : "btn_state"}`, children: it.answerState === "question"
                        ? "질문대기"
                        : it.answerState === "comment"
                            ? "피드백대기"
                            : it.answerState })] }, it.answerId)))) }));
};
export default MyProb;

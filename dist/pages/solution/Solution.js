import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "styles/css/solution.css";
import SolvingList from "components/solution/SolvingList";
import useSoluProb from "hooks/solution/useSoluProb";
import useSoluList from "hooks/solution/useSoluList";
const Solution = () => {
    // TODO : split한 problemId와 solveData.problemId 구분하기
    let url = new URL(window.location.href);
    let problemId = (url.pathname.split("/")[2]);
    sessionStorage.setItem("problemId", problemId);
    // 인수 전달을 위한 problem 타입 가공
    const problemIdParsed = Number(problemId);
    // 문제 get API HOOk
    const problemData = useSoluProb(problemIdParsed);
    // 풀이 get API HOOk
    const solveData = useSoluList(problemIdParsed);
    // 조건부 렌더링
    if (!problemData || !solveData.length) {
        return _jsx("div", { children: "Loading..." });
    }
    return (_jsxs("div", { className: "solution_container", children: [_jsx("div", { className: "solution_bar", children: _jsxs("div", { className: "solution", children: [_jsxs("div", { className: "left", children: [_jsx("div", { className: "solution_num", children: problemData.problemId }), _jsx("div", { className: "solution_title", children: problemData.problemTitle })] }), _jsxs("div", { className: "prob_score", children: [problemData.problemScore, _jsx("p", { children: "\uC810" })] })] }) }), _jsx("div", { className: "pass_num" }), _jsx(SolvingList, { solveData: solveData })] }));
};
export default Solution;

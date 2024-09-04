import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import useProbPage from "hooks/problem/useProbPage";
import React, { useState } from "react";
import { StyledProblem } from "styles/styledComponent/Problem-styled";
import { renderNewlines } from "components/common/Common";
// 문제 헤더 컴포넌트
const ProbHeader = ({ state, navigate }) => {
    const problemId = parseInt(sessionStorage.getItem("problemId") || '', 10); // 10진수로 변환해서 저장
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // problem 제목, 내용 HOOK 호출
    const { title, problem } = useProbPage(problemId);
    // 문제보기 dropdown 상태관리 함수
    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };
    // title과 problem이 null일 경우 기본값 설정
    const titleText = title ? title.problemTitle : "제목 없음";
    const problemContent = problem ? problem.problemContent : "문제 내용 없음";
    const sampleInputs = problem ? problem.sampleInputs : [];
    const sampleOutputs = problem ? problem.sampleOutputs : [];
    return (_jsxs(StyledProblem, { className: "problem_header_section", state: state, children: [_jsx("div", { className: "problem_header", children: _jsxs("div", { className: "problem_group", children: [_jsxs("div", { className: "problem_id", children: ["\uBB38\uC81C", problemId] }), _jsx("div", { className: "header_title", children: titleText }), _jsx("div", { className: "header_answer_state", children: state === "success"
                                ? "성공"
                                : state === "fail"
                                    ? "실패"
                                    : "미완료" })] }) }), _jsxs("div", { className: "button_group", children: [_jsxs("button", { className: "button_problem", onClick: toggleDropdown, children: ["\uBB38\uC81C\uBCF4\uAE30", isDropdownOpen && (_jsxs("div", { className: "dropdown_content", children: [_jsx("div", { className: "content", style: { whiteSpace: "pre" }, children: renderNewlines(problemContent) }), _jsxs("div", { className: "sample_inputs", children: [_jsx("h3", { children: "Sample Inputs:" }), sampleInputs.map((input, index) => (_jsx(React.Fragment, { children: renderNewlines(input) }, index)))] }), _jsxs("div", { className: "sample_outputs", style: { whiteSpace: "pre" }, children: [_jsx("h3", { children: "Sample Outputs:" }), sampleOutputs.map((output, index) => (_jsx(React.Fragment, { children: renderNewlines(output) }, index)))] })] }))] }), (state === "success" || state === "fail") && (_jsx("button", { className: "button_solution", onClick: () => navigate(`/solution/${problemId}`), children: "\uB2E4\uB978 \uD480\uC774 \uBCF4\uAE30" }))] })] }));
};
export default ProbHeader;

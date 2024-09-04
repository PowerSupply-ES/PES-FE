import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useProbPage from "hooks/problem/useProbPage";
import React, { useEffect, useState } from "react";
import { StyledProblem } from "styles/styledComponent/Problem-styled";
import { renderNewlines } from "components/common/Common";
// 문제 헤더 컴포넌트
const ProbHeader = ({ state, navigate }) => {
    //const problemId: number = parseInt(sessionStorage.getItem("problemId") || '', 10); // 10진수로 변환해서 저장
    const [problemId, setProblemId] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // problem 제목, 내용 HOOK 호출 - null이나 undefined일때 -1전달
    const { title, problem } = useProbPage(problemId !== null && problemId !== void 0 ? problemId : -1);
    // 문제보기 dropdown 상태관리 함수
    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };
    // 문제 ID 로딩
    useEffect(() => {
        const id = parseInt(sessionStorage.getItem("problemId") || '', 10);
        // id가 NaN 아닌 경우
        if (!isNaN(id)) {
            setProblemId(id);
        }
        else {
            console.error("Invalid problem ID:", id);
        }
    }, []);
    // title과 problem이 null일 경우 기본값 설정 - TODO: 중복 수정하기
    const titleText = title ? title.problemTitle : "제목 없음";
    const problemContent = problem ? problem.problemContent : "문제 내용 없음";
    const sampleInputs = problem ? problem.sampleInputs : [];
    const sampleOutputs = problem ? problem.sampleOutputs : [];
    // problemId가 null이거나 -1인 경우 예외처리
    if (problemId === null || problemId === -1) {
        return (_jsx(StyledProblem, { className: "problem_header_section", state: state, children: _jsx("div", { className: "problem_header", children: _jsxs("div", { className: "problem_group", children: [_jsx("div", { className: "problem_id", children: "\uC54C\uC218\uC5C6\uC74C" }), _jsx("div", { className: "header_title", children: "\uC81C\uBAA9 \uC5C6\uC74C" }), _jsx("div", { className: "header_answer_state", children: "\uC54C\uC218\uC5C6\uC74C" })] }) }) }));
    }
    // 정상적인 경우
    return (_jsxs(StyledProblem, { className: "problem_header_section", state: state, children: [_jsx("div", { className: "problem_header", children: _jsxs("div", { className: "problem_group", children: [_jsxs("div", { className: "problem_id", children: ["\uBB38\uC81C", problemId !== null ? problemId : "정보 없음"] }), _jsx("div", { className: "header_title", children: titleText }), _jsx("div", { className: "header_answer_state", children: state === "success"
                                ? "성공"
                                : state === "fail"
                                    ? "실패"
                                    : "미완료" })] }) }), _jsxs("div", { className: "button_group", children: [_jsxs("button", { className: "button_problem", onClick: toggleDropdown, children: ["\uBB38\uC81C\uBCF4\uAE30", isDropdownOpen && (_jsxs("div", { className: "dropdown_content", children: [_jsx("div", { className: "content", style: { whiteSpace: "pre" }, children: renderNewlines(problemContent) }), _jsxs("div", { className: "sample_inputs", children: [_jsx("h3", { children: "Sample Inputs:" }), sampleInputs.map((input, index) => (_jsx(React.Fragment, { children: renderNewlines(input) }, index)))] }), _jsxs("div", { className: "sample_outputs", style: { whiteSpace: "pre" }, children: [_jsx("h3", { children: "Sample Outputs:" }), sampleOutputs.map((output, index) => (_jsx(React.Fragment, { children: renderNewlines(output) }, index)))] })] }))] }), (state === "success" || state === "fail") && (_jsx("button", { className: "button_solution", onClick: () => navigate(`/solution/${problemId}`), children: "\uB2E4\uB978 \uD480\uC774 \uBCF4\uAE30" }))] })] }));
};
export default ProbHeader;

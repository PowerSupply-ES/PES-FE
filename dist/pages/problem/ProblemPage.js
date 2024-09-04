import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { StyledProblem } from "styles/styledComponent/Problem-styled";
import CodeEditor from "components/problem/CodeEditor";
import useProbPage from "hooks/problem/useProbPage";
import { renderNewlines, renderStyledNewlines } from "components/common/Common";
const ProblemPage = () => {
    let url = new URL(window.location.href);
    let problemId = Number(url.pathname.split("/")[2]); // 문자열을 숫자로 변환
    // 관련 HOOK 호출
    const { title, problem, detail, isLogin, textHandler, submitCode } = useProbPage(problemId);
    // 문제 UI 렌더링 함수
    const renderProbUI = () => {
        return (_jsxs(StyledProblem, { state: "null", children: [_jsx("div", { className: "problem_header", children: _jsxs("div", { className: "problem_group", children: [_jsxs("div", { className: "problem_id", children: ["\uBB38\uC81C", problemId] }), _jsx("div", { className: "header_title", children: title === null || title === void 0 ? void 0 : title.problemTitle }), _jsx("div", { className: "header_answer_state", children: "\uBBF8\uC644\uB8CC" })] }) }), _jsxs("div", { className: "problem_section", children: [_jsxs("div", { className: "content_container", children: [_jsxs("div", { className: "top", style: { whiteSpace: "pre" }, children: [_jsx("p", { className: "underline", children: "\uBB38\uC81C" }), _jsx("div", { className: "prob_text", children: (problem === null || problem === void 0 ? void 0 : problem.problemContent) &&
                                                renderNewlines(problem.problemContent) })] }), _jsxs("div", { className: "bottom", children: [_jsxs("div", { className: "sample_inputs", style: { whiteSpace: "pre" }, children: [_jsx("p", { className: "underline", children: "Sample Inputs" }), _jsx("div", { className: "input_text", children: (problem === null || problem === void 0 ? void 0 : problem.sampleInputs) &&
                                                        problem.sampleInputs.map((input, index) => (_jsx(React.Fragment, { children: renderStyledNewlines(input) }, index))) })] }), _jsxs("div", { className: "sample_outputs", style: { whiteSpace: "pre" }, children: [_jsx("p", { className: "underline", children: "Sample Outputs" }), _jsx("div", { className: "output_text", children: (problem === null || problem === void 0 ? void 0 : problem.sampleOutputs) &&
                                                        problem.sampleOutputs.map((output, index) => (_jsx(React.Fragment, { children: renderStyledNewlines(output) }, index))) })] })] })] }), _jsx("div", { className: "code_section", children: isLogin ? (_jsxs(_Fragment, { children: [_jsx(CodeEditor, { code: "", onChange: textHandler, readOnly: false }), detail !== null && detail !== undefined && (_jsxs("div", { className: "detail_container", children: [_jsx("h3", { children: "\uD2C0\uB9B0 \uC774\uC720" }), _jsx("div", { className: "detail_content", children: detail })] }))] })) : (_jsx("textarea", { disabled: true, className: "code_input", placeholder: "\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD574\uC8FC\uC138\uC694." })) })] }), _jsx("button", { className: isLogin ? "submit_button" : "submit_button disabled", onClick: () => {
                        if (isLogin) {
                            if (window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?")) {
                                submitCode();
                            }
                        }
                    }, children: "\uC81C\uCD9C" })] }));
    };
    return (_jsx("div", { children: title && problem ? renderProbUI() : _jsx("div", { className: "loading", children: "Loading..." }) }));
};
export default ProblemPage;

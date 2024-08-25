import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import CodeEditor from "components/problem/CodeEditor";
import { renderNewlines } from "components/common/Common";
// 작성했던 코드 출력 컴포넌트
const ProbCode = ({ FstHandler, SecHandler, code, qnA, setCode }) => {
    return (_jsxs("div", { className: "code_question_container", children: [_jsx("div", { className: "code_container", children: _jsx(CodeEditor, { onChange: setCode, readOnly: true, code: code }) }), _jsx("div", { className: "question_container", children: !qnA.answerFst || !qnA.answerSec ? (
                // answerState: question (qnA만 있음, 답변해야 하는 상태)
                _jsxs(_Fragment, { children: [_jsxs("div", { className: "question_layout", children: [_jsxs("div", { className: "question_header", children: [_jsx("div", { className: "question_id", children: "\uC9C8\uBB38 1" }), _jsx("div", { className: "header_title", children: qnA.questionContentFst })] }), _jsx("textarea", { className: "answer_input", onChange: FstHandler })] }), _jsxs("div", { className: "question_layout", children: [_jsxs("div", { className: "question_header", children: [_jsx("div", { className: "question_id", children: "\uC9C8\uBB38 2" }), _jsx("div", { className: "header_title", children: qnA.questionContentSec })] }), _jsx("textarea", { className: "answer_input", onChange: SecHandler })] })] })) : (
                // answerState: comment (qnA O / qnA.answerFst, qnA.answerSec O / feedback 0개 or 1개)
                // answerState: success
                // answerState: fail
                _jsxs(_Fragment, { children: [_jsxs("div", { className: "question_header", children: [_jsx("div", { className: "question_id", children: "\uC9C8\uBB38 1" }), _jsx("div", { className: "header_title", children: qnA.questionContentFst })] }), _jsx("div", { className: "answer_input display", children: renderNewlines(qnA.answerFst) }), _jsxs("div", { className: "question_header", children: [_jsx("div", { className: "question_id", children: "\uC9C8\uBB38 2" }), _jsx("div", { className: "header_title", children: qnA.questionContentSec })] }), _jsx("div", { className: "answer_input display", children: renderNewlines(qnA.answerSec) })] })) })] }));
};
export default ProbCode;

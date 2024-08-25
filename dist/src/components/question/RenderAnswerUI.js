import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ProbHeader from "components/question/ProbHeader";
import ProbCode from "components/question/ProbCode";
import { StyledQuestion } from "styles/styledComponent/Question-styled";
// 답변(answer) 렌더링 컴포넌트
const RenderAnswerUI = ({ navigate, code, qnA, state, setCode, textFst, handleTextFstChange, postAnswer, }) => {
    const [textSec, setTextSec] = useState("");
    const handleTextSecChange = (e) => {
        setTextSec(e.target.value);
    };
    // 답변 제출 함수
    const submitAnswer = () => {
        if (!textFst.current || !textSec.current) {
            alert("내용을 입력해주세요!");
        }
        else {
            const isConfirmed = window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?");
            if (isConfirmed) {
                postAnswer(textFst.current, textSec.current);
            }
        }
    };
    return (_jsxs(StyledQuestion, { className: "problem_answer_section", children: [_jsx(ProbHeader, { code: code, navigate: navigate }), _jsx(ProbCode, { FstHandler: handleTextFstChange, SecHandler: handleTextSecChange, code: code, qnA: qnA, setCode: setCode }), state === "question" && (!qnA.answerFst || !qnA.answerSec) && (_jsx("div", { className: "btn_container", children: _jsx("button", { className: "button answer", onClick: submitAnswer, children: "\uB2F5\uBCC0\uD558\uAE30" }) }))] }));
};
export default RenderAnswerUI;

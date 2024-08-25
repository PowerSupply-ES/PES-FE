import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import useMemberStatus from "hooks/question/useMemberStatus";
import { useNavigate } from "react-router-dom";
import useQuestionHook from "hooks/question/useQuestionHook";
import RenderAnswerUI from "components/question/RenderAnswerUI";
import RenderFeed from "components/question/RenderFeed";
const QuestionPage = () => {
    const navigate = useNavigate();
    let url = new URL(window.location.href);
    let answerId = url.pathname.split("/")[2];
    const [textFst, setTextFst] = useState("");
    const handleTextFstChange = (e) => {
        setTextFst(e.target.value);
    };
    // 댓글 제출 결과 alert 함수
    const getAlert = (response) => {
        if (response === 400) {
            alert("이미 댓글을 달았습니다.");
        }
        else if (response === 403) {
            alert("접근할 수 있는 사용자가 아닙니다.");
        }
    };
    // question 관련 HOOK 호출
    const { code, qnA, state, feedbacks, passCount, postFeedback, postAnswer, setCode, } = useQuestionHook(answerId, getAlert);
    return (_jsx("div", { className: state === "success"
            ? "successPage"
            : state === "fail"
                ? "failPage"
                : "nonePage", children: _jsx("useMemberStatus", { children: (memberStatus) => {
                if (!memberStatus) {
                    return _jsx("div", { className: "loading", children: "Loading..." });
                }
                return (_jsxs("div", { children: [_jsx(RenderAnswerUI, { navigate: navigate, code: code, qnA: qnA, state: state, setCode: setCode, textFst: textFst, handleTextFstChange: handleTextFstChange, postAnswer: postAnswer }), _jsx(RenderFeed, { navigate: navigate, memberStatus: memberStatus, feedbacks: feedbacks, passCount: passCount, state: state, postFeedback: postFeedback, textFst: textFst, handleTextFstChange: handleTextFstChange })] }));
            } }) }));
};
export default QuestionPage;

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useQuestionHook from "hooks/question/useQuestionHook";
import RenderAnswerUI from "components/question/RenderAnswerUI";
import RenderFeed from "components/question/RenderFeed";
const QuestionPage = () => {
    const navigate = useNavigate();
    let url = new URL(window.location.href);
    let answerId = parseInt(url.pathname.split("/")[2]);
    // 첫번재 답변 관리 - useRef로 필요 시점에만 상태 관리
    const textFst = useRef(null);
    // 첫번재 답변 작성 핸들러
    const handleTextFstChange = (e) => {
        if (textFst.current) {
            textFst.current.value = e.target.value;
        }
    };
    // 댓글 제출 결과 alert 함수
    const getAlert = (responseStatus) => {
        if (responseStatus === 400) {
            alert("이미 댓글을 달았습니다.");
        }
        else if (responseStatus === 403) {
            alert("접근할 수 있는 사용자가 아닙니다.");
        }
    };
    // question 관련 HOOK 호출
    const { code, qnA, state, feedbacks, passCount, postFeedback, postAnswer, setCode, } = useQuestionHook(answerId, getAlert);
    // useMemberStatus HOOK 호출 -> 수정: sessionStorage 사용
    const memberStatus = sessionStorage.getItem("memberStatus");
    console.log("getItem! = ");
    if (memberStatus === null || qnA === null) {
        return _jsx("div", { className: "loading", children: "Loading..." });
    }
    console.log("qnA = ", qnA);
    return (_jsx("div", { className: state === "success"
            ? "successPage"
            : state === "fail"
                ? "failPage"
                : "nonePage", children: _jsx("div", { children: qnA && (_jsxs(_Fragment, { children: [_jsx(RenderAnswerUI, { navigate: navigate, code: code, qnA: qnA, state: state, setCode: setCode, textFst: textFst, handleTextFstChange: handleTextFstChange, postAnswer: postAnswer }), _jsx(RenderFeed, { navigate: navigate, memberStatus: memberStatus, feedbacks: feedbacks, passCount: passCount, state: state, postFeedback: postFeedback, textFst: textFst, handleTextFstChange: handleTextFstChange })] })) }) }));
};
export default QuestionPage;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { renderNewlines } from "components/common/Common";
import { StyledQuestion } from "styles/styledComponent/Question-styled";
// feedback 렌더링 컴포넌트
const RenderFeed = ({ navigate, memberStatus, feedbacks, passCount, state, postFeedback, textFst, handleTextFstChange, }) => {
    const [buttonColor1, setButtonColor1] = useState("rgba(4, 202, 0, 0.6)");
    const [buttonColor2, setButtonColor2] = useState("rgba(244, 117, 117, 0.6)");
    const [selectedOption, setSelectedOption] = useState(null);
    // pass버튼 클릭 핸들러
    const passButtonClick = () => {
        setButtonColor2("rgba(244, 117, 117, 0.6)"); // 다른 버튼 색상 초기화
        setButtonColor1("rgba(4, 202, 0, 1)"); // 현재 버튼 색깔 변경
    };
    // fail버튼 클릭 핸들러
    const failButtonClick = () => {
        setButtonColor1("rgba(4, 202, 0, 0.6)"); // 다른 버튼 색상 초기화
        setButtonColor2("rgba(244, 117, 117, 1)"); // 현재 버튼 색깔 변경
    };
    // pass, fail 선택 핸들러
    const handleOption = (option) => {
        setSelectedOption(option);
    };
    // 댓글 제출 함수
    const submitComment = () => {
        if (!textFst.current) {
            alert("내용을 입력해주세요!");
        }
        if (!selectedOption) {
            alert("통과 여부를 선택해주세요!");
        }
        else {
            const isConfirmed = window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?");
            if (isConfirmed) {
                postFeedback(textFst.current, selectedOption);
            }
        }
    };
    // 객체 값을 배열로 변환
    const feedbackArray = feedbacks ? Object.values(feedbacks) : [];
    return (_jsxs(StyledQuestion, { className: "feedback_section_1", children: [_jsx("hr", { style: {
                    height: 2,
                    border: "none",
                    backgroundColor: "gray",
                    marginTop: 100,
                } }), _jsxs("div", { className: "feedback_section", children: [memberStatus === "신입생" &&
                        feedbackArray.length <= 0 &&
                        state === "comment" && (_jsx("div", { className: "feedback_waiting_bar", onClick: () => navigate(`/`), children: "\uD53C\uB4DC\uBC31\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC911\uC785\uB2C8\uB2E4..." })), feedbackArray.length > 0 &&
                        feedbackArray.map((feedback, index) => (_jsxs("div", { className: "feedback_container", children: [feedback.commentPassFail === 1 ? (_jsx("div", { className: "feedback_result_pass", children: "PASS" })) : (_jsx("div", { className: "feedback_result_fail", children: "FAIL" })), _jsxs("div", { className: "question_header", children: [_jsx("div", { className: "feedback_index", children: `Feedback ${index + 1}` }), _jsxs("div", { className: "feedback_writer", children: [feedback.writerGen, "\uAE30"] }), _jsx("div", { className: "feedback_writer", children: feedback.writerName })] }), _jsx("div", { className: "feedback_content display", children: renderNewlines(feedback.commentContent) })] }, index))), (memberStatus === "재학생" || memberStatus === "관리자") &&
                        feedbackArray.length <= 1 &&
                        state === "comment" && (_jsxs("div", { className: "feed_section", children: [_jsx("div", { className: "question_header", children: _jsx("div", { className: "feedback_index", children: "Feedback" }) }), _jsx("textarea", { className: "feedback_content input", placeholder: "\uD53C\uB4DC\uBC31\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", onChange: handleTextFstChange }), _jsxs("div", { className: "feedback_select_section", children: [_jsxs("div", { className: "button_container", children: [_jsx("div", { className: "select_button pass", isSelected: selectedOption === "1", style: { color: buttonColor1 }, onClick: () => {
                                                    handleOption("1");
                                                    passButtonClick();
                                                }, children: "PASS" }), _jsx("div", { className: "select_button fail", isSelected: selectedOption === "0", style: { color: buttonColor2 }, onClick: () => {
                                                    handleOption("0");
                                                    failButtonClick();
                                                }, children: "FAIL" })] }), _jsx("p", { className: "select_comment", children: "PASS \uD639\uC740 FAIL\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694." })] }), _jsx("button", { className: "feedback_button", onClick: submitComment, children: "\uB2F5\uBCC0\uD558\uAE30" })] }))] }), feedbackArray.length >= 2 && (_jsxs("div", { className: "result_container", children: [_jsx("div", { className: passCount >= 1 && feedbackArray.length > 1
                            ? "result success"
                            : "result fail", onClick: () => navigate(`/`), children: passCount >= 1 && feedbackArray.length > 1
                            ? `축하합니다! 성공적으로 통과했습니다!  ( ${passCount}/2 )`
                            : `질문테스트에 통과하지 못했습니다.  ( ${passCount}/2 )` }), _jsx("p", { children: "\uD074\uB9AD\uC2DC \uD648\uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4" })] }))] }));
};
export default RenderFeed;

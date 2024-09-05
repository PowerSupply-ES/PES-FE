import React, { ChangeEvent, useState } from "react";
import { renderNewlines } from "components/common/Common";
import { StyledQuestion } from "styles/styledComponent/Question-styled";
import { CommentListType } from "model/Store";

// RenderFeed props 타입
interface RenderFeedProps {
  navigate: (path: string) => void;
  state: string;
  textFst: React.RefObject<HTMLTextAreaElement>;
  handleTextFstChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  memberStatus: string | null;
  feedbacks: CommentListType[]
  passCount: number;
  postFeedback: (comment: string, selected: number) => void;
}


// feedback 렌더링 컴포넌트
const RenderFeed: React.FC<RenderFeedProps> = ({
  navigate,
  state,
  textFst,
  handleTextFstChange,
  memberStatus,
  feedbacks,
  passCount,
  postFeedback
}) => {
  const [buttonColor1, setButtonColor1] = useState<string>("rgba(4, 202, 0, 0.6)");
  const [buttonColor2, setButtonColor2] = useState<string>("rgba(244, 117, 117, 0.6)");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
  const handleOption = (option: string) => {
    setSelectedOption(option);
  };


  // 댓글 제출 함수 - TODO : return확인 요함
  const submitComment = () => {
    if (!textFst.current || !textFst.current.value) {
      alert("내용을 입력해주세요!");
      return;
    }
    if (!selectedOption) {
      alert("통과 여부를 선택해주세요!");
      return;
    } 
    
    const isConfirmed = window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?");
    if (isConfirmed) {
      postFeedback(textFst.current.value, parseInt(selectedOption, 10));
    }
  };

  // 객체 값을 배열로 변환
  const feedbackArray = feedbacks ? Object.values(feedbacks) : [];

  return (
    <StyledQuestion className="feedback_section_1">
      <hr
        style={{
          height: 2,
          border: "none",
          backgroundColor: "gray",
          marginTop: 100,
        }}
      ></hr>

      <div className="feedback_section">
        {/* 신입생 : comment상태일때, feedback 없을때 */}
        {memberStatus === "신입생" &&
          feedbackArray.length <= 0 &&
          state === "comment" && (
            <div className="feedback_waiting_bar" onClick={() => navigate(`/`)}>
              피드백을 기다리는 중입니다...
            </div>
          )}

        {/* 신입생 : feedback 있을때 */}
        {feedbackArray.length > 0 &&
          feedbackArray.map((feedback, index) => (
            <div className="feedback_container" key={index}>
              {feedback.commentPassFail === 1 ? (
                <div className="feedback_result_pass">PASS</div>
              ) : (
                <div className="feedback_result_fail">FAIL</div>
              )}
              <div className="question_header">
                <div className="feedback_index">{`Feedback ${index + 1}`}</div>
                <div className="feedback_writer">{feedback.writerGen}기</div>
                <div className="feedback_writer">{feedback.writerName}</div>
              </div>

              {/* 줄바꿈 반영하기_ by성임 */}
              <div className="feedback_content display">
                {renderNewlines(feedback.commentContent)}
              </div>
            </div>
          ))}

        {/* 재학생_ feedback 선택 */}
        {(memberStatus === "재학생" || memberStatus === "관리자") &&
          feedbackArray.length <= 1 &&
          state === "comment" && (
            <div className="feed_section">
              <div className="question_header">
                <div className="feedback_index">Feedback</div>
              </div>
              <textarea
                className="feedback_content input"
                placeholder="피드백을 입력해주세요."
                onChange={handleTextFstChange}
              />
              {/* PASS FAIL 선택 */}
              <div className="feedback_select_section">
                <div className="button_container">
                  <div
                    className="select_button pass"
                    // isSelected={selectedOption === "1"}
                    style={{ color: buttonColor1 }}
                    onClick={() => {
                      handleOption("1");
                      passButtonClick();
                    }}
                  >
                    PASS
                  </div>
                  <div
                    className="select_button fail"
                    // isSelected={selectedOption === "0"}
                    style={{ color: buttonColor2 }}
                    onClick={() => {
                      handleOption("0");
                      failButtonClick();
                    }}
                  >
                    FAIL
                  </div>
                </div>
                <p className="select_comment">PASS 혹은 FAIL을 선택해주세요.</p>
              </div>
              <button className="feedback_button" onClick={submitComment}>
                답변하기
              </button>
            </div>
          )}
      </div>

      {feedbackArray.length >= 2 && (
        <div className="result_container">
          <div
            className={
              passCount >= 1 && feedbackArray.length > 1
                ? "result success"
                : "result fail"
            }
            onClick={() => navigate(`/`)}
          >
            {passCount >= 1 && feedbackArray.length > 1
              ? `축하합니다! 성공적으로 통과했습니다!  ( ${passCount}/2 )`
              : `질문테스트에 통과하지 못했습니다.  ( ${passCount}/2 )`}
          </div>
          <p>클릭시 홈화면으로 이동합니다</p>
        </div>
      )}
    </StyledQuestion>
  );
};

export default RenderFeed;

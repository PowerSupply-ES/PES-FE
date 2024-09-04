import React, { ChangeEvent, useState } from "react";
import ProbHeader from "components/question/ProbHeader";
import ProbCode from "components/question/ProbCode";
import { StyledQuestion } from "styles/styledComponent/Question-styled";
import { RenderAnswerUIProps } from "model/Store";

// 답변(answer) 렌더링 컴포넌트
const RenderAnswerUI: React.FC<RenderAnswerUIProps> = ({
  navigate,
  code,
  qnA,
  state,
  setCode,
  textFst,
  handleTextFstChange,
  postAnswer,
}) => {
  const [textSec, setTextSec] = useState<string>("");

  const handleTextSecChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextSec(e.target.value);
  };

  // 답변 제출 함수
  const submitAnswer = () => {
    if (!textFst.current || !textSec) { // 수정: !textSec.current -> !textSec
      alert("내용을 입력해주세요!");
    } else {
      const isConfirmed = window.confirm(
        "수정이 불가능합니다. 정말 제출하시겠습니까?"
      );

      if (isConfirmed) {
        postAnswer(textFst.current.value, textSec); // 수정: textFst.current, textSec.current -> textFst.current.value, textSec
      }
    }
  };

  return (
    <StyledQuestion className="problem_answer_section">
      {/* 문제 헤더 컴포넌트 */}
      <ProbHeader state={state} navigate={navigate} />  {/* 수정: code -> state*/}
      

      {/* 코드 출력 컴포넌트 */}
      {qnA && (
        <ProbCode
          FstHandler={handleTextFstChange}
          SecHandler={handleTextSecChange}
          code={code}
          qnA={qnA}
          setCode={setCode}
        />
      )}

      {state === "question" && (!qnA.answerFst || !qnA.answerSec) && (
        <div className="btn_container">
          <button className="button answer" onClick={submitAnswer}>
            답변하기
          </button>
        </div>
      )}
    </StyledQuestion>
  );
};

export default RenderAnswerUI;

import React, { ChangeEvent, useState } from "react";
import {ProbHeader, ProbCode} from "components/question";
import { StyledQuestion } from "styles/styledComponent/Question-styled";
import { RenderAnswerUIProps } from "model/questionType";

// 답변(answer) 렌더링 컴포넌트
const RenderAnswerUI: React.FC<RenderAnswerUIProps> = ({
  navigate,
  code,
  qnA,
  state,
  setCode,
  textFst,
  handleTextFstChange, // 질문1 입력 핸들러
  postAnswer,
}) => {

  // problemId 가져오기 - 이동하기
  const problemId = Number(sessionStorage.getItem("problemId"));

  const [textSec, setTextSec] = useState<string>("");

  // 질문2 입력 핸들러
  const handleTextSecChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextSec(e.target.value);
    console.log("textSec:", e.target.value);
  };

  // 답변 제출 함수
  const submitAnswer = () => {

    if (!textFst || !textSec) { // 수정: !textSec.current -> !textSec
      alert("내용을 입력해주세요!");

      console.log("에잉", textFst);
      console.log("에잉", textSec);
    } else {
      const isConfirmed = window.confirm(
        "수정이 불가능합니다. 정말 제출하시겠습니까?"
      );

      if (isConfirmed) {
        postAnswer(textFst, textSec); // 수정: textFst.current, textSec.current -> textFst.current.value, textSec
      }
    }
  };

  return (
    <StyledQuestion className="problem_answer_section">
      {/* 문제 헤더 컴포넌트 */}
      <ProbHeader state={state} navigate={navigate} problemId={problemId}/>  {/* 수정: code -> state*/}
      
      {/* 코드 출력 컴포넌트 */}
      {qnA && (
        <ProbCode
          FstHandler={handleTextFstChange}
          SecHandler={handleTextSecChange}
          code={code}
          qnA={qnA}
          setCode={setCode}
          problemId={problemId}
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

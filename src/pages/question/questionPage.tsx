import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useQuestionHook from "hooks/question/useQuestionHook";
import {RenderAnswerUI, RenderFeed} from "components/question";


const QuestionPage: React.FC = () => {
  const navigate = useNavigate();

  // questionId 저장 - 사용자 풀이에 사용
  let url = new URL(window.location.href);
  let answerId = Number(url.pathname.split("/")[2]);
  console.log("answerId= ",answerId);

  // problemId 가져오기 - 해당 문제 정보에 사용
  const problemId = Number(sessionStorage.getItem("problemId"));

  // 첫번재 답변 관리 - useRef로 필요 시점에만 상태 관리
  const [textFst, setTextFst] = useState<string>("");


  // 첫번재 답변 작성 핸들러
  const handleTextFstChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextFst(e.target.value)
    console.log("e.target.value = ", e.target.value);
  };

  // 댓글 제출 결과 alert 함수
  const getAlert = (responseStatus: number) => {
    if (responseStatus === 400) {
      alert("이미 댓글을 달았습니다.");
    } else if (responseStatus === 403) {
      alert("접근할 수 있는 사용자가 아닙니다.");
    }
  };

  // question 관련 HOOK 호출
  const {
    code,
    qnA,
    state,
    feedbacks,
    passCount,
    postFeedback,
    postAnswer,
    setCode,
  } = useQuestionHook(answerId, getAlert, problemId);

  // useMemberStatus HOOK 호출 -> 수정: sessionStorage 사용
  const memberStatus =sessionStorage.getItem("memberStatus");

  if (memberStatus === null || qnA === null) {
    return <div className="loading">Loading...</div>;
  }

  return (
    // 성공 or 실패에 따른 배경색
    <div
      className={
        state === "success"
          ? "successPage"
          : state === "fail"
          ? "failPage"
          : "nonePage"
      }
    > 
      <div>
        {/* qnA가 null일 경우 처리 */}
        {qnA && (
          <>
            {/* 답변 컴포넌트 */}
            <RenderAnswerUI
              navigate={navigate}
              code={code}
              qnA={qnA}
              state={state}
              setCode={setCode}
              textFst={textFst}
              handleTextFstChange={handleTextFstChange}
              postAnswer={postAnswer}
            />

            {/* feedback 컴포넌트 */}
            <RenderFeed
              navigate={navigate}
              memberStatus={memberStatus}
              feedbacks={feedbacks}
              passCount={passCount}
              state={state}
              postFeedback={postFeedback}
              textFst={textFst}
              handleTextFstChange={handleTextFstChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;

// ==== answerState 구분 ====
// - 질문 상태(question): 코드가 정상적으로 실행되어 질문에 답해야하는 상태 → 질문 테스트로 이동
//     => qnA O
// - 커멘트 상태(comment): 커멘트를 기다리는 상태 → 질문테스트 답변 결과로 이동
//     => qnA O / qnA.answerFst, qnA.answerSec O / feedback 있을 수도 없을 수도
// - 성공 상태(success): 모든 커멘트 sucess → 다른 사람의 코드도 확인 가능
// - 실패 상태(fail): 실패 상태, 커멘트 중 fail있음→ 다른 사람의 코드 확인 가능

// ==== TODO ====
// 피드백 구분
// 모든 커멘트 pass
// fail 있는 경우
// 신입생, 본인 글에는 댓글 달 수 없음 처리
// 댓글 중복으로 달 수 없음 처리
// 2명까지만 달 수 있음 처리
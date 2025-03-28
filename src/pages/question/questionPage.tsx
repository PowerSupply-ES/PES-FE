import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useQuestionHook from "hooks/question/useQuestionHook";
import RenderAnswerUI from "components/question/RenderAnswerUI";
import RenderFeed from "components/question/RenderFeed";
import Loading from "components/common/Loading";
import { useSelector } from "react-redux";
import { RootState } from "stores/store"; // RootState 임포트

const QuestionPage: React.FC = () => {
  const navigate = useNavigate();

  // questionId 저장 - 사용자 풀이에 사용
  let url = new URL(window.location.href);
  let answerId = Number(url.pathname.split("/")[2]);

  // problemId 가져오기 - 해당 문제 정보에 사용
  const problemId = Number(sessionStorage.getItem("problemId"));

  // 첫번재 답변 관리 - useRef로 필요 시점에만 상태 관리
  const [textFst, setTextFst] = useState<string>("");

  // 첫번재 답변 작성 핸들러
  const handleTextFstChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextFst(e.target.value);
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

  // useMemberStatus HOOK 호출 -> 수정: sessionStorage 사용 -> redux사용
  const { memberStatus } = useSelector((state: RootState) => state.user); // redux에서 가져오기

  useEffect(() => {
    if (memberStatus === '' || memberStatus ===null) {
      alert("풀이 열람 권한이 없습니다!");
      navigate(-1);
    }
  }, [memberStatus, qnA, navigate]);

  if (qnA === null) {
    return <Loading />;
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
        {qnA ? (
          <>
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
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default QuestionPage;

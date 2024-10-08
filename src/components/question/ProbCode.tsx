import React, {Suspense } from "react";
import { renderNewlines } from "components/common/Common";
import { ProbCodeProps } from "model/questionType";
import Loading from "components/common/Loading";
const CodeEditor = React.lazy(() => import("components/problem/CodeEditor")); // Lazy Loading 적용

// 작성했던 코드 출력 컴포넌트
const ProbCode: React.FC<ProbCodeProps> = ({
  FstHandler,
  SecHandler,
  code,
  qnA,
  setCode,
  problemId
}) => {
  return (
    <div className="code_question_container">

      {/* 좌측 코드에디터 컴포넌트 */}
      <div className="code_container">

        {/* 에디터로 수정_by성임 - Lazy Loading 적용*/}
        <Suspense fallback={<Loading/>}>
          <CodeEditor
            onChange={setCode}
            readOnly={true}
            code={code}
          />
        </Suspense>
      </div>

      {/* 우측 질문답변 컴포넌트 */}
      <div className="question_container">
        {qnA.answerState === "question" ? (   // 기존 : !qnA.answerState || !qnA.answerSec
          // answerState: question (qnA만 있음, 답변해야 하는 상태)
          <>
            <div className="question_layout">
              <div className="question_header">
                <div className="question_id">질문 1</div>
                <div className="header_title">{qnA.questionContentFst}</div>
              </div>
              <textarea className="answer_input" onChange={FstHandler} />
            </div>

            <div className="question_layout">
              <div className="question_header">
                <div className="question_id">질문 2</div>
                <div className="header_title">{qnA.questionContentSec}</div>
              </div>
              <textarea className="answer_input" onChange={SecHandler} />
            </div>
          </>
        ) : (
          // < answerState 참고 >
          // answerState: comment (qnA O / qnA.answerFst, qnA.answerSec O / feedback 0개 or 1개)
          // answerState: success
          // answerState: fail
          <>
            <div className="question_header">
              <div className="question_id">질문 1</div>
              <div className="header_title">{qnA.questionContentFst}</div>
            </div>

            {/* 줄바꿈 반영하기_ by성임 */}
            <div className="answer_input display">
              {renderNewlines(qnA.answerFst)}
            </div>

            <div className="question_header">
              <div className="question_id">질문 2</div>
              <div className="header_title">{qnA.questionContentSec}</div>
            </div>
            <div className="answer_input display">
              {renderNewlines(qnA.answerSec)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProbCode;

import React from "react";
import { MyProbProps } from "model/userType";

// 내가 푼 문제 컴포넌트
const MyProb: React.FC<MyProbProps> = ({ myProb, navigate }) => {
  const gotoProb = (problemId: number) => {
    console.log("problemId: ", problemId);
    navigate(`/question/${problemId}`);
    // question/answerid
  };

  return (
    <div className="problemList">
      {myProb.length === 0 ? (
        <div className="noProblems">아직 푼 문제가 없어요!</div>
      ) : (
        myProb.map((it) => (
          <div className="problems" key={it.answerId}>
            <p className="problemId">{it.problemId}</p>
            <p className="problemTitle" onClick={() => gotoProb(it.answerId)}>
              {it.problemTitle}
            </p>

            <p className="finalScore">{it.finalScore}점</p>
            <p className="dash">/</p>
            <p className="problemScore">{it.problemScore}점</p>

            <div
              className={`${
                it.answerState === "success"
                  ? "btn_success"
                  : it.answerState === "fail"
                  ? "btn_fail"
                  : "btn_state"
              }`}
            >
              {it.answerState === "question"
                ? "질문대기"
                : it.answerState === "comment"
                ? "피드백대기"
                : it.answerState}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyProb;

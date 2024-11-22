import React from "react";
import { useNavigate } from "react-router-dom";
import { SolvingListProps } from "model/userType";


// 풀이list 컴포넌트
const SolvingList: React.FC<SolvingListProps> = ({ solveData }) => {
  const navigate = useNavigate();

  // 해당 풀이로 이동
  const gotoProblem = (answerId : number) => {
    console.log("answerId: ", answerId);
    navigate(`/question/${answerId}`);
  };

  return (
    <div className="solving_list">
      {solveData.map(
        (it) =>
          // answerState가 "question"과 일치하지 않을 때에만 렌더링( 수정: answerId -> answerState )
          it.answerState !== "question" && (
            <div className="solving" key={it.answerId}>
              {/* 풀이컴포넌트 좌측 요소 */}
              <div className="left">
                <div className="userGen">
                  <p>{it.memberGen}</p>
                  <p>기 </p>
                </div>
                <div className="userName">{it.memberName}</div>
              </div>

              {/* 풀이컴포넌트 우측 요소 */}
              <div className="right">
                <div className="process_num">{it.commentCount}/2</div>
                <div
                  className={`${
                    it.answerState === "success"
                      ? "btn_success"
                      : it.answerState === "fail"
                      ? "btn_fail"
                      : "btn_state"
                  }`}
                >
                  {it.answerState}
                </div>

                <button
                  className="btn_goto_challenge"
                  onClick={() => gotoProblem(it.answerId)}
                >
                  풀이보기
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default SolvingList;

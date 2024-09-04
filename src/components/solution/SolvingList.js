import { useNavigate } from "react-router-dom";

// 풀이list 컴포넌트
const SolvingList = ({ solveData }) => {
  const navigate = useNavigate();

  // 해당 풀이로 이동
  const gotoProblem = (answerId) => {
    console.log("answerId: ", answerId);
    navigate(`/question/${answerId}`);
  };

  return (
    <div className="solving_list">
      {solveData.map(
        (it) =>
          // answerId가 "question"과 일치하지 않을 때에만 렌더링
          it.answerId !== "question" && (
            <div className="solving" key={it.answerId}>
              <div className="left">
                <div className="userGen">
                  {it.memberGen}
                  <p>기 </p>
                </div>
                <div className="userName">{it.memberName}</div>
              </div>
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

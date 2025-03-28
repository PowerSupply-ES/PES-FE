import "styles/css/solution.css";
import SolvingList from "components/solution/SolvingList";
import {useSoluProb, useSoluList} from "hooks/solution";
import Loading from "components/common/Loading";

const SolutionPage = () => {
  // TODO : split한 problemId와 solveData.problemId 구분하기
  let url = new URL(window.location.href);
  let problemId = (url.pathname.split("/")[2]);
  sessionStorage.setItem("problemId", problemId);

  // 인수 전달을 위한 problem 타입 가공
  const problemIdParsed = Number(problemId);
  // 문제 get API HOOk
  const problemData = useSoluProb(problemIdParsed);
  // 풀이 get API HOOk
  const solveData = useSoluList(problemIdParsed);

  // 조건부 렌더링
  if (!problemData || !solveData.length) {
    return <Loading/>;
  }

  return (
    <div className="solution_container">
      <div className="solution_bar">
        <div className="solution">
          <div className="left">
            <div className="solution_num">{problemData.problemId}</div>
            <div className="solution_title">{problemData.problemTitle}</div>
          </div>

          <div className="prob_score">
            <p>{problemData.problemScore}</p>
            <p>점</p>
          </div>
        </div>
      </div>

      <div className="pass_num"></div>

      {/* 풀이 list */}
      <SolvingList solveData={solveData}></SolvingList>
    </div>
  );
}

export default SolutionPage;

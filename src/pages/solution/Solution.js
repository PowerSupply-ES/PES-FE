import 'styles/css/solution.css';
import SolvingList from 'components/solution/SolvingList';
import useSoluProb from 'hooks/solution/useSoluProb';
import useSoluList from 'hooks/solution/useSoluList';

function Solution() {

  let url = new URL(window.location.href);
  let problemId = url.pathname.split('/')[2];

  sessionStorage.setItem('problemId', problemId);

  // 문제 get API HOOk
  const problemData = useSoluProb(problemId);
  // 풀이 get API HOOk
  const solveData = useSoluList(problemId);

  // 조건부 렌더링
  if (!problemData || !solveData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="solution_container">
      <div className="solution_bar">
        <div className="solution">
          <div className='left'>
            <div className="solution_num">{problemData.problemId}</div>
            <div className="solution_title">{problemData.problemTitle}</div>
          </div>
          
          <div className="prob_score">{problemData.problemScore}<p>점</p></div>

        </div>
      </div>

      <div className="pass_num"></div>

      {/* 풀이 list */}
      <SolvingList solveData={solveData}></SolvingList>
    </div>
  );
}

export default Solution;

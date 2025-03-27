// problem 페이지 문제 컴포넌트
import { renderNewlines } from "components/common/Common";

const ProblemContent = ({problem}) => {
  return (
    <>
      <div className="top" style={{ whiteSpace: "pre" }}>
        <p className="underline">문제</p>
        <div className="prob_text">
        {/* renderNewlines : '\n' 기준으로 줄바꿈 함수 */}
        {problem?.problemContent &&
            renderNewlines(problem.problemContent)}
        </div>
      </div>
    </>
  )
}

export default ProblemContent

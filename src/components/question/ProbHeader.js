import useProbPage from 'hooks/problem/useProbPage';
import React, { useState } from 'react'
import { StyledProblem } from "styles/styledComponent/Problem-styled";
import { renderNewlines } from 'components/common/Common'; 


// 문제 헤더 컴포넌트
const ProbHeader = ({state, navigate}) => {

  const problemId = sessionStorage.getItem('problemId');
  const [isDropdownOpen,setIsDropdownOpen] = useState(false);

  // problem 제목, 내용 HOOK 호출
  const {title, problem} = useProbPage(problemId);
  

  // 문제보기 dropdown 상태관리 함수
  const toggleDropdown = () => {
    setIsDropdownOpen((state) => !state);
  }

  return (
    <StyledProblem className="problem_header_section" state={state}>
        <div className="problem_header">
            <div className="problem_group">
                <div className="problem_id">문제{problemId}</div>
                <div className="header_title">{title.problemTitle}</div>
                <div className="header_answer_state">
                    {state === "success" ? "성공" : state === "fail" ? "실패" : "미완료"}
                </div>
            </div>

        </div>

        <div className="button_group">
            <button className="button_problem" onClick={toggleDropdown}>문제보기
                {isDropdownOpen && (
                <div className='dropdown_content'>
                    {/* 띄워쓰기 표현_ by성임*/}
                    <div className="content" style={{ whiteSpace: 'pre'}}>
                        {/* renderStyledNewlines: '\n' 기준으로 줄바꿈 함수 */}
                        {problem.problemContent && renderNewlines(problem.problemContent)}
                    </div>

                    <div className="sample_inputs">
                        <h3>Sample Inputs:</h3>
                            {problem.sampleInputs && problem.sampleInputs.map((input, index) => (
                            <React.Fragment key={index}>
                                {renderNewlines(input)}
                            </React.Fragment>
                        ))}
                    </div>
    
                    <div className="sample_outputs" style={{ whiteSpace: 'pre'}}>
                        <h3>Sample Outputs:</h3>
                        {problem.sampleOutputs && problem.sampleOutputs.map((output, index) => (
                            <React.Fragment key={index}>
                                {renderNewlines(output)}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                )}
            </button>
            {(state === "success" || state === "fail") && (
                <button className="button_solution" onClick={() => navigate(`/solution/${problemId}`)}>다른 풀이 보기</button> 
            )}
        </div>
    </StyledProblem>
  )
}

export default ProbHeader
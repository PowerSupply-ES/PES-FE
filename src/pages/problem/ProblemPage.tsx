import React from "react";
import { StyledProblem } from "styles/styledComponent/Problem-styled";
import CodeEditor from "components/problem/CodeEditor";
import useProbPage from "hooks/problem/useProbPage";
import { renderNewlines, renderStyledNewlines } from "components/common/Common";

const ProblemPage: React.FC = () => {
  let url = new URL(window.location.href);
  let problemId = Number(url.pathname.split("/")[2]); // 문자열을 숫자로 변환

  // 관련 HOOK 호출
  const { title, problem, detail, isLogin, textHandler, submitCode } =
    useProbPage(problemId);

  // 문제 UI 렌더링 함수
  const renderProbUI = () => {

    return (
      <StyledProblem state={"null"}>
        <div className="problem_header">
          <div className="problem_group">
            <div className="problem_id">문제{problemId}</div>
            <div className="header_title">{title?.problemTitle}</div>
            <div className="header_answer_state">미완료</div>
          </div>
        </div>

        <div className="problem_section">
          <div className="content_container">
            {/* 상단문제 */}
            <div className="top" style={{ whiteSpace: "pre" }}>
              <p className="underline">문제</p>
              <div className="prob_text">
                {/* renderNewlines : '\n' 기준으로 줄바꿈 함수 */}
                {problem?.problemContent &&
                  renderNewlines(problem.problemContent)}
              </div>
            </div>

            {/* 하단 sample input */}
            <div className="bottom">
              <div className="sample_inputs" style={{ whiteSpace: "pre" }}>
                <p className="underline">Sample Inputs</p>
                <div className="input_text">
                  {problem?.sampleInputs &&
                    problem.sampleInputs.map((input, index) => (
                      <React.Fragment key={index}>
                        {/* renderStyledNewlines : '\n\n' 기준으로 줄바꿈 함수 */}
                        {renderStyledNewlines(input)}
                      </React.Fragment>
                    ))}
                </div>
              </div>

              <div className="sample_outputs" style={{ whiteSpace: "pre" }}>
                <p className="underline">Sample Outputs</p>
                <div className="output_text">
                  {problem?.sampleOutputs &&
                    problem.sampleOutputs.map((output, index) => (
                      <React.Fragment key={index}>
                        {renderStyledNewlines(output)}
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* 우측 코드 입력 */}
          <div className="code_section">
            {isLogin ? (
              <>
                {/* 변경코드 */}
                <CodeEditor
                  code={""} // 현재 코드 상태
                  onChange={textHandler} // 코드 변경 핸들러
                  readOnly={false} // 읽기 전용 여부
                />

                {detail !== null && detail !== undefined && (
                  <div className="detail_container">
                    <h3>틀린 이유</h3>
                    <div className="detail_content">{detail}</div>
                  </div>
                )}
              </>
            ) : (
              <textarea
                disabled
                className="code_input"
                placeholder="로그인 후 이용해주세요."
              />
            )}
          </div>
        </div>

        <button
          className={isLogin ? "submit_button" : "submit_button disabled"}
          onClick={() =>
            //기존코드
            //isLogin && submitCode()

            //수정코드 by성임
            {
              if (isLogin) {
                if (
                  window.confirm("수정이 불가능합니다. 정말 제출하시겠습니까?")
                ) {
                  submitCode();
                }
              }
            }
          }
        >
          제출
        </button>
      </StyledProblem>
    );
  };

  return (
    <div>
      {problem ? renderProbUI() : <div className="loading">Loading...</div>}
    </div>
  );
};

export default ProblemPage;

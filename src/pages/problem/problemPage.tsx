import React from "react";
import { StyledProblem } from "styles/styledComponent/Problem-styled";
import useProbPage from "hooks/problem/useProbPage";
import Loading from "components/common/Loading";
import ProblemContent from "components/problem/ProblemContent";
import SampleContent from "components/problem/SampleContent";
import CodeInputArea from "components/problem/CodeInputArea";

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
        {/* 상단 title */}
        <div className="problem_header">
          <div className="problem_group">
            <div className="problem_id">문제{problemId}</div>
            <div className="header_title">{title?.problemTitle}</div>
            <div className="header_answer_state">미완료</div>
          </div>
        </div>

        <div className="problem_section">
          {/* 좌측 문제 */}
          <div className="content_container">
            {/* 상단문제 컴포넌트 */}
            <ProblemContent problem={problem} />

            {/* 하단 sample 컴포넌트 */}
            <SampleContent problem={problem} />
          </div>

          {/* 우측 코드 입력 컴포넌트 */}
          <CodeInputArea isLogin={isLogin} detail={detail} textHandler={textHandler}/>
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

  return <div>{title && problem ? renderProbUI() : <Loading />}</div>;
};

export default ProblemPage;

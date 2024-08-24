import { useRef } from "react";
import MemberStatus from "hooks/question/MemberStatus";
import { useNavigate } from "react-router-dom";
import useQuestionHook from "hooks/question/useQuestionHook";
import RenderAnswerUI from "components/question/RenderAnswerUI";
import RenderFeed from "components/question/RenderFeed";

const QuestionPage = () => {

    const navigate = useNavigate();

    let url = new URL(window.location.href);
    let answerId = url
        .pathname
        .split('/')[2];

    const textFst = useRef("");

    
    // 댓글 제출 결과 alert 함수
    const getAlert = (response) => {
        if (response === 400) {
            alert("이미 댓글을 달았습니다.");
        }
        else if (response === 403) {
            alert("접근할 수 있는 사용자가 아닙니다.");
        }
    }
    
    // question 관련 HOOK 호출
    const { code, qnA, state, feedbacks, passCount, postFeedback, postAnswer, setCode } = useQuestionHook(answerId, getAlert);

    
    // 답변 입력 핸들러
    const FstHandler = (e) => {
        textFst.current = e.target.value;
    }


    return(
        <div className={state === "success" ? "successPage" : state === "fail" ? "failPage" : "nonePage"}>                  
            <MemberStatus>
                {(memberStatus) => {
                    if (!memberStatus) {
                        return <div className="loading">Loading...</div>;
                    }

                    return (
                        <div>
                            {RenderAnswerUI(navigate, code, qnA, state, setCode, textFst, FstHandler, postAnswer)}  {/* 답변 렌더링 함수 */}
                            {RenderFeed(navigate, memberStatus, feedbacks, passCount, state, postFeedback, textFst, FstHandler)}  {/* feedback 렌더링 함수 */}
                        </div>
                    );
                }}
            </MemberStatus>
        </div>
    );
}

export default QuestionPage;


// TODO
// 렌더링 시, answerState 필요
// 질문 줄 때 (get /question) 같이 넘겨줌

// getCode와 getQuestions는 항상 call
// getFeedback은 아래 상태일 때만 call

    // answerState 구분
// - 질문 상태(question): 코드가 정상적으로 실행되어 질문에 답해야하는 상태 → 질문 테스트로 이동
// => qnA O
// - 커멘트 상태(comment): 커멘트를 기다리는 상태 → 질문테스트 답변 결과로 이동
// => qnA O / qnA.answerFst, qnA.answerSec O / feedback 있을 수도 없을 수도
// - 성공 상태(success): 모든 커멘트 sucess → 다른 사람의 코드도 확인 가능
// - 실패 상태(fail): 실패 상태, 커멘트 중 fail있음→ 다른 사람의 코드 확인 가능

// 피드백 구분
// 모든 커멘트 pass
// fail 있는 경우
// 신입생, 본인 글에는 댓글 달 수 없음 처리
// 댓글 중복으로 달 수 없음 처리
// 2명까지만 달 수 있음 처리
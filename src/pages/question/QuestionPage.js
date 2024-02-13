import { useState, useEffect } from "react";
import axios from "axios";
import Header from "components/main/Header";
import { StyledQuestion } from 'styles/Question-styled';
import { StyledProblem } from "styles/Problem-styled";

const QuestionPage = () => {
    var url = new URL(window.location.href);
    var answerId = url
        .pathname
        .split('/')[2];

    const [state, setState] = useState("");
    const [problem, setProblem] = useState([]);
    const [code, setCode] = useState("");
    const [qnA, setQnA] = useState([]);
    const [answerFst, setAnswerFst] = useState("");
    const [answerSec, setAnswerSec] = useState("");
    const [feedbacks, setFeedbacks] = useState([]);
    const [comment, setComment] = useState("");
    const [selected, setSelected] = useState(0);

    // 렌더링 시, answerState 필요
    // 질문 줄 때 (get /question) 같이 넘겨줌

    // getCode와 getQuestions는 항상 call
    // getFeedback은 아래 상태일 때만 call

    if (state === "comment" || "success" || "fail") {
        // getFeedback
    } 

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

    // 문제 불러오기

    // 답변 제출
    function submitAnswer() {
        if (!answerFst || !answerSec) {
            alert("내용을 입력해주세요!");
        }
        else {
            postAnswer(answerFst, answerSec);
        }
    }

    // 사용자가 작성한 코드 불러오기 (get)
    async function getCode() {
        try {
            const {data: response} = await axios.get(
                `/api2/answer/${problemId}/${memberEmail}`,
                {withCredentials: true}
            );
            setCode(response.detail);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCode();
    }, []);

    // 질문, 답변 블러오기 (get)
    async function getQuestions() {
        try {
            const {data: response} = await axios.get(
                `/api/answer/${answerId}`,
                {withCredentials: true}
            );
            setQnA(response);
            setState(response.answerState);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getQuestions();
    }, []);

    // 질문 답변하기 (post)
    async function postAnswer(answerFst, answerSec) {
        try {
            const {data: response} = await axios.post(
                `/api/answer/${answerId}`,
                {
                    answerFst: answerFst,
                    answerSec: answerSec
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    // 댓글 불러오기
    // 댓글 달기

    function renderAnswerUI() {
        return (
            <StyledQuestion>
                <StyledProblem>
                    <div className="problem_header">
                        <span className="problem_id">{problemId}</span>
                        <span className="header_title">{problem.title}</span>
                        <div className="code_container">{code}</div>
                    </div>
                </StyledProblem>
                {
                    (!qnA.answerFst || !qnA.answerSec) 
                    // answerState: question (qnA만 있음, 답변해야 하는 상태)
                        ? <> <div className="question_header"> <div className="question_id">질문 1</div>
                        <span className="header_title">{qnA.questionContentFst}</span>
                    </div>
                    <textarea className="answer_input" onChange={(e) => setAnswerFst(e.target.value)}/>
                    <div className="question_header">
                        <div className="question_id">질문 2</div>
                        <span className="header_title">{qnA.questionContentSec}</span>
                    </div>
                    <textarea className="answer_input" onChange={(e) => setAnswerSec(e.target.value)}/>
                    <button className="answer_button" onClick={() => submitAnswer()}>답변하기</button> </>
                    // answerState: comment (qnA O / qnA.answerFst, qnA.answerSec O / feedback 0개 or 1개)
                    // answerState: success
                    // answerState: fail
                    : <> 
                    <div className="question_header"> <div className="question_id">질문 1</div>
                        <span className="header_title">{qnA.questionContentFst}</span>
                    </div>
                        <div className="code_container">{qnA.answerFst}</div>
                        <div className="question_header"> <div className="question_id">질문 2</div>
                        <span className="header_title">{qnA.questionContentSec}</span>
                    </div>
                            <div className="code_container">{qnA.answerSec}</div>
                        </>
                }
            </StyledQuestion>
        );
    }

    return(
        <div>
            <Header/>
            {renderAnswerUI()}
        </div>
    );
}

export default QuestionPage;